export const code_block = {
  method1: `
// 1. Interface định nghĩa hợp đồng cho mọi loại phép toán
public interface Operation {
    double apply(double x, double y);
}
`,
  method2: `
// 2. Enum cơ bản cung cấp các phép toán cốt lõi
public enum BasicOperation implements Operation {
    PLUS("+") {
        public double apply(double x, double y) { return x + y; }
    },
    MINUS("-") {
        public double apply(double x, double y) { return x - y; }
    },
    TIMES("*") {
        public double apply(double x, double y) { return x * y; }
    },
    DIVIDE("/") {
        public double apply(double x, double y) { return x / y; }
    };

    private final String symbol;
    BasicOperation(String symbol) { this.symbol = symbol; }

    @Override public String toString() { return symbol; }
}
`,
  method3: `
// 3. Enum mở rộng, cũng implement cùng một interface
public enum ExtendedOperation implements Operation {
    EXP("^") {
        public double apply(double x, double y) { return Math.pow(x, y); }
    },
    REMAINDER("%") {
        public double apply(double x, double y) { return x % y; }
    };
    
    private final String symbol;
    ExtendedOperation(String symbol) { this.symbol = symbol; }

    @Override public String toString() { return symbol; }
}
`,
  method4: `
import java.util.Collection;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        double x = 4;
        double y = 2;
        
        // Sử dụng một collection của interface Operation
        test(List.of(BasicOperation.values()), x, y);
        test(List.of(ExtendedOperation.values()), x, y);
    }

    // Phương thức này chấp nhận bất kỳ loại Operation nào
    private static void test(Collection<? extends Operation> opSet, double x, double y) {
        for (Operation op : opSet)
            System.out.printf("%f %s %f = %f%n", x, op, y, op.apply(x, y));
    }
}
`,
};
