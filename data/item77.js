export const code_block = {
  method1: `
// Antipattern - Khối catch trống rỗng!
try {
    // ... thực hiện một hành động có thể thất bại
    int value = Integer.parseInt(someInput);
} catch (NumberFormatException e) {
    // Phớt lờ exception. Chương trình sẽ tiếp tục chạy như thể
    // không có gì xảy ra, nhưng với dữ liệu có thể bị sai hoặc thiếu.
}
`,
  method2: `
import java.util.logging.Level;
import java.util.logging.Logger;

// ...

try {
    int value = Integer.parseInt(someInput);
} catch (NumberFormatException e) {
    // Ít nhất hãy ghi log lại để có thể truy vết
    logger.log(Level.WARNING, "Failed to parse input: " + someInput, e);
    // Có thể gán một giá trị mặc định và tiếp tục
    value = 0;
}
`,
};
