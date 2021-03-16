class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:.2,
          friction:5,
          density:20,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      
      rectMode(CENTER);
      fill(50,200,50);
      rect( this.body.position.x,this.body.position.y,this.width ,this.height);
    }
  };  