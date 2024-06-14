let image = new SimpleImage("imagename.png");
for (let pixel of image.values()) {
    pixel.setRed(255);
}
print(image);