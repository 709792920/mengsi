import Enemy from './enemy.js';
import Bullet from './bullet.js';
import Boom from './boom.js'
class Pool{
  constructor(ctx,hero,music){
    this.ctx = ctx;
    this.music = music;
    this.enemys=[];
    this.bullets = [];
    this.hero = hero;
    this.animation =[];
    this.booms=[];
    this.score = 0; 
    for(let i = 1;i<=19;i++){
      let img = new Image();
      img.src = 'images/explosion'+i+'.png';
      this.animation.push(img);
    }
  }
  drawEnemys(top){
      if(top%80==0){
        const enemy = new Enemy(this.ctx);
        this.enemys.push(enemy);
      }
      this.enemys =this.enemys.filter(item=>{
        return item.status == true;
      })
      this.enemys.forEach(enemy=>{
          enemy.draw();
          this.hero.gameOver(enemy);
          this.bullets.forEach(bullet =>{
          let flag = enemy.isBoom(bullet);
          if(flag){
            this.score +=1;
            bullet.status = false;
            let boom = new Boom(this.ctx, enemy);
            this.booms.push(boom);
          }
          })
      })
  }
  drawBullets(top){
    if(top%50 == 0){
      let bullet = new Bullet(this.ctx, this.hero);
      this.bullets.push(bullet);
    }
    this.bullets = this.bullets.filter(bullet=>{
      return bullet.status == true;
    })
    this.bullets.forEach(bullet =>{
      bullet.draw(this.music);
    })
    

  }
  drawBooms() {
    this.booms = this.booms.filter(boom=>{
      return boom.status === true;
    })
    this.booms.forEach(boom =>{
      this.music.boomPlay();
      boom.draw(this.animation);
    })
  }
}

export default Pool;