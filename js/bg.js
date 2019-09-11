class Bg{
  constructor(ctx){
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "images/bg.jpg";
    this.top = 0;
    this.speed = 2;
  }
  draw(){
    this.top +=this.speed;
    if(this.top >= this.ctx.canvas.height){
      this.top = 0;
    }
    this.ctx.drawImage(this.img, 0, this.top-this.ctx.canvas.height, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.drawImage(this.img,0,this.top,this.ctx.canvas.width,this.ctx.canvas.height);
  }
}
export default Bg;