export const code_block = {
  method1: `
public class NutritionFacts {
    private final int servingSize;
    // ... other fields

    // Lớp Builder là static vì nó không cần tham chiếu đến NutritionFacts
    public static class Builder {
        private int servingSize;
        // ...

        public Builder servingSize(int val) {
            servingSize = val;
            return this;
        }

        public NutritionFacts build() {
            return new NutritionFacts(this);
        }
    }

    private NutritionFacts(Builder builder) {
        servingSize = builder.servingSize;
    }
}
`,
  method2: `
import java.util.Iterator;

public class MyCollection<E> {
    private E[] elements;
    private int size;
    // ...

    public Iterator<E> iterator() {
        return new MyIterator();
    }

    // Inner class - vì nó cần truy cập vào mảng 'elements' của MyCollection
    private class MyIterator implements Iterator<E> {
        private int cursor = 0;
        
        public boolean hasNext() {
            // Có thể truy cập trực tiếp 'size' của lớp bao bọc
            return cursor < size;
        }

        public E next() {
            // Có thể truy cập trực tiếp 'elements' của lớp bao bọc
            return elements[cursor++];
        }
    }
}
`,
};
