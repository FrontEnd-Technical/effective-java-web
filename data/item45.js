export const code_block = {
  method1: `
// Dài dòng, nhiều biến tạm và logic lộn xộn
Map<String, Set<String>> groups = new HashMap<>();
try (Scanner s = new Scanner(new File(dictionary))) {
    while (s.hasNext()) {
        String word = s.next();
        groups.computeIfAbsent(alphabetize(word),
            (unused) -> new TreeSet<>()).add(word);
    }
}

// Phải viết thêm vòng lặp để xử lý kết quả
for (Set<String> group : groups.values()) {
    if (group.size() >= minGroupSize) {
        System.out.println(group.size() + ": " + group);
    }
}
`,
  method2: `
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.stream.Stream;
import static java.util.stream.Collectors.groupingBy;

// Ngắn gọn, rõ ràng và tập trung vào "cái gì" thay vì "như thế nào"
try (Stream<String> words = Files.lines(Path.of(dictionary))) {
    words.collect(groupingBy(word -> alphabetize(word)))
        .values().stream()
        .filter(group -> group.size() >= minGroupSize)
        .forEach(g -> System.out.println(g.size() + ": " + g));
}
`,
};
