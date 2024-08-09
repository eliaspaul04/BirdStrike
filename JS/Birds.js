class Bird {
    constructor(width, height, imagePath, context, xPos, yPos) {
        Plane.call(this, width, height, imagePath, context, xPos, yPos);
        this.counter = 0;
        this.startYPos = yPos;
        // Defines the speed of the bird
        this.speed = 3; 
    }
    draw() {
        // Define the minimum and maximum y position for the bird
        const minYPos = 50; 
        const maxYPos = 90; 

        this.xPos -= this.speed;
        if (this.xPos + this.width < 0) {
            this.xPos = canvas.width + Math.floor(Math.random() * 700); // Adjust the random value 
            this.startYPos = Math.floor(Math.random() * (maxYPos - minYPos + 1)) + minYPos;
            this.speed += 1;
        }

        // Call the draw method of the Plane class
        Plane.prototype.draw.call(this);
    }
    hits(plane) {
        if (this.xPos < plane.xPos + plane.width &&
            this.xPos + this.width > plane.xPos &&
            this.yPos < plane.yPos + plane.height &&
            this.yPos + this.height > plane.yPos) {
            return true;
        }
        return false;
    }
}

Bird.prototype = Object.create(Plane.prototype);




