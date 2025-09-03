export const code_block = {
  method1: `
import java.io.Serializable;

// Cách làm này phức tạp và có thể có những lỗ hổng tinh vi.
public class Elvis implements Serializable {
    public static final Elvis INSTANCE = new Elvis();
    private Elvis() { }

    // readResolve để bảo toàn đặc tính Singleton.
    private Object readResolve() {
        // Trả về Elvis thật và để bộ dọn rác xử lý kẻ mạo danh.
        return INSTANCE;
    }
}
`,
  method2: `
// Cách triển khai Singleton tốt nhất!
public enum Elvis {
    INSTANCE;

    public void leaveTheBuilding() { 
        System.out.println("Whoa baby, I'm outta here!"); 
    }
}
`,
};
