export const code_block = {
  method1: `
import java.io.*;

public final class Name implements Serializable {
    /**
     * @serial Last name. Must be non-null.
     */
    private final String lastName;
    
    /**
     * @serial First name. Must be non-null.
     */
    private final String firstName;
    
    private static final long serialVersionUID = 20250828L; // Bắt buộc!

    public Name(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    // Dạng tuần tự hóa tùy chỉnh
    private void writeObject(ObjectOutputStream s) throws IOException {
        s.defaultWriteObject(); // Ghi các trường non-transient
    }

    private void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {
        s.defaultReadObject(); // Đọc các trường non-transient
        // Kiểm tra các quy tắc bất biến
        if (firstName == null || lastName == null) {
            throw new InvalidObjectException("Name fields must not be null.");
        }
    }
}
`,
  method2: `
import java.io.Serializable;

public class Elvis implements Serializable {
    public static final Elvis INSTANCE = new Elvis();
    private Elvis() { }

    // Đảm bảo chỉ có một thực thể Elvis tồn tại sau khi deserialize
    private Object readResolve() {
        // Return the one true Elvis and let the garbage collector
        // take care of the Elvis impersonator.
        return INSTANCE;
    }
}
`,
};
