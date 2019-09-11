class Enemy{
  constructor(ctx){
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = 'images/enemy.png';
    this.init ={
      x:(this.ctx.canvas.width-60)*Math.random(),
      y:-100,
      w:60,
      h:79/2
    }
    this.status = true;
  }
  draw(){
    this.init.y +=2;
    if(this.init.y>this.ctx.canvas.height){
      this.status = false;
    }
    this.ctx.drawImage(this.img,this.init.x,this.init.y,this.init.w,this.init.h);
  }
  isBoom(bullet){
    let x = bullet.init.x + bullet.init.w/2;
    let y = bullet.init.y+bullet.init.h/2;
    if(x > this.init.x && x < this.init.x+this.init.w&&y>this.init.y&&y<this.init.y + this.init.h){
       this.status = false;
       return true;
    }
  }
}
export default Enemy;