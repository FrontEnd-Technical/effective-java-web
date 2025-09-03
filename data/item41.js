export const code_block = {
  method1: `
// Logic bên trong writeObject (minh họa)
public void writeObject(Object obj) throws IOException {
    if (!(obj instanceof Serializable)) {
        throw new NotSerializableException(obj.getClass().getName());
    }
    // ... logic ghi đối tượng
}
`,
  method2: `
// 1. Marker interface
public interface FastProcessor { }

// 2. Một phương thức chỉ chấp nhận các đối tượng được đánh dấu
public class SystemScheduler {
    public void process(FastProcessor item) {
        // ... logic xử lý nhanh
        System.out.println("Processing a fast item.");
    }
}

// 3. Lớp này được đánh dấu là có thể xử lý nhanh
public class MyItem implements FastProcessor {
    // ...
}

// 4. Cách sử dụng
MyItem item = new MyItem();
SystemScheduler scheduler = new SystemScheduler();
scheduler.process(item); // Hợp lệ

String normalItem = "hello";
// scheduler.process(normalItem); // LỖI BIÊN DỊCH! String không implement FastProcessor.
`,
};
