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
class Snow{
    constructor(x,y,material='*',color='blue'){
        this.x = x;
        this.y = y;
        this.material = material;
        this.color = c[color];
    }
    update(){
        this.y++;
    }
    draw(){
        process.stdout.write(`${this.color}\x1b[${this.y};${this.x}H${this.material}${c.reset}`);
    }
}
function snow(speed=100){
    const width = process.stdout.columns;
    const height = process.stdout.rows;
    const snows = [];
    function createSnow(){
        const rX = Math.floor(Math.random()*width);
        const rY = 0;
        snows.push(new Snow(rX,rY));
    }
    process.stdout.write('\x1b[?25l');
    let interval = setInterval(() => {
        main();
    },speed)
    function update(){
        for (let i = 0; i < snows.length; i++) {
            if(snows[i].y > height){
                snows.splice(i,1);
            }
        }
    }
    function main(){
        console.clear();
        createSnow();
        update();
        snows.forEach(el=>{el.update();el.draw()});
    }
}
snow();