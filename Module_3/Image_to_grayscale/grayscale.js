let image = null;

function upload() {
  //Get input from file input
  let fileinput = document.getElementById("finput");
  //Make new SimpleImage from file input
  image = new SimpleImage(fileinput);
  //Get canvas
  let canvas = document.getElementById("can");
  //Draw image on canvas
  image.drawTo(canvas);
}

function makeGray() {
    //change all pixels of image to gray
    for (let pixel of image.values()) {
      let avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
    //display new image
    let canvas = document.getElementById("can");
    image.drawTo(canvas);
}
