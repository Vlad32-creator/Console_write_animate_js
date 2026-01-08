
function printNumbers(number) {
    const numbers = {
        1: [
            "    ",
            "  ||",
            "  ||",
            "  ||",
            "  ||"
        ], 2: [
            " ____ ",
            "    ||",
            " ___||",
            "||    ",
            "||___ "
        ], 3: [
            " ____ ",
            "    ||",
            " ___||",
            "    ||",
            " ___||"
        ], 4: [
            "      ",
            "||  ||",
            "||__||",
            "    ||",
            "    ||"
        ], 5: [
            " ____ ",
            "||    ",
            "||___ ",
            "    ||",
            " ___||"
        ], 6: [
            " ____ ",
            "||    ",
            "||___ ",
            "||  ||",
            "||__||"
        ], 7: [
            " ___  ",
            "   || ",
            "  _||_",
            "   || ",
            "   || "
        ], 8: [
            " ____ ",
            "||  ||",
            "||__||",
            "||  ||",
            "||__||"
        ], 9: [
            " ____ ",
            "||  ||",
            "||__||",
            "    ||",
            " ___||"
        ], 0: [
            " ____ ",
            "||  ||",
            "||  ||",
            "||  ||",
            "||__||"
        ], '.': [
            "      ",
            "      ",
            "      ",
            "      ",
            " .... "
        ], ':': [
            "      ",
            "  ..  ",
            "      ",
            "  ..  ",
            "      "
        ], " ": [
            "      ",
            "      ",
            "      ",
            "      ",
            "      "
        ]
    };

    let num = String(number);
    let res = '';
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < num.length; j++) {
            res += numbers[num[j]][i] + ' ';
        }
        res += '\n';
    }
    return res;
}
function printWords(le) {
    const leters = {
        a: [
            `        `,
            `  //\   `,
            ` //_\\  `,
            `//   \\ `,
            `/     \\`
        ],
        b: [
            "  ___   ",
            " ||  \\\\ ",
            " ||__// ",
            " ||  \\\\ ",
            " ||__// "
        ],
        c: [
            "   ___  ",
            " //  \\\\ ",
            "||      ",
            "||      ",
            " \\\\_//  ",
        ],
        d: [
            "  ____  ",
            " ||  \\\\ ",
            " ||   || ",
            " ||   || ",
            " ||__//  ",
        ], e: [
            "  ____  ",
            " //     ",
            " ||___  ",
            " ||     ",
            " \\\\___",
        ],
        f: [
            "  ____  ",
            " //   \ ",
            " ||___  ",
            " ||     ",
            " ||     ",
        ], g: [
            "  ____  ",
            " //  \\\\ ",
            " ||___  ",
            " ||  || ",
            " \\\\__// "
        ], h: [
            "        ",
            " ||  || ",
            " ||__|| ",
            " ||  || ",
            " ||  || "
        ], i: [
            "        ",
            "   ||   ",
            "   ||   ",
            "   ||   ",
            "   ||   "
        ], j: [
            "        ",
            "     || ",
            "     || ",
            "     || ",
            "  __//  "
        ], k: [
            "        ",
            " ||//   ",
            " |//    ",
            " ||\\\\   ",
            " || \\\\  "
        ], l: [
            "        ",
            " ||     ",
            " ||     ",
            " ||     ",
            " ||___| "
        ], m: [
            "        ",
            " /\\\\ /\\ ",
            " ||\\/|| ",
            " ||  || ",
            " ||  || "
        ], n: [
            "        ",
            "|\\\\   ||",
            "||\\\\  ||",
            "|| \\\\ ||",
            "||  \\\\||"
        ], o: [
            "  ____  ",
            " //  \\\\ ",
            " ||  || ",
            " ||  || ",
            " \\\\__// "
        ], p: [
            "  ____  ",
            " //  \\\\ ",
            " ||__|| ",
            " ||     ",
            " ||     "
        ], q: [
            "   ___  ",
            " //  \\\\ ",
            " ||  || ",
            " \\\\__// ",
            "     \\\\ "
        ], r: [
            "  ____  ",
            " //  \\\\ ",
            " ||__// ",
            " ||\\\\   ",
            " ||  \\\\ "
        ], s: [
            "  ____  ",
            " //  \\\\ ",
            " \\\\__   ",
            "     \\\\ ",
            "  ___// "
        ], t: [
            " ______ ",
            "   ||   ",
            "   ||   ",
            "   ||   ",
            "   ||   "
        ], u: [
            "        ",
            " ||  || ",
            " ||  || ",
            " ||  || ",
            " \\\\__// "
        ], v: [
            "        ",
            "\\\\    //",
            " \\\\  // ",
            "  \\\\//  ",
            "   \\/   "
        ], w: [
            "        ",
            "\\  ||  /",
            "\\\\ || //",
            " \\\\||// ",
            " \\\\/\\\\/ "
        ]
        , x: [
            " \\\\  // ",
            "  \\\\//  ",
            "   ||   ",
            "  //\\\\  ",
            " //  \\\\ "
        ], y: [
            "        ",
            " \\\\   / ",
            "  \\\\ // ",
            "   \\//  ",
            "   ||   "
        ], z: [
            "  ___   ",
            "    //  ",
            "   //   ",
            "  //    ",
            " //___  "
        ], " ": [
            " ",
            " ",
            " ",
            " ",
            " "
        ], '?': [
            "  ____  ",
            " //  \\\\ ",
            "     // ",
            "   ||   ",
            "   ..   "
        ], '!': [
            "   ||   ",
            "   ||   ",
            "   ||   ",
            "   ||   ",
            "   ..   ",
        ]
    }
    let string = le.toLocaleLowerCase();
    let res = '';
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < string.length; j++) {
            res += leters[string[j]][i].padEnd(8, ' ');
        }
        res += '\n';
    }
    return res;
}
function wordSequence(col, ms = 3000, content = ['hello', 'how are you?', 'nice to meet you', 'lets go']) {
    const color = {
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
    let i = 0;
    let interval = setInterval(() => {
        console.clear();
        console.log(color[col] + printWords(content[i]) + color.reset);
        if (!content[i + 1]) return clearInterval(interval);
        i++
    }, ms);
}
function timer(col) {
    const color = {
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

    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;
    let ms = 100;
    let dots = ':'
    let interval = setInterval(() => {
        console.clear();
        console.log(color[col] + printNumbers(`${minutes}${dots}${seconds}.${milliseconds}`) + color.reset);
        if (milliseconds > 100) {
            if (seconds >= 60) {
                minutes++
                seconds = 0;
            }
            // seconds % 2 === 0? dots = ':': dots = ' ';
            milliseconds = 0;
            seconds++;
        } else { milliseconds += 10 }
    }, ms)
}
function spiner(ms = 100, col = 'blue') {
    const color = {
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
    const frames = ["|", "/", "-", "\\"];
    let i = 0;
    setInterval(() => {
        console.clear();
        console.log(color[col] + frames[i] + color.reset);
        !frames[i + 1] ? i = 0 : i++;
    }, ms);
}
// spiner();
// timer('magenta');
// wordSequence('blue',3000,['Hello!!','How are you?','Nice','I wont you!']);

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
                console.log(`${c['red']}\x1b[${Math.floor(height / 2)};${Math.floor(width / 2)}HYou Loose!! pres r or Ctr + C${c.reset}`);
                isPlay = false;
            };
        }
    }
}
snake('&', 'blue', 'strict', 100);