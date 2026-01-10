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
class Bird {
    constructor(x, y, material = '>', color = 'blue') {
        this.x = x;
        this.y = y;
        this.material = material;
        this.color = c[color];
        this.jumpCount = 0;
        this.gravity = 1;
        this.isJump = false;
        this.prevY = 0;

        this.velocityY = 0;
        this.gravity = 0.5;
        this.jumpPower = 4;
    }
    update() {
        this.prevY = this.y;
        this.y += this.gravity;
        if (this.isJump) {
            this.jump();
        } else { this.y += this.gravity }
    }
    clear() {
        process.stdout.write(`\x1b[${this.prevY};${this.x}H  `);
    }
    jump() {
        this.velocityY = -this.jumpPower;
    }
    jump() {
        if (!this.isJump) return;
        if (this.jumpCount > 6) {
            this.jumpCount = 0;
            this.isJump = false;
            return;
        }
        this.y -= 1;
        this.jumpCount++;
    }
    draw() {
        const y = Math.round(this.y);
        process.stdout.write(`${this.color}\x1b[${y};${this.x}H#${this.material}${c.reset}`);
    }
}

class Obstacle {
    constructor(x, y, whole = 3, material = '#', color = 'magenta') {
        this.x = x;
        this.y = y;
        this.whole = whole;
        this.material = material;
        this.color = c[color];
    }
    update() {
        this.x--;
    }
    clear(height) {
        for (let i = 0; i < height; i++) {
            process.stdout.write(`\x1b[${i};${this.x}H  `);
        }
    }
    draw(height) {
        for (let i = 0; i < height; i++) {
            if (i > this.y && i < this.y + this.whole) continue;
            process.stdout.write(`${this.color}\x1b[${i};${this.x}H${this.material}${c.reset}`);
            process.stdout.write(`${this.color}\x1b[${i};${this.x - 1}H${this.material}${c.reset}`);
        }
    }
}

function game(speed = 100) {

    const width = process.stdout.columns;
    const height = process.stdout.rows;
    let isPlay = true;
    const bird = new Bird(Math.floor(width / 10), Math.floor(height / 2), '>', 'blue');
    let obstacleCounter = 30;
    let obstacles = [];
    let score = 0;

    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    console.clear();

    process.stdout.write(`\x1b[?25l`);
    process.stdin.on('data', (key) => {
        const actions = {
            ' ': () => bird.isJump = true,
            'c': () => continueGame(),
            'r': () => restartGame(),
            '\u0003': () => process.exit()
        }
        if (Object.keys(actions).includes(key)) actions[key]();
    });
    function gameOver() {
        const content = `You Loose!!!\nYour Score:${score}\npres r to restart\npres c to continue\nCtr+C exit`;
        process.stdout.write(`${c.red}\x1b[${Math.floor(height / 2)};${Math.floor(width / 2)}H${content}${c.reset}`);
    }
    function clear() {
        bird.clear();
        obstacles.forEach(el => el.clear(height));
    }

    function checkCollision() {
        for (let obs of obstacles) {
            const hitX = bird.x === obs.x || bird.x === obs.x - 1;
            const hitY = bird.y <= obs.y || bird.y >= obs.y + obs.whole;
            if (hitX && hitY) {
                isPlay = false;
                return;
            } else {
                score++;
            }
        }
    }
    function restartGame() {
        console.clear();
        obstacles = [];
        bird.x = Math.floor(width / 10);
        bird.y = Math.floor(height / 2);
        isPlay = true;
        score = 0;
    }
    function continueGame() {
        console.clear();
        bird.x = Math.floor(width / 10);
        bird.y = Math.floor(height / 2);
        isPlay = true;
    }
    function logScore() {
        process.stdout.write(`\x1b[1;1HScore:${score}`);
    }
    let interval = setInterval(() => {
        main();
    }, speed);
    function createObstacle() {
        if (obstacleCounter < 30) return;
        obstacleCounter = 0;
        const y = Math.floor(Math.random() * (height - 10)) + 2;
        obstacles.push(new Obstacle(width, y, 5));
    }
    function updateObstacles() {
        for (let i = 0; i < obstacles.length; i++) {
            obstacles[i].update();
            if (obstacles[i].x < 0) obstacles.splice(i, 1);
            obstacles[i].draw(height);
        }
    }
    function main() {
        if (!isPlay) { gameOver(); return };
        clear();
        createObstacle();
        updateObstacles();
        bird.update();
        bird.draw();
        checkCollision();
        logScore();
        obstacleCounter++;
        if (bird.y > height) isPlay = false;
    }
}
game(100);