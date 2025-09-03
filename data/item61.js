export const code_block = {
  method1: `
// Rất chậm! Một đối tượng Long mới được tạo ra trong mỗi vòng lặp.
Long sum = 0L;
for (long i = 0; i < Integer.MAX_VALUE; i++) {
    // Autoboxing/unboxing xảy ra ở đây, tạo ra hàng tỷ đối tượng không cần thiết.
    sum += i;
}
`,
  method2: `
public class Unbelievable {
    static Integer i; // Mặc định là null

    public static void main(String[] args) {
        // Câu lệnh if sẽ cố gắng gọi i.intValue() để so sánh với 42.
        // Vì i là null, nó sẽ ném ra NullPointerException!
        if (i == 42) 
            System.out.println("Unbelievable");
    }
}
`,
};
