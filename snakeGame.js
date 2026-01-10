const c = {
    reset: "\x1b[0m",
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    gray: "\x1b[90m",
    bold: "\x1b[1m",
    dim: "\x1b[2m",
    underline: "\x1b[4m",
};
class Snake {
    constructor(x, y, material = '#', color = 'blue') {
        this.x = x;
        this.y = y;
        this.material = material;
        this.color = c[color];
        this.snake = [{ x: this.x, y: this.y }];
    }
    goUp() {
        this.snake[0].y = this.snake[0].y - 1;
    }
    goDown() {
        this.snake[0].y = this.snake[0].y + 1;
    }
    goRight() {
        this.snake[0].x = this.snake[0].x + 1;
    }
    goLeft() {
        this.snake[0].x = this.snake[0].x - 1;
    }
    update() {
        this.prevX = this.snake[this.snake.length - 1].x;
        this.prevY = this.snake[this.snake.length - 1].y;
        for (let i = this.snake.length - 1; i > 0; i--) {
            if (!this.snake[i - 1]) return;
            this.snake[i].x = this.snake[i - 1].x;
            this.snake[i].y = this.snake[i - 1].y;
        }
    }
    clear() {
        for (let i = 0; i < this.snake.length; i++) {
            process.stdout.write(`\x1b[${this.snake[i].y};${this.snake[i].x}H `);
        }
    }
    addSnake() {
        const snake = { x: this.prevX, y: this.prevY };
        this.snake.push(snake);
    }
    draw() {
        for (let i = 0; i < this.snake.length; i++) {
            if (i === 0) {
                process.stdout.write(`${c.white}\x1b[${this.snake[i].y};${this.snake[i].x}H${this.material}${c.reset}`);
            } else {
                process.stdout.write(`${this.color}\x1b[${this.snake[i].y};${this.snake[i].x}H${this.material}${c.reset}`);
            }
        }
    }
}

class Food {
    constructor(x, y, material = '*', color = 'white') {
        this.x = x;
        this.y = y;
        this.material = material;
        this.color = c[color];
        this.foods = [{ x: this.x, y: this.y }];
        this.width = process.stdout.columns;
        this.height = process.stdout.rows;
    }
    createFood() {
        const rX = Math.floor(Math.random() * (this.width - 2)) + 2;
        const rY = Math.floor(Math.random() * (this.height - 2)) + 2;
        const food = { x: rX, y: rY };
        this.foods = [...this.foods, food];
    }
    draw() {
        for (let i = 0; i < this.foods.length; i++) {
            process.stdout.write(`${this.color}\x1b[${this.foods[i].y};${this.foods[i].x}H${this.material}${c.reset}`);
        }
    }
}

function game(speed = 100) {
    const width = process.stdout.columns;
    const height = process.stdout.rows;
   
    let direction = 'd';
    let prevD = 'd';
    const snake = new Snake(Math.floor(width / 2), Math.floor(height / 2));
    const food = new Food(Math.floor(Math.random() * width), Math.floor(Math.random() * height));
    let score = 0;
    let isPlay = true;
     let actions = {
        w: () => snake.goUp(),
        s: () => snake.goDown(),
        d: () => snake.goRight(),
        a: () => snake.goLeft()
    }

    process.stdout.write(`\x1b[?25l`);
    console.clear();
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf8");

    process.stdin.on('data', (key) => {
        if (key === '\u0003') process.exit();
        if (key === 'c') continueGame();
        if (key === 'r') restartGame();

        if (Object.keys(actions).includes(key)) direction = key;
    })
    function continueGame() {
        console.clear();
        const x = Math.floor(width / 2);
        const y = Math.floor(height / 2);
        snake.snake[0] = { x, y };
        direction = 'd';
        isPlay = true;
    }
    function restartGame() {
        console.clear();
        const x = Math.floor(width / 2);
        const y = Math.floor(height / 2);
        snake.snake = [{ x, y }];
        score = 0;
        direction = 'd';
        isPlay = true;
    }
    function checkCollision() {
        const f = food.foods;
        for (let i = 0; i < food.foods.length; i++) {
            if (snake.snake[0].x === f[i].x && snake.snake[0].y === f[i].y) {
                food.foods.splice(i, 1);
                food.createFood();
                snake.addSnake();
                score++;
            }
        }
    }
    function logScore() {
        process.stdout.write(`\x1b[1;1HScore:${score}`);
    }
    function gameOver() {
        const x = Math.floor(width / 2);
        const y = Math.floor(height / 2);
        const content = `You Loose!!!\nScore:${score}\nPres r to retry\nPres c to continue`;
        process.stdout.write(`${c.red}\x1b[${y};${x}H${content}${c.reset}`);
        isPlay = false;
    }
    function snakeMove() {
        if (
            prevD === 's' && direction === 'w' ||
            prevD === 'w' && direction === 's' ||
            prevD === 'd' && direction === 'a' ||
            prevD === 'a' && direction === 'd'
        ) {
            actions[prevD]();
            direction = prevD;
        } else {
            actions[direction]();
            prevD = direction;
        }
    }
    function checkBite() {
        for (let i = 1; i < snake.snake.length; i++) {
            if (
                snake.snake[0].x === snake.snake[i].x &&
                snake.snake[0].y === snake.snake[i].y
            ) {
                gameOver();
            }
        }
    }
    function draw() {
        snake.draw();
        food.draw();
    }
    function clear() {
        snake.clear();
    }

    setInterval(() => {
        main();
    }, speed);

    function main() {
        if (!isPlay) { gameOver(); return; }
        clear();
        snake.update();
        snakeMove();
        logScore();
        draw();
        checkBite();
        checkCollision();
        if (snake.snake[0].x > width || snake.snake[0].x < 1 || snake.snake[0].y > height || snake.snake[0].y < 1) isPlay = false;
    }
}
game(200);