export const code_block = {
  method1: `
import java.util.Random;

// ❌ Cách làm thủ công (dễ lỗi):
// Cố gắng tự viết - phức tạp và có thể có những lỗi tinh vi về phân phối.
// Ví dụ, nếu n không phải là lũy thừa của 2, phân phối sẽ không đều.
Random rnd = new Random();
int n = ...; // phạm vi
int randomNumber = Math.abs(rnd.nextInt()) % n;
`,
  method2: `
import java.util.Random;

// ✅ Cách làm tốt nhất (dùng thư viện):
// Đơn giản, rõ ràng, và được đảm bảo hoạt động đúng đắn.
Random rnd = new Random();
int n = ...;
int randomNumber = rnd.nextInt(n);
`,
};
