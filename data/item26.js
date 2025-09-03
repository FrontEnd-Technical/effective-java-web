export const code_block = {
  method1: `
// Sử dụng kiểu thô - Rất nguy hiểm!
List names = new ArrayList(); 
names.add("Gemini");
names.add("Bard");
names.add(42); // Lỗi logic! Trình biên dịch không hề báo lỗi.

// Lỗi sẽ chỉ xảy ra ở đây, rất xa nơi nó được gây ra.
for (Object o : names) {
    // Sẽ ném ra ClassCastException khi gặp số 42
    String name = (String) o; 
    System.out.println(name);
}
`,
  method2: `
// Sử dụng kiểu được tham số hóa - An toàn!
List<String> names = new ArrayList<>();
names.add("Gemini");
names.add("Bard");
// names.add(42); // LỖI BIÊN DỊCH! Lỗi được phát hiện ngay lập tức.

for (String name : names) { // Không cần ép kiểu
    System.out.println(name);
}
`,
};
