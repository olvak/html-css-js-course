let image = new SimpleImage("imagename.jpg");
for (let pixel of someImage.values()) {
    if (pixel.getRed() > 70) {
    pixel.setRed(70);
    }
}
print(image);