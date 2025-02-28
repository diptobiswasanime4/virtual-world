class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(ctx, size = 20, color = "black") {
    const radius = size / 2;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
