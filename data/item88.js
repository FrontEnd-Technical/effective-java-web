export const code_block = {
  method1: `
import java.io.IOException;
import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.util.Date;

public final class Period implements Serializable {
    private final Date start;
    private final Date end;

    // ... constructor đã có bản sao phòng thủ (Item 50) ...

    /**
     * readObject method with defensive copying and validity checking.
     */
    private void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {
        // 1. Đọc trạng thái từ luồng
        s.defaultReadObject();

        // 2. TẠO BẢN SAO PHÒNG THỦ cho các trường khả biến.
        // Gán vào các trường tạm thời để kiểm tra.
        Date defensiveStart = new Date(start.getTime());
        Date defensiveEnd = new Date(end.getTime());

        // 3. KIỂM TRA TÍNH HỢP LỆ trên các bản sao.
        if (defensiveStart.compareTo(defensiveEnd) > 0) {
            throw new InvalidObjectException(defensiveStart + " after " + defensiveEnd);
        }
        
        // Nếu các trường không phải là final, bạn sẽ gán lại chúng ở đây:
        // this.start = defensiveStart;
        // this.end = defensiveEnd;
    }
}
`,
};
