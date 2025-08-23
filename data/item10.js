export const code_block = {
  method1: `// Vi phạm tính đối xứng!
public final class CaseInsensitiveString {
    // ...
    @Override public boolean equals(Object o) {
        if (o instanceof CaseInsensitiveString)
            return s.equalsIgnoreCase(((CaseInsensitiveString) o).s);
        if (o instanceof String)  // Một chiều!
            return s.equalsIgnoreCase((String) o);
        return false;
    }
}

CaseInsensitiveString cis = new CaseInsensitiveString("Poll");
String s = "poll";

cis.equals(s); // true
s.equals(cis); // false (vì String.equals() không biết về CaseInsensitiveString)`,
  method2: `// Vi phạm tính bắc cầu!
public class Point {
    // ...
    @Override public boolean equals(Object o) { /* so sánh x, y */ }
}

public class ColorPoint extends Point {
    private final Color color;
    // ...
    @Override public boolean equals(Object o) {
        if (!(o instanceof Point)) return false;
        if (!(o instanceof ColorPoint)) return o.equals(this); // So sánh như Point
        return super.equals(o) && ((ColorPoint) o).color == color; // So sánh cả màu
    }
}

ColorPoint p1 = new ColorPoint(1, 2, Color.RED);
Point p2 = new Point(1, 2);
ColorPoint p3 = new ColorPoint(1, 2, Color.BLUE);

p1.equals(p2); // true (so sánh như Point)
p2.equals(p3); // true (so sánh như Point)
p1.equals(p3); // false (vì màu khác nhau) -> Vi phạm!`,
  method3: `public final class PhoneNumber {
    private final short areaCode, prefix, lineNum;
    
    // ... constructor, getters

    @Override public boolean equals(Object o) {
        if (o == this) // 1. Kiểm tra tham chiếu
            return true;
        if (!(o instanceof PhoneNumber)) // 2. Kiểm tra kiểu
            return false;
        PhoneNumber pn = (PhoneNumber) o; // 3. Ép kiểu
        // 4. So sánh các trường quan trọng
        return pn.lineNum == lineNum && pn.prefix == prefix
                && pn.areaCode == areaCode;
    }
    
    // RẤT QUAN TRỌNG: Đã override equals(), phải override hashCode()
    @Override public int hashCode() {
        // ...
    }
}`,
};
