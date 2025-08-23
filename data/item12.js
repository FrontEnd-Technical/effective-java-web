export const code_block = {
  method1: `
import lombok.ToString;

@ToString
public final class PhoneNumber {
    private final short areaCode;
    private final short prefix;
    private final short lineNum;

    // ... constructor, getters, equals, hashCode
}

// Khi bạn gọi new PhoneNumber(707, 867, 5309).toString()
// Lombok sẽ tự động tạo ra chuỗi:
// PhoneNumber(areaCode=707, prefix=867, lineNum=5309)
`,
};
