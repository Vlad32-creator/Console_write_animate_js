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
class RainColumn {
    constructor(x) {
        this.x = x;
        this.nums = [];
        const len = Math.floor(Math.random() * 10 + 3); // длина потока
        for (let i = 0; i < len; i++) {
            this.nums.push(new Num(x, -i, Math.floor(Math.random()*2)));
        }
    }
    update() {
        this.nums.forEach(n => n.update());
        if (this.nums[0].y > process.stdout.rows) {
            // сбросить поток
            const len = Math.floor(Math.random() * 10 + 3);
            this.nums = [];
            for (let i = 0; i < len; i++) {
                this.nums.push(new Num(this.x, -i, Math.floor(Math.random()*2)));
            }
        }
    }
    draw() {
        this.nums.forEach((n, i) => {
            // верхушка ярче
            n.color = i === this.nums.length - 1 ? c['white'] : c['green'];
            n.draw();
        });
    }
}
class Num{
    constructor(x,y,number='0',color='green'){
        this.x = x;
        this.y = y;
        this.number = String(number);
        this.color = c[color];
    }
    update(){
        this.y++;
    }
    draw(){
        process.stdout.write(`${this.color}\x1b[${this.y};${this.x}H${this.number}${c.reset}`)
    }
}
function rain(speed=100){
    const width = process.stdout.columns;
    const height = process.stdout.rows;
    const array = [];
    process.stdout.write(`\x1b[?25l`);
    function createRain(){
        const rX = Math.floor(Math.random()*width);
        // const rY = 0;
        // const num = Math.floor(Math.random()*2);
        array.push(new RainColumn(rX));
    }
    let interval = setInterval(() => {
        main();
    },speed);
    function main(){
        console.clear();
        createRain();
        for (let i = 0; i < array.length; i++) {
            array[i].update();
            array[i].draw();
            // if (array[i].x > width/2) array[i].color = c['white']; 
            // if (array[i].y > height/2) array[i].color = c['gray']; 
            if (array[i].y > height) array.splice(i,1);
        }
    }
}
rain(100);