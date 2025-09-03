export const code_block = {
  method1: `
import java.util.Objects;

// Giả lập các lớp cần thiết
class Order {
    private int lineItemCount = 5;
    public int getLineItemCount() { return this.lineItemCount; }
}

public class OrderProcessor {
    private boolean isInitialized = false;

    public void initialize() {
        this.isInitialized = true;
    }

    /**
     * @param order Must not be null.
     * @param lineItemIndex Must be a valid index.
     * @throws IllegalStateException if the service is not initialized.
     * @throws NullPointerException if order is null.
     * @throws IndexOutOfBoundsException if lineItemIndex is out of bounds.
     */
    public void processLineItem(Order order, int lineItemIndex) {
        // Tái sử dụng IllegalStateException
        if (!isInitialized) {
            throw new IllegalStateException("Service not initialized.");
        }
        
        // Tái sử dụng NullPointerException
        Objects.requireNonNull(order, "Order must not be null.");

        // Tái sử dụng IndexOutOfBoundsException
        if (lineItemIndex < 0 || lineItemIndex >= order.getLineItemCount()) {
            throw new IndexOutOfBoundsException("Invalid index: " + lineItemIndex);
        }
        
        // ... logic xử lý
    }
}
`,
};
