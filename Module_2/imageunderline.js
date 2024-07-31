let image = new SimpleImage("imagename.jpg");
let height = someImage.getHeight();
for (let pixel of someImage.values()) {
    if (pixel.getY() >= height - 10) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    }   
}

console.log(image);
