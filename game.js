import 'js/weapp-adapter';
const ctx = canvas.getContext('2d');
var bg = new Bg(ctx); 
import Bg from './js/bg.js';
var music = new Music;
music.bgPlay();
import Hero from "./js/hero.js";
var hero = new Hero(ctx);
hero.listen();
import Pool from './js/pool.js';
var pool =new Pool(ctx,hero,music);
import Info from './js/info.js'
var info = new Info(ctx );
import Music from './js/music.js';
import Replay from './js/replay.js';
var replay = new Replay(ctx);
function start(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  bg.draw();
  hero.draw();
  pool.drawEnemys(bg.top);
  pool.drawBullets(bg.top);
  pool.drawBooms();
  info.showScore(pool.score);
  if (hero.isOver) {
    replay.draw(pool.score);
    return;
  }
  requestAnimationFrame(start);
}
start();
function gameAgain() {
  ctx.canvas.addEventListener('touchstart', (e) => {
    let dot = e.changedTouches[0];
    let x = dot.clientX;
    let y = dot.clientY;
    let area = replay.btnArea;
    if (x > area.startX && x <= area.endX && y > area.startY && y <= area.endY && hero.isOver) {
      hero = new Hero(ctx);
      pool = new Pool(ctx, hero, music);
      hero.listen();
      start();
    }
  });
  ctx.canvas.addEventListener('touchend', (e) => {
  });
}
gameAgain();
