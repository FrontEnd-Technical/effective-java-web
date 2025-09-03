export const code_block = {
  method1: `
// Cách tốt nhất: lớp này không thể được kế thừa.
public final class MyValueClass {
    // ...
}
`,
  method2: `
public class UtilityClass {
    // Constructor private ngăn chặn kế thừa.
    private UtilityClass() {
        // ...
    }

    public static UtilityClass newInstance() {
        return new UtilityClass();
    }
}
`,
};
