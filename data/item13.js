export const code_block = {
  method1: `
public class Person {
    private final String name;
    private final Address address;

    // Constructor thông thường
    public Person(String name, Address address) {
        this.name = name;
        this.address = address;
    }

    // ✅ COPY CONSTRUCTOR
    public Person(Person other) {
        this.name = other.name;
        // Tạo một bản sao sâu (deep copy) cho đối tượng Address
        this.address = new Address(other.address); 
    }

    // ...
}

// Cách sử dụng:
Person original = new Person("Gemini", new Address("Hanoi"));
Person copy = new Person(original); // Đơn giản và rõ ràng
`,
  method2: `
public class Person {
    // ... các trường và constructor

    // ✅ COPY FACTORY
    public static Person newInstance(Person other) {
        // Có thể chứa logic phức tạp hơn trước khi gọi constructor
        return new Person(other); 
    }
}

// Cách sử dụng:
Person copy = Person.newInstance(original);
`,
};
