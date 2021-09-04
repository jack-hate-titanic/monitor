class Ball {
  private ctx: any;
  private x: number;
  private y: number;
  private r: number;
  private speedX: number;
  private speedY: number;
  private color: string;
  private canvas: any;

  constructor(
    ctx: any,
    x: number,
    y: number,
    r: number,
    speedX: number,
    speedY: number,
    color: string,
    canvas: any
  ) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.r = r;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
    this.canvas = canvas;
  }
  // 设置方法
  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.fill();
  }

  move() {
    this.x += this.speedX;
    if (this.x > this.canvas.width - this.r) {
      this.speedX *= -1;
    } else if (this.x < this.r) {
      this.speedX *= -1;
    }
    this.y += this.speedY;
    if (this.y > this.canvas.height - this.r) {
      this.speedY *= -1;
    } else if (this.y < this.r) {
      this.speedY *= -1;
    }
  }

  start() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.draw();
    this.move();
    window.requestAnimationFrame(this.start.bind(this));
  }
}

export default Ball;
