export const code_block = {
  method1: `
// ❌ Cách làm sai (dùng reflection): Kém an toàn, dài dòng và chậm
public static Set<String> createSet(String className) {
    Class<?> cl = null;
    try {
        cl = Class.forName(className);
    } catch (ClassNotFoundException e) {
        // Xử lý lỗi
    }

    Constructor<?> cons = null;
    try {
        cons = cl.getDeclaredConstructor();
    } catch (NoSuchMethodException e) {
        // Xử lý lỗi
    }

    Set<String> s = null;
    try {
        // Cảnh báo unchecked cast ở đây!
        s = (Set<String>) cons.newInstance(); 
    } catch (Exception e) {
        // Xử lý lỗi
    }
    
    return s;
}
`,
  method2: `
import java.util.function.Supplier;
import java.util.Set;
import java.util.HashSet;
import java.util.TreeSet;

// ✅ Cách làm tốt nhất (dùng interface và Supplier): An toàn, ngắn gọn và nhanh
public static Set<String> createSet(Supplier<? extends Set<String>> factory) {
    return factory.get();
}

// Cách dùng:
Set<String> myHashSet = createSet(HashSet::new);
Set<String> myTreeSet = createSet(TreeSet::new);
`,
};
