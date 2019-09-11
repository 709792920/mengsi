class Hero{
  constructor(ctx){
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "images/hero.png";
    this.init={
      x: canvas.width / 2 - 93/2,
      y: canvas.height - 100,
      w: 93,
      h: 65
    },
    this.status = false;
    this.isOver = false;
  }
  gameOver(enemy){
    let x = enemy.init.x + enemy.init.w/2;
    let y = enemy.init.y + enemy.init.h/2;
    if(x> this.init.x && x < this.init.x + this.init.w &&y > this.init.y&& y < this.init.y + this.init.h){
      this.isOver = true;
    }
  }
  draw() {
  this.ctx.drawImage(this.img, this.init.x, this.init.y, this.init.w, this.init.h);
 
}
  listen() {
    this.ctx.canvas.addEventListener('touchstart',(e)=>{
      let dot = e.changedTouches[0];
      if (dot.clientX > this.init.x && dot.clientX < this.init.x + this.init.w && dot.clientY > this.init.y && dot.clientY<this.init.y+this.init.h){
        this.status = true;
      }
    });
    this.ctx.canvas.addEventListener('touchmove', (e) => {
      if(this.status)
        {
        let touch = e.changedTouches[0];
        let x = touch.clientX;
        let y = touch.clientY;
        this.init.x = x - this.init.w / 2;
        this.init.y = y - this.init.h / 2;
        if(this.init.x<0){
          this.init.x=0;
        }
        else if(this.init.x >this.ctx.canvas.width-this.init.w){
          this.init.x = this.ctx.canvas.width-this.init.w;
        }
        else if (this.init.y<0){
          this.init.y =0;
        }
        else if (this.init.y>this.ctx.canvas.height-this.init.h){
          this.init.y = this.ctx.canvas.height - this.init.h;
        }
        }

    });
    this.ctx.canvas.addEventListener('touchend', (e) => {
        this.status = false;
    });
  }
}
export default Hero;