function shapeArea(n) {
    var area = 1;
    for (var i = 1; i < n; i++) {
        area += 4 * i;
    }
    return area;
}
console.log(shapeArea(2));
console.log(shapeArea(3));
