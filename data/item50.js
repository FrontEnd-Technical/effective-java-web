export const code_block = {
  method1: `
import java.util.Date;

// Lớp này có thể bị phá vỡ!
public final class Period {
    private final Date start;
    private final Date end;

    /**
     * @param  start the beginning of the period
     * @param  end the end of the period; must not precede start
     * @throws IllegalArgumentException if start is after end
     * @throws NullPointerException if start or end is null
     */
    public Period(Date start, Date end) {
        if (start.compareTo(end) > 0)
            throw new IllegalArgumentException(start + " after " + end);
        this.start = start;
        this.end = end;
    }

    public Date start() { return start; }
    public Date end() { return end; }
}
`,
  method2: `
Date start = new Date();
Date end = new Date();
Period p = new Period(start, end);

// Tấn công 1: Thay đổi trạng thái sau khi khởi tạo bằng cách sửa tham số gốc.
// Lớp Period vẫn nghĩ rằng 'end' là sau 'start', nhưng thực tế không phải vậy.
end.setYear(78); 

// Tấn công 2: Lấy tham chiếu nội bộ và thay đổi trực tiếp.
p.end().setYear(78);
`,
  method3: `
import java.util.Date;

public final class Period {
    private final Date start;
    private final Date end;

    public Period(Date start, Date end) {
        // 1. Tạo bản sao phòng thủ cho các tham số
        this.start = new Date(start.getTime());
        this.end = new Date(end.getTime());

        // Kiểm tra tính hợp lệ trên các bản sao, không phải bản gốc
        if (this.start.compareTo(this.end) > 0)
            throw new IllegalArgumentException(this.start + " after " + this.end);
    }

    // 2. Trả về bản sao phòng thủ của các trường nội bộ
    public Date start() {
        return new Date(start.getTime());
    }

    public Date end() {
        return new Date(end.getTime());
    }
}
`,
};
