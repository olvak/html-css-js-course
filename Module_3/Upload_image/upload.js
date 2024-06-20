function upload() {
    let image = new SimpleImage(fileinput);
    //Get canvas
    let canvas = document.getElementById("can");
    //Draw image on canvas
    image.drawTo(canvas);
}
