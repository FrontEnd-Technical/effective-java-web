export const code_block = {
  method1: `public class Stack {
    private Object[] elements;
    private int size = 0;
    // ... constructor

    public void push(Object e) {
        ensureCapacity();
        elements[size++] = e;
    }

    // ❌ PHƯƠNG THỨC NÀY GÂY RÒ RỈ BỘ NHỚ!
    public Object pop() {
        if (size == 0) throw new EmptyStackException();
        return elements[--size]; 
    }
}`,
  method2: `public Object pop() {
    if (size == 0) throw new EmptyStackException();
    Object result = elements[--size];
    
    // Loại bỏ tham chiếu lỗi thời!
    elements[size] = null; 
    
    return result;
}`,
};
