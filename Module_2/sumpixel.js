function sumPixel(nameOfImage, xpos, ypos) {
    let theImage = new SimpleImage(nameOfImage) ;
    let redNumber = theImage.getRed(xpos,ypos);
    let blueNumber = theImage.getBlue(xpos,ypos);
    let greenNumber = theImage.getGreen(xpos,ypos);
    return redNumber + blueNumber + greenNumber;
}

let answer = sumPixel("imagename.png", 250, 500);
console.log(answer);

answer = sumPixel("imagename.png",10, 10);
console.log(answer);
