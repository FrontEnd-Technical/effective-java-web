export const code_block = {
  method1: `
public final class PhoneNumber {
    private final short areaCode, prefix, lineNum;
    
    // ... constructor

    @Override public boolean equals(Object o) {
        if (o == this) return true;
        if (!(o instanceof PhoneNumber)) return false;
        PhoneNumber pn = (PhoneNumber) o;
        return pn.lineNum == lineNum && pn.prefix == prefix
                && pn.areaCode == areaCode;
    }

    // LỖI! Quên override hashCode()
}`,
  method4: `
Map<PhoneNumber, String> map = new HashMap<>();
PhoneNumber number1 = new PhoneNumber(707, 867, 5309);
map.put(number1, "Jenny");

// Bây giờ, hãy thử lấy "Jenny" ra bằng một đối tượng PhoneNumber tương đương
PhoneNumber number2 = new PhoneNumber(707, 867, 5309);

number1.equals(number2); // trả về true

// Nhưng khi tìm trong map...
String name = map.get(number2); // SẼ TRẢ VỀ NULL! 😱
`,
  method2: `
@Override public int hashCode() {
    int result = Short.hashCode(areaCode);
    result = 31 * result + Short.hashCode(prefix);
    result = 31 * result + Short.hashCode(lineNum);
    return result;
}
`,
  method3: `
// Sử dụng Objects.hash() (từ Java 7)
@Override public int hashCode() {
    return Objects.hash(lineNum, prefix, areaCode);
}
`,
};
