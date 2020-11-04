  
class Mango{
    constructor(x, y,radius) {
        var options = {
            'isStatic': true,
            'restitution':0,
            'friction':1
            }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
       this.image = loadImage("sprites/mango.png");
       this.image(img,10,10,50,50);
        World.add(world, this.body);
      }
      display(){ 
         imageMode(CENTER);
         image(this.image,0,0, this.radius);
      
      }
    }