export const code_block = {
  method1: `
// ✅ Eager Initialization (Tốt nhất trong hầu hết trường hợp):
// Đơn giản, rõ ràng, và thread-safe nếu trường là final
private final FieldType field = computeFieldValue();
`,
  method2: `
// 🤔 Lazy Initialization (Phức tạp hơn):
private FieldType field;

synchronized FieldType getField() {
    if (field == null) {
        field = computeFieldValue();
    }
    return field;
}
`,
  method3: `
// Giả lập lớp nặng
class HeavyweightDataExporter { /* ... */ }

public class MyComponent {
    // Trường này rất nặng và chỉ được dùng khi export.
    // Dùng volatile để đảm bảo tính hiển thị giữa các luồng.
    private volatile HeavyweightDataExporter exporter;
    
    public HeavyweightDataExporter getExporter() {
        // Double-checked locking pattern for thread-safe lazy initialization
        if (exporter == null) { 
            synchronized(this) {
                if (exporter == null) {
                    exporter = new HeavyweightDataExporter();
                }
            }
        }
        return exporter;
    }
}
`,
};
