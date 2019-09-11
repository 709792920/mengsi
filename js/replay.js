class Repaly{
  constructor(ctx,score){
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = 'images/Common.png';
    this.score = score;
    this.btnArea = {
      startX: this.ctx.canvas.width / 2 - 40,
      startY: this.ctx.canvas.height / 2 - 100 + 180,
      endX: this.ctx.canvas.width / 2 + 50,
      endY: this.ctx.canvas.height / 2 - 100 + 255
    }
  }
  draw(score){
    this.ctx.drawImage(this.img, 0, 0, 119, 108, this.ctx.canvas.width / 2 - 150, this.ctx.canvas.height / 2 - 100, 300, 300);

    this.ctx.fillText('游戏结束', this.ctx.canvas.width / 2 - 48, this.ctx.canvas.height / 2 - 100 + 50);

    this.ctx.fillText('得分: ' + score, this.ctx.canvas.width / 2 - 40, this.ctx.canvas.height / 2 - 100 + 130);

    this.ctx.drawImage(this.img, 120, 6, 39, 24, this.ctx.canvas.width / 2 - 60, this.ctx.canvas.height / 2 - 100 + 180, 120, 40);

    this.ctx.fillText('重新开始', this.ctx.canvas.width / 2 - 48, this.ctx.canvas.height / 2 - 100 + 205);
  }
}
export default Repaly ;