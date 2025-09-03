export const code_block = {
  method1: `
// Giả sử Stack có phương thức clone()
public class Stack implements Cloneable {
    private Object[] elements;
    // ...

    // Thao tác trên một bản sao để đảm bảo tính nguyên tử
    public Stack sort() {
        Stack tempCopy = (Stack) this.clone(); // 1. Tạo bản sao
        try {
            // 2. Thực hiện các thao tác trên bản sao
            Collections.sort(tempCopy.elements); 
            // 3. Nếu thành công, thay thế trạng thái gốc
            this.elements = tempCopy.elements;
            return this;
        } catch (UnsupportedOperationException e) {
            // Nếu thất bại, đối tượng gốc 'this' không bị ảnh hưởng
            // Dịch exception để phù hợp với tầng trừu tượng (Item 73)
            throw new SortFailedException("Sort failed", e);
        }
    }
}
`,
  method2: `
public class User {
    private int age;

    public void setAge(int age) {
        // 1. Kiểm tra tham số trước khi thay đổi trạng thái
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative: " + age);
        }
        
        // 2. Chỉ thay đổi trạng thái sau khi đã kiểm tra thành công
        this.age = age;
    }
}
`,
};
