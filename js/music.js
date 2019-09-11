class Music{
  constructor(ctx){
    this.ctx = ctx;
    this.bg = new Audio();
    this.bg.src = '/audio/bgm.mp3';
    this.bullet = new Audio();
    this.bg.src = '/audio/bullet.mp3';
    this.boom = new Audio();
    this.bg.src = '/audio/boom.mp3';
  }
  bgPlay(){
    this.bg.loop = true;
    this.bg.play();
  }
  bulletPlay(){
    this.bullet.play();
  }
  boomPlay(){
    this.bullet.play();
  }
}
export default Music