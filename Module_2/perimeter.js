function perimeter(imageName) {
    let someImg = new SimpleImage(imageName);
    let value = 2 * someImg.getHeight() + 2 * someImg.getWidth();
    return value;
}
print(perimeter("imagename.png"));