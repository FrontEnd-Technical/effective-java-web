export const code_block = {
  method1: `
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

// Antipattern: Đừng bao giờ làm điều này!
List<String> results = new ArrayList<>();
Stream<String> wordStream = Stream.of("effective", "java", "is", "awesome");

wordStream.filter(s -> s.length() > 5)
          .forEach(s -> results.add(s.toUpperCase())); // Tác dụng phụ! Sửa đổi list bên ngoài.
`,
  method2: `
import java.util.stream.Collectors;
import java.util.stream.Stream;

// An toàn, rõ ràng và hoạt động tốt với stream song song
Stream<String> wordStream = Stream.of("effective", "java", "is", "awesome");
List<String> results = wordStream.filter(s -> s.length() > 5)
                                 .map(s -> s.toUpperCase())
                                 .collect(Collectors.toList());
`,
  method3: `
stream.forEach(System.out::println); // Đây là cách dùng forEach hợp lệ.
`,
};
