const MovingObject = function MovingObject(params)  {
  this.pos = params['pos'];
  this.vel = params['vel'];
  this.radius = params['radius'];
  this.color = params['color'];
};

MovingObject.prototype.draw = function draw(ctx)  {
  ctx.beginPath();
  ctx.arc(100, 100, this.radius, 0, 2*Math.PI, true);
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function move() {
  this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]];
};

module.exports = MovingObject;
