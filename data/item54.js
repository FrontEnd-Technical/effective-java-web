export const code_block = {
  method1: `
// API kém thân thiện (trả về null)
public List<Cheese> getCheeses() {
    if (cheesesInStock.isEmpty()) {
        return null; // Xấu!
    }
    return new ArrayList<>(cheesesInStock);
}

// Mã nguồn phía client trở nên phức tạp và xấu xí
List<Cheese> cheeses = shop.getCheeses();
if (cheeses != null && cheeses.contains(Cheese.STILTON)) { // Bắt buộc phải kiểm tra null
    System.out.println("Jolly good, just the thing.");
}
`,
  method2: `
import java.util.Collections;

// API tốt (trả về collection rỗng)
public List<Cheese> getCheeses() {
    if (cheesesInStock.isEmpty()) {
        return Collections.emptyList(); // Tốt!
    }
    return new ArrayList<>(cheesesInStock);
}

// Mã nguồn phía client trở nên đơn giản và an toàn
List<Cheese> cheeses = shop.getCheeses();
// Không cần kiểm tra null, vòng lặp for-each và các phương thức khác
// hoạt động hoàn hảo với một collection rỗng.
if (cheeses.contains(Cheese.STILTON)) { 
    System.out.println("Jolly good, just the thing.");
}
`,
  method3: `
// Tối ưu hóa cho việc trả về mảng rỗng
private static final Cheese[] EMPTY_CHEESE_ARRAY = new Cheese[0];

public Cheese[] getCheeses() {
    if (cheesesInStock.isEmpty()) {
        return EMPTY_CHEESE_ARRAY; // Tái sử dụng mảng rỗng đã cache
    }
    // ... trả về mảng có nội dung
}
`,
};
