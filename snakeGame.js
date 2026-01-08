
function snake(material = "#", color = 'red', mode = 'simple', speed = 100) {
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
    let direction = 'right';
    let foodPos = { x: 0, y: 0, width: 1, height: 1 };
    const width = process.stdout.columns;
    const height = process.stdout.rows;
    let score = 0;
    let isPlay = true;
    let x = Math.floor(width / 2);
    let y = Math.floor(height / 2);
    const action = {
        up: () => y -= 1,
        down: () => y += 1,
        right: () => x += 2,
        left: () => x -= 2
    }

    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf8");

    function clearLog(){
        console.clear();
    }
    function draw() {
        process.stdout.write(`${c[color]}\x1b[${y};${x}H${material}\x1b[0m`);
    }
    function createFood() {
        const x = Math.floor(Math.random() * (width - 2));
        const y = Math.floor(Math.random() * (height - 2));
        return { x, y, width: foodPos.width, height: foodPos.height };
    }
    function drawFood() {
        process.stdout.write(`\x1b[?25l\x1b[${foodPos.y};${foodPos.x}H*`);
    }
    function drawScore() {
        process.stdout.write(`\x1b[0;0HScore:${score}`);
    }
    function checkCollision() {
        if (
            x <= foodPos.x + foodPos.width &&
            x >= foodPos.x - foodPos.width &&
            y <= foodPos.y + foodPos.height &&
            y >= foodPos.y - foodPos.height
        ) {
            foodPos = createFood();
            score++;
        }
    }
    function init() {
        foodPos = createFood();
        draw();
    }
    init();
    let interval = setInterval(gameLoop, speed);
    process.stdin.on("data", key => {
        if (key === 'w') direction = 'up';
        if (key === 's') direction = 'down';
        if (key === 'd') direction = 'right';
        if (key === 'a') direction = 'left';
        if (key === 'r') {
            x = Math.floor(width/2);
            y = Math.floor(height/2);
            isPlay = true;
            direction = 'right';
            score = 0;
        }else if (key === "\u0003") process.exit();
    });
    function gameLoop() {
        if (mode === 'simple') {
            action[direction]();
            if (x > width) x = 0;
            if (x < 0) x = width;
            if (y < 0) y = height;
            if (y > height) y = 0;
            clearLog();
            drawScore();
            draw();
            checkCollision();
            drawFood();
        } else if (mode === 'strict') {
            if(!isPlay) return;
            action[direction]();
            clearLog();
            drawScore();
            draw();
            checkCollision();
            drawFood();
            if (x > width || x < 0 || y < 0 || y > height) {
                console.log(`${c['red']}\x1b[${Math.floor(height / 2)};${Math.floor(width / 3)}HYou Loose!! pres r or Ctr + C${c.reset}`);
                isPlay = false;
            };
        }
    }
}
snake('&', 'blue', 'strict', 100);