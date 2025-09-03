export const code_block = {
  method1: `
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

// ...

try {
    // Cố gắng đọc file cấu hình
    Properties props = new Properties();
    props.load(new FileInputStream("config.properties"));
} catch (IOException e) {
    // Tình huống có thể phục hồi: Nếu file không có, dùng giá trị mặc định.
    System.out.println("Config file not found, using default settings.");
    useDefaultSettings();
}
`,
  method2: `
/**
 * Sets the quantity for this item.
 *
 * @param quantity the number of items.
 * @throws IllegalArgumentException if quantity is not positive.
 */
public void setQuantity(int quantity) {
    if (quantity <= 0) {
        // Đây là một lỗi lập trình từ phía người gọi,
        // vi phạm điều kiện tiên quyết của phương thức.
        throw new IllegalArgumentException("Quantity must be positive: " + quantity);
    }
    this.quantity = quantity;
}
`,
};
