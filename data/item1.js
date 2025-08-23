export const code_block = [
  `public class Pizza {
    private int size;
    private String topping;

    // Both constructors are valid, but it's confusing which one to use
    public Pizza(int size, String topping) {
        this.size = size;
        this.topping = topping;
    }

    public Pizza(String topping, int size) {
        this.topping = topping;
        this.size = size;
    }

    @Override
    public String toString() {
        return "Pizza: " + size + " inches, topping: " + topping;
    }

    public static void main(String[] args) {
        // Which constructor is being called here? It's not clear.
        Pizza pizza1 = new Pizza(12, "Pepper");
        Pizza pizza2 = new Pizza("Mushroom", 14);

        System.out.println(pizza1);
        System.out.println(pizza2);
    }
}`,
  `public class Pizza {
    private int size;
    private String topping;

    private Pizza(int size, String topping) {
        this.size = size;
        this.topping = topping;
    }

    // Clear, descriptive static factory methods
    public static Pizza createWithSizeFirst(int size, String topping) {
        return new Pizza(size, topping);
    }

    public static Pizza createWithToppingFirst(String topping, int size) {
        return new Pizza(size, topping);
    }

    @Override
    public String toString() {
        return "Pizza: " + size + " inches, topping: " + topping;
    }

    public static void main(String[] args) {
        // Now it's clear which parameter comes first
        Pizza pizza1 = Pizza.createWithSizeFirst(12, "Pepperoni");
        Pizza pizza2 = Pizza.createWithToppingFirst("Mushroom", 14);

        System.out.println(pizza1);
        System.out.println(pizza2);
    }
}`,
  `public class UserPermission {
    private final String role;

    public UserPermission(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "UserPermission: " + role;
    }

    public static void main(String[] args) {
        UserPermission admin1 = new UserPermission("ADMIN");
        UserPermission admin2 = new UserPermission("ADMIN");

        System.out.println(admin1 == admin2);  // false (Different instances)
    }
}`,
  `import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class UserPermission {
    private final String role;

    // Cache để lưu trữ các instance duy nhất
    private static final Map<String, UserPermission> CACHE = new ConcurrentHashMap<>();

    private UserPermission(String role) {
        this.role = role;
    }

    // Static factory method
    public static UserPermission of(String role) {
        // Trả về object từ cache nếu đã tồn tại
        // Nếu chưa có thì tạo mới và put vào cache
        return CACHE.computeIfAbsent(role, UserPermission::new);
    }

    @Override
    public String toString() {
        return "UserPermission: " + role;
    }

    public static void main(String[] args) {
        UserPermission admin1 = UserPermission.of("ADMIN");
        UserPermission admin2 = UserPermission.of("ADMIN");
        UserPermission user = UserPermission.of("USER");

        System.out.println(admin1 == admin2);   // true (cùng một instance)
        System.out.println(admin1);            // UserPermission: ADMIN
        System.out.println(user);              // UserPermission: USER
    }
}
`,
  `// Have to expose all implementation classes
public class CreditCardPayment {
    public CreditCardPayment() {}
    
    public void processPayment(double amount) {
        System.out.println("Processing $" + amount + " through Credit Card");
    }
}

public class PayPalPayment {
    public PayPalPayment() {}
    
    public void processPayment(double amount) {
        System.out.println("Processing $" + amount + " through PayPal");
    }
}

// Client code - Has to know about specific classes
public class PaymentExample {
    public static void main(String[] args) {
        // Client needs to know about specific implementation classes
        CreditCardPayment ccPayment = new CreditCardPayment();
        PayPalPayment ppPayment = new PayPalPayment();
        
        ccPayment.processPayment(100.00);
        ppPayment.processPayment(50.00);
    }
}
`,
  `// Interface that client will interact with
interface PaymentProcessor {
    void processPayment(double amount);
    
    // Static factory methods hiding implementation details
    static PaymentProcessor createCreditCardProcessor() {
        return new CreditCardPayment();
    }
    
    static PaymentProcessor createPayPalProcessor() {
        return new PayPalPayment();
    }
}

// Hidden implementation classes (not public)
class CreditCardPayment implements PaymentProcessor {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing $" + amount + " through Credit Card");
    }
}

class PayPalPayment implements PaymentProcessor {
    @Override
    public void processPayment(double amount) {
        System.out.println("Processing $" + amount + " through PayPal");
    }
}

// Client code
public class PaymentExample {
    public static void main(String[] args) {
        // Client doesn't know about CreditCardPayment or PayPalPayment classes
        PaymentProcessor creditCard = PaymentProcessor.createCreditCardProcessor();
        PaymentProcessor paypal = PaymentProcessor.createPayPalProcessor();
        
        // Process payments
        creditCard.processPayment(100.00);
        paypal.processPayment(50.00);
        
        // Can't do this because implementations are hidden:
        // CreditCardPayment ccPayment = new CreditCardPayment();  // Won't compile!
    }
}`,
  `import java.util.EnumSet;

enum Days { MON, TUE, WED, THU, FRI, SAT, SUN }

public class EnumSetExample {
    public static void main(String[] args) {
        EnumSet<Days> weekend = EnumSet.of(Days.SAT, Days.SUN);
        System.out.println(weekend);
        // Internally, it might be a RegularEnumSet or JumboEnumSet, but we don’t need to know!
    }
}`,
  `public class Vehicle {
    private final String type;

    // Private constructor prevents subclassing
    private Vehicle(String type) {
        this.type = type;
    }

    // Static factory methods to create instances
    public static Vehicle createCar() {
        return new Vehicle("Car");
    }

    public static Vehicle createBike() {
        return new Vehicle("Bike");
    }

    @Override
    public String toString() {
        return "Vehicle Type: " + type;
    }
}`,
  `// This will cause a compilation error!
public class SportsCar extends Vehicle {
    public SportsCar() {
        super("SportsCar");  // ERROR: Cannot call a private constructor
    }
}`,
];

export const advantages = [
  "ADVANTAGE 1: Static factory methods have names.",
  "ADVANTAGE 2: Static factory methods, unlike constructors, can reuse existing objects instead of creating new ones each time which is memory efficient and allows control over instance creation.",
  "ADVANTAGE 3: A static factory method can return object of any subtype of their return type which can’t be done using constructor.",
  "ADVANTAGE 4: The static factories method gives the flexibility to return different subtypes based on input parameters.",
];

export const table_method = [
  {
    name: "from",
    purpose: "Converts from one type to another	",
    ex: "Date d = Date.from(instant);",
  },
  {
    name: "of",
    purpose: "Aggregates multiple values into an instance",
    ex: "Set<Rank> faceCards = EnumSet.of(JACK, QUEEN, KING);",
  },
  {
    name: "valueOf",
    purpose: "More verbose alternative to from and of",
    ex: "BigInteger prime = BigInteger.valueOf(Integer.MAX_VALUE);",
  },
  {
    name: "instance / getInstance",
    purpose: "Returns an instance based on parameters",
    ex: "StackWalker luke = StackWalker.getInstance(options);",
  },
  {
    name: "create / newInstance",
    purpose: "Always returns a new instance",
    ex: "Object newArray = Array.newInstance(classObject, arrayLen);",
  },
  {
    name: "getType",
    purpose: "Returns an instance of Type from a different class",
    ex: "FileStore fs = Files.getFileStore(path);",
  },
  {
    name: "newType",
    purpose: "Creates a new instance of Type from a different class",
    ex: "BufferedReader br = Files.newBufferedReader(path);",
  },
  {
    name: "type",
    purpose: "Concise alternative to get<Type> and new<Type>",
    ex: "List<Complaint> litany = Collections.list(legacyLitany);",
  },
];
