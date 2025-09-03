export const code_block = {
  method1: `
import java.util.Objects;

// Thay vì viết: 
// if (obj == null) {
//     throw new NullPointerException("obj must not be null");
// }

// Hãy dùng phương thức tiện ích này:
Objects.requireNonNull(obj, "obj must not be null");
`,
  method2: `
import java.util.Objects;

// Giả lập các lớp cần thiết
class Product {}

public class OrderService {

    /**
     * Creates a new order.
     *
     * @param product the product to order, must not be null.
     * @param quantity the quantity, must be greater than 0.
     * @throws NullPointerException if product is null.
     * @throws IllegalArgumentException if quantity is not positive.
     */
    public void createOrder(Product product, int quantity) {
        // 1. Kiểm tra null ngay lập tức bằng phương thức tiện ích
        Objects.requireNonNull(product, "Product must not be null");
        
        // 2. Kiểm tra các ràng buộc khác ở đầu phương thức
        if (quantity <= 0) {
            throw new IllegalArgumentException("Quantity must be positive: " + quantity);
        }

        // 3. Bây giờ mới thực thi logic chính với các tham số hợp lệ
        processOrder(product, quantity);
    }
    
    private void processOrder(Product product, int quantity) {
        // Các phương thức private có thể giả định rằng các tham số đã hợp lệ.
        // Dùng assert để kiểm tra giả định này trong môi trường test.
        assert product != null;
        assert quantity > 0;
        
        System.out.println("Order created for " + product + " with quantity " + quantity);
    }
}
`,
};
