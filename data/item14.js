export const code_block = {
  method1: `
import java.util.Comparator;

public final class PhoneNumber implements Comparable<PhoneNumber> {
    private final short areaCode, prefix, lineNum;

    // ... constructor, getters, equals, hashCode

    // Định nghĩa một Comparator tĩnh để so sánh
    private static final Comparator<PhoneNumber> COMPARATOR =
            Comparator.comparingInt((PhoneNumber pn) -> pn.areaCode)
                      .thenComparingInt(pn -> pn.prefix)
                      .thenComparingInt(pn -> pn.lineNum);

    /**
     * So sánh PhoneNumber này với một PhoneNumber khác.
     * Sắp xếp theo mã vùng, rồi đến đầu số, rồi đến số cuối.
     */
    @Override
    public int compareTo(PhoneNumber other) {
        return COMPARATOR.compare(this, other);
    }
}
`,
};
