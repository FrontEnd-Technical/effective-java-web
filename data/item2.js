export const code_block = {
  issue1: `// Rất xấu và khó quản lý!
public User(String username, String password) { ... }
public User(String username, String password, String email) { ... }
public User(String username, String password, String email, String phone) { ... }`,
  issue2: `// Đối tượng có thể không hoàn chỉnh ở giữa quá trình
User user = new User();
user.setUsername("gemini");
user.setPassword("pass123");
// Lỡ quên set một trường quan trọng thì sao?`,
  script1: `import lombok.Builder;
import lombok.Getter;

@Getter
@Builder // Annotation quyền năng của Lombok
public class RegisterUserRequest {
    // Thuộc tính bắt buộc
    private final String username;
    private final String password;
    private final String email;

    // Các thuộc tính tùy chọn
    private final String firstName;
    private final String lastName;
    private final String phoneNumber;
}`,
  script2: `import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ProductSearchCriteria {
    private final String keyword;
    private final String category;
    private final Double minPrice;
    private final Double maxPrice;
    private final Boolean inStock;
    private final String sortBy;
    private final String sortDirection;
}`,
};
