var cell;
function setup() {
    console.log("Hello");
    cell = new Cell(12, 13);
}
function draw() {
    //console.log("Update");
    //console.log(cell);
}
var Cell = (function () {
    function Cell(x, y) {
        this.x = x;
        this.y = y;
    }
    return Cell;
}());
//# sourceMappingURL=bundle.js.map