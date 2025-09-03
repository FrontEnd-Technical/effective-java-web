export const code_block = {
  method1: `
/**
 * An observable set wrapper. This class is thread-safe, but the
 * underlying set and any observers are not required to be.
 * To guarantee serial access, all access to the underlying set
 * must be surrounded by a synchronized block locking this instance.
 *
 * <p><b>Thread Safety:</b> This class is conditionally thread-safe.
 *
 * @param <E> the type of elements in the set
 */
public class ObservableSet<E> extends ForwardingSet<E> {
    // ...
}
`,
};
