import kaboom from "kaboom";
kaboom({
  background: [9, 9, 121],
});
add([pos(40, 0), rect(20, 90), outline(4), origin("center"), area(), "paddle"]);

add([
  pos(width() - 40, 0),
  rect(20, 90),
  outline(4),
  origin("center"),
  area(),
  "paddle",
]);
onUpdate("paddle", (p) => {
  p.pos.y = mousePos().y;
});
let score = 0,
  speed = 380;
add([
  text(score),
  pos(center()),
  origin("center"),
  z(50),
  {
    update() {
      this.text = score;
    },
  },
]);

const ball = add([
  pos(center()),
  circle(16),
  outline(4),
  area({ width: 32, height: 32, offset: vec2(-16) }),
  { vel: dir(rand(-20, 20)) },
]);
ball.onUpdate(() => {
  ball.move(ball.vel.scale(speed));
  if (ball.pos.x < 0 || ball.pos.x > width()) {
    score = 0;
    ball.pos = center();
    ball.vel = dir(rand(-20, 20));
    speed = 320;
  }
  if (ball.pos.y < 0 || ball.pos.y > height()) {
    ball.vel.y = -ball.vel.y;
  }
});
ball.onCollide("paddle", (p) => {
  speed += 60;
  ball.vel = dir(ball.pos.angle(p.pos));
  score++;
});
