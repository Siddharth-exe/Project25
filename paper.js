class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x-20, this.y-20, (this.r-20)/3, options)
		World.add(world, this.body);

	}
	display(){
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			fill(255,255,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r);
			pop()		
	}

}