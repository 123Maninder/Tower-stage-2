class Block{
  constructor(x, y, width, height) {
    this.visibility=255
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
     
    }
    display(){
      if(this.body.sprdd<3){
        constructor.display(); 
      }
      else{
        push();
        World.remove(world,this.body)
        this.visibility = this.visibility-5
        tint(255,this.visibility);
        var pos = this.body.position;
        var angle = this.body.angle;
        pop();
      }
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    }
}