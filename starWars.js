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
class Player {
    constructor(x, y, material = '#', color = 'cyan') {
        this.x = x;
        this.y = y;
        this.material = material;
        this.color = c[color];
        this.bullets = [];
    }
    goUp() {
        this.y--;
        if (this.y <= 0) return;
    }
    goDown(max) {
        this.y++;
        if (this.y >= max) return;
    }
    goRight(max) {
        this.x += 1;
        if (this.x >= max) return;
    }
    goLeft() {
        this.x -= 1;
        if (this.x <= 0) return;
    }
    shot() {
        this.bullets.push(new Bullet(this.x, this.y));
    }
    update() {
        this.bullets.forEach((el, index) => {
            el.update()
            if (el.y < 0) {
                this.bullets = this.bullets.filter((e, i) => i !== index);
            };
            el.print();
        });
    }
    print() {
        process.stdout.write(`^${this.color}\x1b[${this.y};${this.x}H${this.material}^${c.reset}`);
    }
}
class Bullet {
    constructor(x, y, material = '|', color = 'red') {
        this.x = x;
        this.y = y;
        this.color = c[color];
        this.material = material;
    }
    update() {
        // this.y--;
        this.x++;
    }
    print() {
        process.stdout.write(`${this.color}\x1b[${this.y};${this.x}H${this.material}${c.reset}`);
    }
}
class Mob {
    constructor(x, y, hp, material = '*', color = 'blue') {
        this.x = x;
        this.y = y;
        this.hp = hp;
        this.material = material
        this.color = c[color];
    }
    update() {
        // this.y++;
        this.x--;
    }
    print() {
        process.stdout.write(`${this.color}\x1b[${this.y};${this.x}H${this.material}${c.reset}`);
    }
}

function game(speed = 100) {

    const width = process.stdout.columns;
    const height = process.stdout.rows;
    const player = new Player(5,Math.floor(height / 2), '#', 'magenta');
    let mobs = [];
    let isPlay = true;
    let shots = [];

    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf8");

    process.stdout.write(`\x1b[?25l`);
    process.stdin.on('data', key => {
        const keys = {
            w: () => player.goUp(),
            s: () => player.goDown(height),
            d: () => player.goRight(width),
            a: () => player.goLeft(),
            '\x1b[A': () => player.goUp(),
            '\x1b[B': () => player.goDown(),
            '\x1b[C': () => player.goRight(),
            '\x1b[D': () => player.goLeft(),
            '\u0003': () => process.exit(),
            r: () => isPlay = true,
            ' ': () => shots.push(new Bullet(player.x, player.y, '-', 'yellow'))
        }
        if (Object.keys(keys).includes(key)) keys[key]();
    });
    function createMob() {
        //
        const rX = width;
        const rY = Math.floor(Math.random()*height);
        const hp = 100;
        mobs.push(new Mob(rX, rY, hp));
    }
    function updateBullets() {
        for (let i = shots.length - 1; i >= 0; i--) {
            const bullet = shots[i];
            bullet.update();
            if (bullet.x > width) {
                shots.splice(i, 1);
                continue;
            }
        }
    }
    function animateMob() {
        for (let i = mobs.length - 1; i >= 0; i--) {
            const mob = mobs[i];
            mob.update();
            if (mob.x < 0) {
                mobs.splice(i, 1);
                continue;
            }
        }
    }
    function clear() {
        console.clear();
    }
    function checkShotCollision() {
        for (let i = shots.length - 1; i >= 0; i--) {
            const shot = shots[i];
            for (let j = mobs.length - 1; j >= 0; j--) {
                const mob = mobs[j];
                if (
                    shot.x === mob.x &&
                    shot.y === mob.y
                ) {
                    shots.splice(i, 1);
                    mobs.splice(j, 1);
                }
            }
        }
    }
    function checkCollision() {
        for (const mob of mobs) {
            if (
                mob.x >= player.x &&
                mob.x <= player.x + 1 &&
                mob.y >= player.y &&
                mob.y <= player.y + 1
            ) {
                isPlay = false;
                break;
            }
        }
    }
    function update() {
        updateBullets();
        checkShotCollision();
        animateMob();
        checkCollision();
    }

    function draw() {
        clear();
        mobs.forEach(m => m.print());
        shots.forEach(s => s.print());
        player.print();
    }
    function main() {
        if (!isPlay) return;
        createMob();
        update();
        draw();
        if (!isPlay) {
            process.stdout.write(`${c['red']}\x1b[${Math.floor(height / 2)};${Math.floor(width / 2)}HYou Loose!!!${c.reset}`);
        }
    }
    let interval = setInterval(() => {
        main();
    }, speed);
}
game(100);