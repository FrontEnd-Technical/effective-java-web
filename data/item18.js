export const code_block = {
  method1: `
// Lớp này hoạt động không đúng!
public class InstrumentedHashSet<E> extends HashSet<E> {
    private int addCount = 0;

    public InstrumentedHashSet() {
    }

    public InstrumentedHashSet(int initCap, float loadFactor) {
        super(initCap, loadFactor);
    }

    @Override
    public boolean add(E e) {
        addCount++;
        return super.add(e);
    }

    @Override
    public boolean addAll(Collection<? extends E> c) {
        addCount += c.size();
        return super.addAll(c); // Vấn đề nằm ở đây!
    }
    
    public int getAddCount() {
        return addCount;
    }
}
`,
  method2: `
// Lớp wrapper sử dụng composition
public class InstrumentedSet<E> extends ForwardingSet<E> {
    private int addCount = 0;

    public InstrumentedSet(Set<E> s) {
        super(s); // Chứa một Set khác bên trong
    }

    @Override 
    public boolean add(E e) {
        addCount++;
        return super.add(e);
    }

    @Override 
    public boolean addAll(Collection<? extends E> c) {
        addCount += c.size();
        return super.addAll(c);
    }
    
    public int getAddCount() {
        return addCount;
    }
}

// (ForwardingSet là một lớp tiện ích giúp ủy thác các lời gọi phương thức)
`,
};
