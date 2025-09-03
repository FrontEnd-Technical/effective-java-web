export const code_block = {
  method1: `
// 1. Mảng là covariant, nên dòng này hợp lệ lúc biên dịch
Object[] objectArray = new Long[1];

// 2. Gây ra lỗi ArrayStoreException lúc chạy!
//    Mảng biết nó thực sự là Long[], nên không cho phép chứa String.
objectArray[0] = "I don't belong here"; 
`,
  method2: `
// List<Object> list = new ArrayList<Long>(); // LỖI BIÊN DỊCH!
// Vì generics là invariant, lỗi được phát hiện ngay lập tức.

List<String> strings = new ArrayList<>();
// strings.add(42); // LỖI BIÊN DỊCH! Không thể thêm Integer vào List<String>.
`,
  method3: `
// Tốt: Dùng List
public List<Product> getFeaturedProducts() {
    // ...
}

// Xấu: Trả về mảng
public Product[] getFeaturedProductsArray() {
    // ...
}
`,
};
