export const code_block = {
  method1: `
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

public final class StringList implements Serializable {
    private transient int size = 0;
    private transient Entry head = null; // Dùng transient, không serialize trực tiếp

    // Lớp lồng, không cần Serializable vì nó là chi tiết triển khai
    private static class Entry { 
        String data;
        Entry next;
        Entry previous;
    }
    
    private static final long serialVersionUID = 20250828L;

    public void add(String s) { /* ... */ }

    /**
     * Serialize đối tượng này.
     * @serialData The size of the list (the number of strings it
     * contains) is emitted (int), followed by all of its
     * elements (each a String), in the proper sequence.
     */
    private void writeObject(ObjectOutputStream s) throws IOException {
        s.defaultWriteObject(); // Ghi các trường non-transient (nếu có)
        s.writeInt(size); // Ghi 'size' một cách thủ công

        // Ghi các phần tử theo logic
        for (Entry e = head; e != null; e = e.next)
            s.writeObject(e.data);
    }

    private void readObject(ObjectInputStream s) throws IOException, ClassNotFoundException {
        s.defaultReadObject(); // Đọc các trường non-transient
        int numElements = s.readInt(); // Đọc 'size'

        // Đọc các phần tử và xây dựng lại trạng thái
        for (int i = 0; i < numElements; i++)
            add((String) s.readObject()); 
    }
}
`,
};
