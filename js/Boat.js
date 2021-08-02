class Boat {
  constructor(x, y, width, height, boatPos, boatAnimation) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      label: "boat",
    };
    this.animation = boatAnimation;
    this.speed = 0.05;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    this.boatPosition = boatPos;
    this.image = loadImage("assets/boat.png");
    World.add(world, this.body);
  }
  animate() {
    //this.speed += 0.05 % 1.1;
    this.speed += 0.05;
  }

  remove(index) {
    this.animation = brokenBoatAnimation;
    this.speed = 0.05;
    this.width = 300;
    this.height = 300;
    setTimeout(() => {
      Matter.World.remove(world, boats[index].body);
      boats.splice(index, 1);
    }, 2000);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    console.log("speed", this.speed);
    var index = floor(this.speed % this.animation.length);
    console.log(this.animation.length); //4
    console.log("index", index);

    push();

    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);

    image(this.animation[index], 0, this.boatPosition, this.width, this.height);

    noTint();

    pop();
  }
}
