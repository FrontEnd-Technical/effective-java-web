export const code_block = {
  method1: `
// Chữ ký của phương thức varargs
static int sum(int... args) {
    int sum = 0;
    for (int arg : args)
        sum += arg;
    return sum;
}

// Lời gọi này sẽ ngầm tạo ra một mảng int[] mới
int total = sum(1, 2, 3);
`,
  method2: `
public class MyUtilities {
    
    // Các phiên bản nạp chồng cho các trường hợp phổ biến (0, 1, 2 tham số)
    // để tránh tạo mảng không cần thiết.
    public void process() {
        // ... logic cho 0 tham số
    }

    public void process(String a1) {
        // ... logic cho 1 tham số
    }

    public void process(String a1, String a2) {
        // ... logic cho 2 tham số
    }

    // Phương thức varargs chỉ được gọi cho trường hợp 3 tham số trở lên.
    public void process(String a1, String a2, String a3, String... rest) {
        // ... xử lý 3 tham số đầu và mảng 'rest'
    }
}
`,
};
