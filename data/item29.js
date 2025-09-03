export const code_block = {
  method1: `
// Cách làm cũ, không an toàn
public class Stack {
    private Object[] elements;
    private int size = 0;
    // ...

    public void push(Object e) {
        // ...
        elements[size++] = e;
    }

    public Object pop() {
        // ...
        Object result = elements[--size];
        elements[size] = null;
        return result;
    }
}
`,
  method2: `
// Cách làm hiện đại, an toàn về kiểu
public class Stack<E> {
    private E[] elements;
    private int size = 0;
    // ...

    public void push(E e) {
        // ...
        elements[size++] = e;
    }

    public E pop() {
        // ...
        E result = elements[--size];
        elements[size] = null;
        return result;
    }
}
`,
  method3: `
public final class Pair<K, V> {
    private final K key;
    private final V value;

    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public K getKey() { return key; }
    public V getValue() { return value; }
}
`,
};
