export const code_block = {
  method1: `
// Trong interface java.util.List (từ Java 8)
public interface List<E> extends Collection<E> {
    // ... các phương thức cũ như get(), size(), add()...

    // Phương thức mới được thêm vào mà không phá vỡ các lớp cũ
    default void sort(Comparator<? super E> c) {
        Object[] a = this.toArray();
        Arrays.sort(a, (Comparator) c);
        
        // Ghi lại các phần tử đã sắp xếp vào list
        ListIterator<E> i = this.listIterator();
        for (Object e : a) {
            i.next();
            i.set((E) e);
        }
    }
}
`,
};
