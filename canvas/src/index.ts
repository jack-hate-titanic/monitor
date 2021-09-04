import Ball from "./Ball";

const c: any = document.getElementById("myCanvas");
if (c) {
  const ctx: any = c.getContext("2d");
  const ball = new Ball(ctx, 100, 100, 50, 2, 2, "red", c);
  // ball.draw();
  ball.start();
}
