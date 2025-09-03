export const code_block = {
  method1: `
// JUnit 3 style - Lỗi thời và dễ gây lỗi
public class MyTest extends TestCase {
    public void testSomethingShouldWork() { 
        // ... 
    }

    // Lỗi chính tả! Framework sẽ âm thầm bỏ qua phương thức này.
    public void tsetSomethingElse() { 
        // ... 
    } 
}
`,
  method2: `
// Sử dụng annotation - An toàn và rõ ràng (JUnit 4/5)
public class MyTest {
    @Test 
    public void somethingShouldWork() { 
        // ... 
    }

    // @Test 
    // Giả sử gõ sai tên annotation, ví dụ @Tset
    // trình biên dịch sẽ báo lỗi ngay lập tức.
    public void somethingElse() { 
        // ... 
    }
}
`,
  method3: `
@Test(timeout = 100, expected = NullPointerException.class) 
public void testPerformanceAndException() { 
    // ... 
}
`,
};
