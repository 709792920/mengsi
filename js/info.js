class Info{
  constructor(ctx){
    this.ctx = ctx;
  }
  showScore(score){
    this.ctx.font = '24px 微软雅黑'
    this.ctx.fillStyle = 'white'
    let scoreInfo  = '当前分数: '+score
    this.ctx.fillText(scoreInfo,10,30)
  }
}
export default Info;