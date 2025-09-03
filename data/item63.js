export const code_block = {
  method1: `
// Cực kỳ chậm khi numItems lớn!
public String statement() {
    String result = "";
    for (int i = 0; i < numItems(); i++) {
        // Một đối tượng String mới được tạo ra trong mỗi vòng lặp
        result += lineForItem(i); 
    }
    return result;
}
`,
  method2: `
// Nhanh và hiệu quả
public String statement() {
    StringBuilder b = new StringBuilder(numItems() * LINE_WIDTH_ESTIMATE);
    for (int i = 0; i < numItems(); i++) {
        b.append(lineForItem(i));
    }
    return b.toString();
}
`,
  method3: `
// Trình biên dịch sẽ tự động tối ưu hóa dòng này thành StringBuilder
String s = item1 + " and " + item2;
`,
};
