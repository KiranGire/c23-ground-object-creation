class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.with = width;
        this.height = height;
        World.add(world, this.body);
       // console.log("width : " + width);
    }

    display(){
        var pos = this.body.position;
     
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        
    }

}