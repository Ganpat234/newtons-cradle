class Bob{ 
    constructor(x,y,diameter){ 
    var options = { isStatic:false, restitution:1, friction:1, density:6 } 
    
     
     this.body = Bodies.circle(x,y,this.diameter, options); 
     this.diameter = diameter; 
     World.add(world, this.body);
     } 
     display() {
          var pos = this.body.position
           push(); 
           translate(pos.x,pos.y);
            fill("pink"); 
            ellipseMode(RADIUS); 
            ellipse(0,0,this.diameter,this.diameter); 
            pop(); 
        } 
    }


    