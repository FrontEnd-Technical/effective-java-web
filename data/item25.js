export const code_block = {
  method1: `
// File 1: Utensil.java
// Định nghĩa hai lớp top-level trong một file
class Utensil {
    static final String NAME = "pan";
}

class Dessert {
    static final String NAME = "cake";
}

// File 2: Main.java
public class Main {
    public static void main(String[] args) {
        System.out.println(Utensil.NAME + " and " + Dessert.NAME);
    }
}
`,
  method2: `
// Cấu trúc file đúng đắn

// File: Utensil.java
public class Utensil {
    // ...
}

// File: Dessert.java
public class Dessert {
    // ...
}

// File: Main.java
public class Main {
    // ...
}
`,
  method3: `
public class MyService {
    // ...

    // Helper class này liên quan mật thiết đến MyService
    // và được đặt bên trong nó dưới dạng static member class.
    private static class Helper {
        // ...
    }
}
`,
};
