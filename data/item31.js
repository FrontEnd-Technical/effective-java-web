export const code_block = {
  method1: `
public class Stack<E> {
    // ...
    // Phương thức này quá cứng nhắc!
    public void pushAll(Iterable<E> src) {
        for (E e : src)
            push(e);
    }
}

Stack<Number> numberStack = new Stack<>();
Iterable<Integer> integers = List.of(1, 2, 3);
// Lỗi biên dịch! Mặc dù Integer là một Number.
// Nguyên nhân: Iterable<Integer> không phải là một Iterable<Number>.
numberStack.pushAll(integers);
`,
  method2: `
// src là một producer, vì vậy ta dùng "extends"
public void pushAll(Iterable<? extends E> src) {
    for (E e : src)
        push(e);
}

Stack<Number> numberStack = new Stack<>();
Iterable<Integer> integers = List.of(1, 2, 3);
// Bây giờ hoạt động hoàn hảo!
numberStack.pushAll(integers);
`,
  method3: `
// dst là một consumer, vì vậy ta dùng "super"
public void popAll(Collection<? super E> dst) {
    while (!isEmpty())
        dst.add(pop());
}

Stack<Number> numberStack = new Stack<>();
// Thêm vài số vào stack...
Collection<Object> objects = new ArrayList<>();

// Hoạt động hoàn hảo! 
// Bạn có thể pop các Number vào một Collection<Object>.
numberStack.popAll(objects);
`,
};
