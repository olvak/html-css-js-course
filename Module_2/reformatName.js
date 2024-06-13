function reformatName(first, last) {
    var name = last + ", " + first ;
    return name;
}
var result = reformatName("Susan", "Rodger");
print(result);
result = reformatName("Robert", "Duvall");
print(result);