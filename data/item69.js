export const code_block = {
  method1: `
// Antipattern - Đừng bao giờ làm điều này!
// Mã nguồn này vừa khó hiểu vừa chạy rất chậm.
int[] arr = new int[10];
try {
    int i = 0;
    while(true) {
        // ... làm gì đó với arr[i]
        i++;
    }
} catch (ArrayIndexOutOfBoundsException e) {
    // Dùng exception để kết thúc vòng lặp
}
`,
  method2: `
// Sạch sẽ, dễ hiểu và hiệu quả
int[] arr = new int[10];
for (int i = 0; i < arr.length; i++) {
    // ... làm gì đó với arr[i]
}

// Hoặc tốt hơn nữa với for-each
for (int value : arr) {
    // ... làm gì đó với value
}
`,
};
