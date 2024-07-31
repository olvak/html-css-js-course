// one yellow rectangle
function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
    let width = someImage.getWidth();
    for (let pixel of someImage.values()) {
        if (pixel.getY() < cornerHeight) {
            if (pixel.getX() > width - cornerWidth) {
            pixel.setRed(red);
            pixel.setGreen(green);
            pixel.setBlue(blue);
            }
        }
    }
    return someImage;
}
let picture = new SimpleImage("imagename.png");
let result = topRightCorner(30, 60, picture, 255, 255, 0);
console.log(result);

// three different color squares
function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
    let width = someImage.getWidth();
    for (var pixel of someImage.values()) {
        let picture = new SimpleImage("imagename.png");
        let result = topRightCorner(30, 60, picture, 255, 255, 0);
        let result2 = topRightCorner(60, 30, result, 0, 0, 255);
        let result3 = topRightCorner(30, 30, result2, 0, 255, 0);
        console.log(result3);
    }
    return someImage;
}
let picture = new SimpleImage("imagename.png");
let result = topRightCorner(30, 60, picture, 255, 255, 0);
console.log(result);