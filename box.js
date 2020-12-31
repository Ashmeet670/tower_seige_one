class Box{
    constructor(x,y,width,height,color){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color


        this.body = Bodies.rectangle(x,y,width,height)
        World.add(world,this.body)

    }
    display(){
        rectMode(CENTER)
        fill(this.color)
        stroke("black")
        rect(this.body.position.x , this.body.position.y , this.width , this.height)
    }
}