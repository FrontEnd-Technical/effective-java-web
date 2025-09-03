export const code_block = {
  method1: `
// Phương thức này có thể gây ra heap pollution
static void dangerous(List<String>... stringLists) {
    List<Integer> intList = List.of(42);
    Object[] objects = stringLists;
    objects[0] = intList; // Ô nhiễm heap! Gán List<Integer> vào vị trí của List<String>
}

public static void main(String[] args) {
    List<String> a = List.of("a");
    List<String> b = List.of("b");
    
    dangerous(a, b);
    
    // Lỗi xảy ra ở đây, không phải trong phương thức 'dangerous'
    String s = a.get(0); // Ném ra ClassCastException!
}
`,
  method2: `
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

public class Picker {
    // Phương thức này an toàn vì nó chỉ đọc từ mảng varargs
    // và không để lộ tham chiếu đến nó.
    @SafeVarargs
    static <T> T pickOne(T... choices) {
        if (choices.length == 0) {
            throw new IllegalArgumentException("Choices cannot be empty");
        }
        return choices[ThreadLocalRandom.current().nextInt(choices.length)];
    }
}
`,
};
