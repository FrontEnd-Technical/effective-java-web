export const code_block = {
  method1: `
// Tagged class - Rất xấu và nên tránh!
class Figure {
    enum Shape { RECTANGLE, CIRCLE }

    // Trường thẻ
    final Shape shape;

    // Các trường chỉ dùng cho RECTANGLE
    double length;
    double width;

    // Trường chỉ dùng cho CIRCLE
    double radius;

    // Constructor cho circle
    Figure(double radius) {
        shape = Shape.CIRCLE;
        this.radius = radius;
    }

    // Constructor cho rectangle
    Figure(double length, double width) {
        shape = Shape.RECTANGLE;
        this.length = length;
        this.width = width;
    }

    double area() {
        switch(shape) {
            case RECTANGLE:
                return length * width;
            case CIRCLE:
                return Math.PI * (radius * radius);
            default:
                throw new AssertionError(shape);
        }
    }
}
`,
  method2: `
// Lớp cha abstract định nghĩa hợp đồng chung
abstract class Figure {
    abstract double area();
}

// Lớp con cho hình tròn
class Circle extends Figure {
    final double radius;

    Circle(double radius) { this.radius = radius; }

    @Override 
    double area() { 
        return Math.PI * (radius * radius); 
    }
}

// Lớp con cho hình chữ nhật
class Rectangle extends Figure {
    final double length;
    final double width;

    Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override 
    double area() { 
        return length * width; 
    }
}
`,
};
