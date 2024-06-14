function reformatName(first, last) {
    let name = last + ", " + first ;
    return name;
}
let result = reformatName("Susan", "Rodger");
print(result);
result = reformatName("Robert", "Duvall");
print(result);
