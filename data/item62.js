export const code_block = {
  method1: `
// ❌ Cách làm sai:
public void setLogLevel(String level) {
    // người dùng có thể truyền vào "debug", "DEBUG", "Debug", 
    // hoặc một chuỗi vô nghĩa -> không an toàn
}

// ✅ Cách làm tốt nhất:
public enum LogLevel { DEBUG, INFO, WARN, ERROR }

public void setLogLevel(LogLevel level) {
    // An toàn tuyệt đối lúc biên dịch
}
`,
  method2: `
// ❌ Cách làm sai:
// Dữ liệu có cấu trúc bị nhồi nhét vào một String, phải tự phân tích cú pháp
String compoundKey = "userId:123;orderId:456"; 

// ✅ Cách làm tốt nhất:
// Dùng một lớp riêng - rõ ràng, an toàn và dễ sử dụng
public final class CompoundKey {
    private final long userId;
    private final long orderId;
    // ... constructor, getters, equals, hashCode
}
`,
};
