class Boom{
  constructor(ctx,enemy){
    this.ctx = ctx;
    this.enemy = enemy;
    this.init={
      x:enemy.init.x,
      y:enemy.init.y,
      w:32,
      h:24
    }
    this.index = 0;
    this.status = true;
  }
  draw(animation){
    this.index +=1;
    if(this.index >18){
      this.index = 18;
      this.status =false;
    }
    let img =animation[this.index];
    this.ctx.drawImage(img,this.init.x,this.init.y,this.init.w*4,this.init.h*4);
  }
}
export default Boom;