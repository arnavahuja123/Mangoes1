class Ground{
    constructor(x,y,width,height){
    var options={
        restitution = 0,
        friction = 1,
        density:1.2
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = width;
      World.add(world,this.body);
    }
    display(){
        
    
        rectMode(CENTER);
        rect(this.position.x,this.position.y,this.width, this.height);
      
      }
}