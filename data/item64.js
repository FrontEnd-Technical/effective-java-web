export const code_block = {
  method1: `
// ❌ Cách làm cứng nhắc:
// Khai báo bằng lớp cụ thể -> Kém linh hoạt
ArrayList<Subscriber> subscribers = new ArrayList<>();

// ✅ Cách làm tốt nhất:
// Khai báo bằng interface -> Rất linh hoạt
List<Subscriber> subscribers = new ArrayList<>();

// Sau này, bạn có thể dễ dàng thay đổi lớp triển khai mà không ảnh hưởng gì.
// subscribers = new LinkedList<>();
// subscribers = new CopyOnWriteArrayList<>();
`,
  method2: `
// Tốt
List<String> names = new ArrayList<>();
Map<Integer, User> userMap = new HashMap<>();
Set<Product> products = new HashSet<>();

// Xấu
ArrayList<String> names = new ArrayList<>();
HashMap<Integer, User> userMap = new HashMap<>();
`,
  method3: `
// Tốt: Chấp nhận bất kỳ loại List nào
public void processItems(List<Item> items) { ... }

// Xấu: Chỉ chấp nhận LinkedList, hạn chế người dùng
public void processItems(LinkedList<Item> items) { ... }
`,
};
