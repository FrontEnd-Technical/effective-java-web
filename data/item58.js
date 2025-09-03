export const code_block = {
  method1: `
// 1. Dùng chỉ mục (cho List):
// Dễ bị lỗi "off-by-one" và không hiệu quả với một số loại List
for (int i = 0; i < c.size(); i++) {
    c.get(i).doSomething();
}
`,
  method2: `
// 2. Dùng Iterator (cho mọi Collection):
// Dài dòng và lặp lại
Iterator<Element> i = c.iterator();
while (i.hasNext()) {
    Element e = i.next(); // Dễ quên gọi next()
    e.doSomething();
}
`,
  method3: `
// Ngắn gọn, an toàn và không có boilerplate
for (Element e : c) {
    e.doSomething();
}
`,
};
