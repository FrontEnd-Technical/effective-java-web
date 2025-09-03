export const code_block = {
  method1: `
import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.util.Date;

public final class Period implements Serializable {
    private final Date start;
    private final Date end;
    
    public Period(Date start, Date end) {
        // Constructor thực hiện defensive copy và validation
        this.start = new Date(start.getTime());
        this.end = new Date(end.getTime());
        if (this.start.compareTo(this.end) > 0)
            throw new IllegalArgumentException(start + " after " + end);
    }
    
    // ... các phương thức public ...

    // 3. writeReplace trả về một proxy để được serialize
    private Object writeReplace() {
        return new SerializationProxy(this);
    }

    // 5. readObject phòng thủ để ngăn chặn tấn công
    private void readObject(ObjectInputStream stream) throws InvalidObjectException {
        throw new InvalidObjectException("Proxy required");
    }

    // 2. Lớp proxy lồng, định nghĩa dạng tuần tự hóa
    private static class SerializationProxy implements Serializable {
        private final Date start;
        private final Date end;

        SerializationProxy(Period p) {
            this.start = p.start;
            this.end = p.end;
        }
        
        private static final long serialVersionUID = 234L;

        // 4. readResolve trả về một thực thể của lớp bên ngoài
        private Object readResolve() {
            // Dùng constructor công khai của lớp ngoài,
            // đảm bảo tất cả các quy tắc bất biến được áp dụng.
            return new Period(start, end); 
        }
    }
}
`,
};
