export const code_block = {
  method1: `
// Tuân thủ tất cả các quy tắc của một lớp bất biến
public final class Complex {
    private final double re;
    private final double im;

    public Complex(double re, double im) {
        this.re = re;
        this.im = im;
    }

    // Getters
    public double realPart() { return re; }
    public double imaginaryPart() { return im; }

    // Các phương thức trả về một đối tượng Complex MỚI
    // thay vì thay đổi đối tượng hiện tại.
    public Complex plus(Complex c) {
        return new Complex(re + c.re, im + c.im);
    }

    public Complex minus(Complex c) {
        return new Complex(re - c.re, im - c.im);
    }
    
    // ... equals, hashCode, toString
}
`,
};
