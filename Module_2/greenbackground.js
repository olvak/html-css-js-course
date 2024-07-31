// Set the foreground image (fgImage)
let fgImage = new SimpleImage ("somefgimage.png");
// Set the background image (bgImage)
let bgImage = new SimpleImage("somebgimage.png");
// Create a blank image with the same size (outpu)
let output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());

// For each pixel (currentPixel) e fgImage:
for (let pixel of fgImage.values()) {
    // Check the (currentPixel). If it's green:
    if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()){
        // Find pixel at the same place of bgImage
        let x = pixel.getX();
        let y = pixel.getY();
        let bgPixel = bgImage.getPixel(x, y);
        // Set the output pixel according to bgImage pixel
        output.setPixel(x, y, bgPixel);
    }
    // Else: set output pixel according to currentPixel
    else {
        output.setPixel(pixel.getX(), pixel.getY(), pixel);
    }
}
// Show the result!
console.log(output);