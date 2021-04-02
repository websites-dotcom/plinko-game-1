class Particles{

    constructor(x,y,radius){

        var options={

            isStatic: false,
            restitution: 0.5,
            density: 1,
            friction: 1

        }

        this.colour = color(random(20, 255), random(20, 255), random(20, 255));
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);

    }

    display(){

        fill(this.colour);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 10, 10)

    }

}