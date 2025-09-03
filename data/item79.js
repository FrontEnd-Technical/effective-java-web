export const code_block = {
  method1: `
// ❌ Xấu: Giữ khóa trong suốt quá trình xử lý tốn thời gian.
public synchronized void processItem(Item item) {
    // 1. Lấy dữ liệu (cần đồng bộ)
    ItemData data = sharedData.remove(item);
    
    // 2. Xử lý tốn thời gian (không cần đồng bộ)
    // Vấn đề! Giữ khóa trong khi làm việc nặng, chặn các luồng khác.
    processIntensively(data); 
}
`,
  method2: `
// ✅ Cách làm tốt nhất: Thu hẹp phạm vi đồng bộ hóa.
public void processItem(Item item) {
    ItemData dataToProcess;

    // 2. Chỉ đồng bộ hóa phần truy cập dữ liệu chia sẻ.
    // Khối synchronized này rất nhỏ và thực thi nhanh.
    synchronized (this) {
        dataToProcess = sharedData.remove(item);
    }
    
    // 3. Thực hiện công việc nặng sau khi đã nhả khóa.
    processIntensively(dataToProcess);
}
`,
};
