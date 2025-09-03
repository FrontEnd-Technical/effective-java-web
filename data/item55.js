export const code_block = {
  method1: `
import java.util.*;

// Optional làm cho API thể hiện rõ rằng kết quả có thể không tồn tại.
public static <E extends Comparable<E>> Optional<E> max(Collection<E> c) {
    if (c.isEmpty()) {
        return Optional.empty(); // Rõ ràng, không có giá trị
    }
    
    E result = Collections.max(c);
    return Optional.of(result);
}

// Người dùng API được nhắc nhở xử lý cả hai trường hợp:
Optional<User> user = max(userList);
user.ifPresent(u -> System.out.println("Max user is: " + u.getName()));
`,
  method2: `
// ❌ Xấu: Cồng kềnh và không cần thiết
public Optional<List<Product>> getProducts() { 
    // ... 
}

// ✅ Tốt: Đơn giản, hiệu quả và tuân thủ nguyên tắc khác
public List<Product> getProducts() { 
    // Trả về Collections.emptyList() nếu không có sản phẩm
}
`,
};
