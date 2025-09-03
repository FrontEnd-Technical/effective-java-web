export const code_block = {
  method1: `
// ❌ Gây ra cảnh báo "unchecked conversion"
Set<Lark> exaltation = new HashSet();

// ✅ Sửa lỗi bằng cách thêm diamond operator
Set<Lark> exaltation = new HashSet<>();
`,
  method2: `
public <T> T[] toArray(T[] a) {
    if (a.length < size) {
        // Cảnh báo "unchecked cast" xảy ra ở đây vì không thể tạo mảng generic.
        // Nhưng chúng ta biết nó an toàn vì mảng mới có cùng kiểu 
        // với mảng được truyền vào (a).
        @SuppressWarnings("unchecked") 
        T[] result = (T[]) Arrays.copyOf(elements, size, a.getClass());
        return result;
    }
    System.arraycopy(elements, 0, a, 0, size);
    if (a.length > size)
        a[size] = null;
    return a;
}
`,
};
