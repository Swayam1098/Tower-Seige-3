class Box  {
  constructor(x, y, width, height){
  var options = {
  restitution:0.1,
  friction : 0.04,
    }

    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height= height
    this.visibility = 225
    World.add(world,this.body)
  }

score(){
  if(this.visibility<0 && this.visibility>-105){
score++
  }
}




display(){
  var pos = this.body.position;
  var angle = this.body.angle;
  
   
 if(this.body.speed < 10){
  push()
  translate(pos.x,pos.y)
 rotate(angle)
 rectMode(CENTER)
 rect(0,0,this.width,this.height)
 pop()
 }
 else{World.remove(world, this.body);
  push()
  this.Visiblity = this.Visiblity - 5;
  pop()
 }
}
}
