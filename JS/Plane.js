function Plane(width, height, imagePath, context, xPos1, yPos1) {
    this.xPos = xPos1;
    this.yPos = yPos1;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = imagePath;
    this.context = context;
    this.speedY = 0;
}

Plane.prototype.draw = function () {
    this.yPos += this.speedY;
    this.context.drawImage(this.image, this.xPos, this.yPos, this.width, this.height);
};



