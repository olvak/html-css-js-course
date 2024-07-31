function numberPixels(namefile) {
    let someImg = new SimpleImage(namefile);
    let height = someImg.getHeight(); 
    let width = someImg.getWidth();
    let total = height * width;
    return total;
}

let result = numberPixels("imagename.png");
console.log(result);
