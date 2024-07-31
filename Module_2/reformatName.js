function reformatName(first, last) {
    let name = last + ", " + first ;
    return name;
}
let result = reformatName("Susan", "Rodger");
console.log(result);
result = reformatName("Robert", "Duvall");
console.log(result);