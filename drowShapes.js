function square(num = 10, simbol1 = '#', simbol2 = ' ') {
    let res = '';
    for (let y = 0; y < num; y++) {
        if (y !== 0) res += '\n';
        for (let x = 0; x < num; x++) {
            if (x % 2 === 0) {
                res += simbol2;
            } else {
                res += simbol1;
            }
        }
    }
    return res;
}
// console.log(square(10,"--",'|||'));

function leftTriangle(num = 10, simbol = '*') {
    let res = '';
    for (let i = 1; i < num; i++) {
        if (i !== 1) res += '\n';
        res += simbol.repeat(i);
    }
    return res;
}
// console.log(leftTriangle());

function rightTriangle(num = 10, simbol = '*') {
    let res = '';
    for (let i = 1; i < num; i++) {
        if (i !== 1) res += '\n';
        res += ' '.repeat(num - i);
        res += simbol.repeat(i);

    }
    return res;
}
// console.log(rightTriangle());


function tree(num = 11, simbol = "*") {
    let number = num + (num % 3);
    let res = '';
    for (let i = 1; i < number; i++) {
        if (i !== 1) res += '\n';
        res += " ".repeat((number - i) / 2);
        res += simbol.repeat(i);
        res += " ".repeat((number - i) / 2);
    }
    return res;
}
// console.log(tree(15, "^"));

function twoTriangle(num = 10, simbol = "*") {
    let number = num + (num % 2);
    let mid = number / 2;
    let res = '';
    for (let i = 1; i < number; i++) {
        if (i !== 1) res += '\n';
        if (i >= mid) {
            res += simbol.repeat(mid - (i - mid));
        } else {
            res += simbol.repeat(i);
        }
    }
    return res;
}
// console.log(twoTriangle(20,"5"));

function twoTriangleReverse(num = 10, simbol = "*") {
    let number = num + (num % 2);
    let mid = number / 2;
    let res = '';
    for (let i = 1; i < number; i++) {
        if (i !== 1) res += '\n';
        if (i >= mid) {
            res += simbol.repeat(i - mid);
        } else {
            res += simbol.repeat(mid - i);
        }
    }
    return res;
}
// console.log(twoTriangleReverse(50));

function chessBoard(num = 10, simbol1 = "*", simbol2 = "#") {
    let res = '';
    for (let y = 0; y < num; y++) {
        if (y !== 0) res += '\n';
        for (let x = 0; x < num; x++) {
            if ((x - y) % 2 === 0) {
                res += simbol1;
            } else {
                res += simbol2;
            }
        }
    }
    return res;
}
// console.log(chessBoard(10,' * ','!0'));

function midleTriangle(num = 10, simbol = "*") {
    let number = num + (num % 3);
    let res = '';
    for (let i = 0; i <= number; i += 2) {
        if (i !== 0) res += '\n';
        res += " ".repeat(Math.floor((number - i) / 2));
        res += simbol.repeat(i);
        res += " ".repeat((number - i) / 2);
    }
    return res;
}
// console.log(midleTriangle(20));

function romb(num = 9, simbol1 = '*', simbol2 = ' ') {
    if (num % 2 === 0) num++; // ромб должен быть нечётным
    let res = '';
    let mid = Math.floor(num / 2);
    for (let row = 0; row < num; row++) {
        if (row) res += '\n';
        const dist = Math.abs(mid - row);
        const pad = dist;
        const fill = num - dist * 2;
        res += simbol2.repeat(pad);
        res += simbol1.repeat(fill);
        res += simbol2.repeat(pad);
    }
    return res;
}
function squire2(num = 10, simbol1 = '*', simbol2 = ' ') {
    let res = '';
    for (let y = 0; y <= num; y++) {
        if (y !== 0) res += '\n';
        for (let x = 0; x <= num; x++) {
            if (x > 0 && x !== num && y !== 0 && y !== num) {
                res += simbol2;
            } else {
                res += simbol1;
            }
        }
    }
    return res;
}