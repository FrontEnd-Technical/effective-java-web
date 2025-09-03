export const code_block = {
  method1: `
// Exception Translation trong AbstractCollection (minh họa)
// Giả sử MyListAccessException là một exception tùy chỉnh của bạn
public E get(int index) {
    try {
        // ... thực hiện hành động ở tầng thấp hơn
        return list.get(index);
    } catch (IndexOutOfBoundsException e) {
        // Bắt exception ở tầng thấp (IndexOutOfBoundsException)...
        // ...và ném lại một exception phù hợp với tầng trừu tượng của List.
        throw new MyListAccessException("Invalid index: " + index, e); 
    }
}
`,
  method2: `
// Giả lập các lớp cần thiết
class User {}
class UserRepository {
    public User findByUsername(String username) throws java.sql.SQLException {
        // ... logic truy cập database có thể ném SQLException
        return new User();
    }
}
class DataAccessException extends RuntimeException {
    public DataAccessException(String message, Throwable cause) {
        super(message, cause);
    }
}


public class UserService {
    private UserRepository userRepository;

    public User findByUsername(String username) {
        try {
            return userRepository.findByUsername(username);
        } catch (java.sql.SQLException e) {
            // Dịch SQLException thành một exception nghiệp vụ.
            // Client của UserService không cần biết chúng ta đang dùng database nào.
            throw new DataAccessException("Error accessing user data", e);
        }
    }
}
`,
};
