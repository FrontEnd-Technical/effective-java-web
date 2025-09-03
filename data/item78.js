export const code_block = {
  method1: `
// Lớp này không an toàn khi dùng với nhiều luồng!
public class UnsafeCounter {
    private static int count = 0;

    // Nếu hai luồng cùng lúc đọc 'count', tăng nó, rồi ghi lại,
    // một trong hai lần tăng có thể bị mất.
    public static void increment() {
        count++; // Race condition xảy ra ở đây
    }
}
`,
  method2: `
// An toàn khi dùng với nhiều luồng
public class SafeCounter {
    private static int count = 0;

    // Đồng bộ hóa trên monitor của lớp SafeCounter.
    // Chỉ một luồng có thể vào phương thức này tại một thời điểm.
    public static synchronized void increment() {
        count++;
    }
}
`,
  method3: `
import java.util.concurrent.atomic.AtomicLong;

// Cách làm hiện đại và hiệu quả hơn
public class AtomicCounter {
    private static final AtomicLong count = new AtomicLong();

    public static void increment() {
        count.incrementAndGet();
    }
}
`,
};
