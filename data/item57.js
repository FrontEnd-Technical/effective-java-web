export const code_block = {
  method1: `
// ❌ Cách làm cũ: Khai báo biến quá sớm
public void processItems(List<Item> items) {
    Iterator<Item> i = items.iterator(); 
    Item current; 

    // ... một đoạn mã dài 50 dòng không liên quan đến iterator ...
    // Người đọc code phải nhớ 'i' và 'current' tồn tại để làm gì.

    while (i.hasNext()) {
        current = i.next();
        // ... xử lý current
    }
}
`,
  method2: `
// ✅ Cách làm tốt nhất: Khai báo ngay trước khi dùng
public void processItems(List<Item> items) {
    // ... một đoạn mã dài 50 dòng không liên quan đến iterator ...

    // Biến 'i' và 'current' chỉ tồn tại trong phạm vi vòng lặp for.
    for (Iterator<Item> i = items.iterator(); i.hasNext(); ) {
        Item current = i.next();
        // ... xử lý current
    }
}
`,
  method3: `
// Cách viết gọn gàng và an toàn nhất
for (Item item : items) {
    // Biến 'item' chỉ tồn tại trong vòng lặp này
    process(item);
}
`,
};
