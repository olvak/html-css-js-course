
function changeRed(width, height) {
    let picture = new SimpleImage(width, height);
    let red = 0;
    for (var pixel of picture.values()) {
        pixel.setRed(red);
        pixel.setGreen(0);
        pixel.setBlue(0);
        if (pixel.getRed() < 255) {
        red = red + 1;
        }
        if (pixel.getRed() == 255) {
        red = 0;
        }
    }
return picture;
}

let result = changeRed(256,200);
console.log(result);
