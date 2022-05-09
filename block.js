class Block {
    constructor(x, y, w, h,color){
      let options = {
        frictionAir: 0.07,
        density: 1.5,
      };
      
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = 50;
      this.h = 50;
      this.color=color;
      World.add(world, this.body);
    }
  
    show() {
      let pos = this.body.position;
      let angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      stroke(255);
      fill(this.color);
      rect(0, 0, this.w, this.h);
      pop();
    }
  }