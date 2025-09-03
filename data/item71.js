export const code_block = {
  method1: `
// Lớp Exception tùy chỉnh
public class UserNotFoundException extends Exception {
    public UserNotFoundException(String message) {
        super(message);
    }
}

// ❌ Cách làm cồng kềnh (dùng exception):
// Người dùng buộc phải xử lý exception này bằng try-catch hoặc throws.
public User findUser(String username) throws UserNotFoundException {
    // ... logic tìm user
    if (user == null) {
        throw new UserNotFoundException("User not found: " + username);
    }
    return user;
}
`,
  method2: `
import java.util.Optional;

// ✅ Cách làm tốt nhất (dùng Optional):
// API thể hiện rõ khả năng vắng mặt mà không cần exception.
public Optional<User> findUser(String username) {
    // ... logic tìm user
    if (userFound) {
        return Optional.of(user);
    } else {
        return Optional.empty();
    }
}
`,
};
