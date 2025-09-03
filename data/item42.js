export const code_block = {
  method1: `
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

// ...
List<String> words = ...;

// Dài dòng và khó đọc
Collections.sort(words, new Comparator<String>() {
    public int compare(String s1, String s2) {
        return Integer.compare(s1.length(), s2.length());
    }
});
`,
  method2: `
// Ngắn gọn, rõ ràng và biểu cảm
Collections.sort(words, (s1, s2) -> Integer.compare(s1.length(), s2.length()));
`,
  method3: `
import java.util.Comparator;

// Cách viết thanh lịch nhất
words.sort(Comparator.comparingInt(String::length));
`,
};
