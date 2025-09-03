export const code_block = {
  method1: `
import java.math.BigInteger;
import java.util.*;

public class CollectionClassifier {
    // 3 phiên bản nạp chồng
    public static String classify(Set<?> s) {
        return "Set";
    }

    public static String classify(List<?> list) {
        return "List";
    }

    public static String classify(Collection<?> c) {
        return "Unknown Collection";
    }

    public static void main(String[] args) {
        Collection<?>[] collections = {
            new HashSet<String>(),
            new ArrayList<BigInteger>(),
            new HashMap<String, String>().values()
        };

        for (Collection<?> c : collections) {
            // Luôn in ra "Unknown Collection" 3 lần!
            System.out.println(classify(c));
        }
    }
}
`,
  method2: `
// ❌ Xấu: Dễ gây nhầm lẫn khi gọi
public void process(List<String> list) { /* ... */ }
public void process(Collection<String> collection) { /* ... */ }

// ✅ Tốt: Rõ ràng và an toàn, không có sự mơ hồ
public void processList(List<String> list) { /* ... */ }
public void processCollection(Collection<String> collection) { /* ... */ }
`,
};
