class trashcan{

    constructor(x,y,width,height){


        var options ={

            isStatic : true,
            density : 1.5,
            friction : 1


        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        
        this.LeftSide = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.LeftSide);

        this.RightSide = Bodies.rectangle(this.x+150,this.y,this.width,this.height,options);
        World.add(world,this.RightSide);

        this.BottomSide = Bodies.rectangle(this.x+75,this.y+55,this.height+50,this.width,options);
        World.add(world,this.BottomSide);



    }



    display(){

        rectMode(CENTER);
        fill("green");
       // rect(this.BottomSide.position.x,this.BottomSide.position.y,this.height+50,this.width);
        
       // rect(this.LeftSide.position.x,this.LeftSide.position.y,this.width,this.height);

       // rect(this.RightSide.position.x,this.RightSide.position.y,this.width,this.height);

      
       
    }
};