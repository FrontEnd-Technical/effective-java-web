export const code_block = {
  method1: `public boolean isRomanNumeral(String s) {
    // Tạo ra một đối tượng Pattern mới mỗi khi phương thức được gọi!
    return s.matches("^(?=.)M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$");
}`,
  method2: `public class RomanNumerals {
    // Tạo đối tượng Pattern một lần duy nhất và tái sử dụng nó.
    private static final Pattern ROMAN = Pattern.compile(
        "^(?=.)M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$");

    public static boolean isRomanNumeral(String s) {
        return ROMAN.matcher(s).matches();
    }
}`,
  method3: `// Rất chậm!
public static long sum() {
    // Nên dùng Long thay vì long để thấy rõ vấn đề.
    // Một đối tượng Long mới được tạo ra trong mỗi vòng lặp.
    Long sum = 0L;
    for (long i = 0; i <= Integer.MAX_VALUE; i++) {
        sum += i; // sum = Long.valueOf(sum.longValue() + i);
    }
    return sum;
}`,
  method4: `// Nhanh hơn rất nhiều
public static long sum() {
    // Luôn ưu tiên kiểu nguyên thủy trong các phép tính.
    long sum = 0L;
    for (long i = 0; i <= Integer.MAX_VALUE; i++) {
        sum += i;
    }
    return sum;
}`,
  method5: `String result = "";
for (String s : myStringList) {
    result += s; // Tạo ra một đối tượng String mới ở mỗi vòng lặp
}`,
  method6: `StringBuilder sb = new StringBuilder();
for (String s : myStringList) {
    sb.append(s); // Hoạt động trên cùng một đối tượng
}
String result = sb.toString();`,
};
