class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':2,
        'density':0.3
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.alpha = 255;
    
    World.add(world, this.body);
    
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed <3){
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
  }else{
    World.remove(world, this.body);
    push();
    this.alpha = this.alpha - 5;
    tint(255, this.alpha);
    pop();
    
    }
  }

  score() {
    if(this.alpha < 0 && this.alpha > -105){
      score++
   }
  }
};
