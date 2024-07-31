function printPixel(nameImage, xpos, ypos) {
    let someImage = new SimpleImage(nameImage) ;
    console.log("red is " + someImage.getRed(xpos,ypos));
    console.log("green is " + someImage.getGreen(xpos,ypos));
    console.log("blue is " + someImage.getBlue(xpos,ypos));
}
printPixel("imagename.png",10, 10);
printPixel("imagename.png",250, 500);