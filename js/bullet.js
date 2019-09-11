class Bullet{
  constructor(ctx,hero){
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = 'images/bullet.png';
    this.hero = hero;
    this.init = {
      x:hero.init.x+hero.init.w/2-31/2,
      y:hero.init.y-54,
      w:31,
      h:54
    }
    this.status = true;
  }
  draw(music){
    music.bulletPlay();
    this.init.y -=3;
    if(this.init.y<0){
      this.status = false;
    }
    this.ctx.drawImage(this.img,this.init.x,this.init.y,this.init.w/1.5,this.init.h/1.5);
  }
}
export default Bullet;