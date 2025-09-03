export const code_block = {
  method1: `
public class MyService {
    // API này hạn chế người dùng.
    public Stream<Product> getProducts() {
        // Giả sử productList là một List<Product>
        return productList.stream();
    }
}

// Người dùng
Stream<Product> products = myService.getProducts();

// Lần 1: In ra tên
products.forEach(p -> System.out.println(p.getName())); 

// Lần 2: Cố gắng đếm số lượng -> SẼ NÉM RA IllegalStateException!
long count = products.count(); // Lỗi! Stream đã bị đóng.
`,
  method2: `
public class MyService {
    // API này linh hoạt và mạnh mẽ.
    public List<Product> getProducts() {
        // Trả về một List (bản sao để không làm lộ cấu trúc nội bộ)
        return new ArrayList<>(productList); 
    }
}

// Người dùng có toàn quyền lựa chọn
List<Product> products = myService.getProducts();

// Lựa chọn 1: Duyệt nhiều lần bằng for-each
for (Product p : products) {
    System.out.println(p.getName());
}
for (Product p : products) {
    if (p.getPrice() > 1000) { /* ... */ }
}

// Lựa chọn 2: Xử lý bằng stream khi cần
long count = products.stream().count();
System.out.println("Total products: " + count);
`,
};
