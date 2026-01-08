
class Player {
    c = {
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
    constructor(x, y, material = '#', width = 1, height = 3, color = 'blue',) {
        this.x = x;
        this.y = y;
        this.material = material;
        this.width = width;
        this.height = height;
        this.color = this.c[color];
    }
    goUp() {
        if (this.y - 1 <= 0) return;
        this.y--;
    }
    goDown(max) {
        if (this.y + this.height + 1 >= max) return;
        this.y++;
    }
    draw() {
        for (let i = 0; i < this.height; i++) {
            process.stdout.write(`${this.color}\x1b[${this.y + i};${this.x}H${this.material}${this.c.reset}\n`);
        }
    }
    setMaterial(material) {
        this.material = material;
    }
    getScore() {
        return score;
    }
}
class Boll {
    c = {
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
    constructor(x, y, width = 1, height = 3, color = 'blue', material = '*') {
        this.x = x;
        this.y = y;
        this.material = material;
        this.width = width;
        this.height = height;
        this.color = this.c[color];
        this.dx = 0;
        this.dy = 0;
    }
    update(maxX, maxY) {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x + this.dx < 0 || this.x + this.dx > maxX) this.dx *= -1;
        if (this.y + this.dy < 0 || this.y + this.dy >= maxY) this.dy *= -1;
    }
    collision() {
        const random = Math.floor(Math.random() * 2) - 1;
        this.dx *= -1;
        this.dy = random;
    }
    draw() {
        process.stdout.write(`\x1b[?25l${this.color}\x1b[${this.y};${this.x}H${this.material}${this.c.reset}`);
    }
    createDirection() {
        let dx = Math.floor(Math.random() * 2) - 1;
        let dy = Math.floor(Math.random() * 2) - 2;
        if (dx === 0) dx += -1;
        console.log(dx);
        console.log(dy);
        this.dx = dx;
        this.dy = dy;
    }
}
function pingPong(speed = 40) {
    const width = process.stdout.columns;
    const height = process.stdout.rows;

    const y = Math.floor(height / 2);
    let player1 = new Player(2, y, '|');
    let player2 = new Player(width - 3, y, '|');
    const ball = new Boll(Math.floor(width / 2), Math.floor(height / 2));
    let score1 = 0;
    let score2 = 0;
    let isPlay = true;

    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf8");

    process.stdin.on('data', (key) => {
        if (key === '\x1b[A') {
            player2.goUp();
            // console.log('⬆️ Вверх');
        } if (key === '\x1b[B') {
            player2.goDown(height);
            // console.log('⬇️ Вниз');
        } if (key === 'w') {
            player1.goUp();
        } if (key === 's') {
            player1.goDown(height);
        } if (key === '\u0003') process.exit();
    });
    function clear() {
        console.clear();
    }
    function drawScore() {
        process.stdout.write(`\x1b[0;0HScore1:${score1}`)
        process.stdout.write(`\x1b[0;${width - 10}HScore2:${score2}`)
    }
    function checkCollision() {
        if (
            ball.x === player1.x &&
            ball.y >= player1.y &&
            ball.y <= player1.y + player1.height ||
            ball.x === player2.x &&
            ball.y <= player2.y + player2.height &&
            ball.y >= player2.y
        ) {
            ball.collision();
        }
    }
    function checkPoint() {
        if (ball.x <= 0) {
            score2++;
        } if (ball.x >= width) {
            score1++;
        }
    }
    function init() {
        ball.createDirection();
        ball.draw();
        player1.draw();
        player2.draw();
    }
    init();
    let interval = setInterval(() => {
        main();
    }, speed);

    function main() {
    if(!isPlay) return;
        clear();
        drawScore();
        player1.draw();
        player2.draw();
        ball.update(width, height);
        checkPoint();
        checkCollision();
        ball.draw();
    }
}
pingPong(70);