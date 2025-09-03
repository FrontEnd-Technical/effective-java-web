export const code_block = {
  method1: `
/**
 * @throws IndexOutOfBoundsException if the index is out of range
 * ({@code index < 0 || index >= size})
 */
public E get(int index) {
    if (index < 0 || index >= size) {
        // Cung cấp đầy đủ thông tin về lỗi: chỉ mục không hợp lệ và giới hạn kích thước.
        throw new IndexOutOfBoundsException(
            "Index: " + index + ", Size: " + size);
    }
    // ...
}
`,
  method2: `
public class InvalidOrderException extends Exception {
    private final int orderId;
    private final double invalidAmount;

    public InvalidOrderException(int orderId, double invalidAmount) {
        // 1. Cung cấp thông báo chi tiết cho con người.
        super("Invalid amount for order " + orderId + ": " + invalidAmount);
        
        // 2. Lưu lại thông tin để chương trình có thể truy cập.
        this.orderId = orderId;
        this.invalidAmount = invalidAmount;
    }

    // 3. Cung cấp các phương thức accessor.
    public int getOrderId() { return orderId; }
    public double getInvalidAmount() { return invalidAmount; }
}
`,
};
