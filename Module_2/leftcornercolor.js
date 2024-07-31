let image = new SimpleImage("imagename.jpg");
for (let pixel of someImage.values()) {
    if (pixel.getX() < 50) {
        pixel.setRed(0);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
    if (pixel.getY() < 50) {
        pixel.setRed(0);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}
console.log(image);