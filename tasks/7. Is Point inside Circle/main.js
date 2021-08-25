import Point from './Point';
import Circle from './Circle';
var point = Point(3, 4);
var circle = Circle(Point(1,2),2);
console.log(circle.includes(point));
