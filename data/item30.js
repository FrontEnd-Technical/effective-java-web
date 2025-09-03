export const code_block = {
  method1: `
// Dùng kiểu thô - không an toàn và cần cảnh báo unchecked
public static Set union(Set s1, Set s2) {
    Set result = new HashSet(s1);
    result.addAll(s2);
    return result;
}
`,
  method2: `
// Phương thức generic - an toàn, dễ hiểu và không có cảnh báo
public static <E> Set<E> union(Set<E> s1, Set<E> s2) {
    Set<E> result = new HashSet<>(s1);
    result.addAll(s2);
    return result;
}
`,
  method3: `
// Generic singleton factory pattern
private static UnaryOperator<Object> IDENTITY_FN = (t) -> t;

@SuppressWarnings("unchecked")
public static <T> UnaryOperator<T> identityFunction() {
    return (UnaryOperator<T>) IDENTITY_FN;
}
`,
  method4: `
// Tham số kiểu bị ràng buộc (bounded type parameter)
public static <E extends Comparable<E>> E max(Collection<E> c) {
    if (c.isEmpty()) {
        throw new IllegalArgumentException("Empty collection");
    }
    E result = null;
    for (E e : c) {
        if (result == null || e.compareTo(result) > 0) {
            result = e;
        }
    }
    return result;
}
`,
};
