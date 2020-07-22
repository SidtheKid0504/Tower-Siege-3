class Slingshot {
    // Object A and B are Bodies in World
    constructor(objectA, pointObjectB) {
        // Options for our Constraint Chain
        var constraint_options = {
            bodyA: objectA,
            pointB: pointObjectB,
            stiffness: 0.2,
            length: 20
        }
        this.pointB = pointObjectB;
        // Creates Constraint Chain
        this.sling = Constraint.create(constraint_options);

        // Adds Chain to World
        World.add(world, this.sling);
    }

    // Displays Line Between Both Objects
    display() {
        if (this.sling.bodyA) {
            var bodyAPos = this.sling.bodyA.position;
            var pointBPos = this.pointB;
            strokeWeight(5);
            stroke(255)
            line(bodyAPos.x, bodyAPos.y, pointBPos.x, pointBPos.y);
        }  
    }

    fly() {
        this.sling.bodyA = null;
    }

    attach(body) {
        this.sling.bodyA = body;
    }
}