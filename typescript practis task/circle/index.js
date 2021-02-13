var circle = /** @class */ (function () {
    function circle(rds, clr) {
        this.radius = rds;
        this.color = clr;
    }
    circle.prototype.getradius = function () {
        return this.radius;
    };
    circle.prototype.setradius = function (newrad) {
        this.radius = newrad;
        console.log("updated radius = " + this.radius);
    };
    circle.prototype.getcolor = function () {
        return this.color;
    };
    circle.prototype.setcolor = function (newclr) {
        this.color = newclr;
        console.log("updated color = " + this.color);
    };
    circle.prototype.toString = function () {
        return "circle[radius=" + this.radius + ",color=" + this.color + "]";
    };
    circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    circle.prototype.getCircumference = function () {
        return 2 * (Math.PI * this.radius);
    };
    return circle;
}());
var c = new circle(1.0, 'red');
console.log(c);
console.log("getradius = " + c.getradius());
c.setradius(2.0);
console.log("get color = " + c.getcolor());
c.setcolor("blue");
console.log("toString : " + c.toString());
console.log("get area = " + c.getArea());
console.log("get Circumference = " + c.getCircumference());
