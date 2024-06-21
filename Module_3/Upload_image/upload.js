function upload() {
    //Get input from file input
    let fileinput = document.getElementById("finput");
    //Make new SimpleImage from file input
    let image = new SimpleImage(fileinput);
    //Get canvas
    let canvas = document.getElementById("can");
    //Draw image on canvas
    image.drawTo(canvas);
}
