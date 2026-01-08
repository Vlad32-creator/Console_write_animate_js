
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
// wordSequence();