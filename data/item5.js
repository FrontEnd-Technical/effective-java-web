export const code_block = {
  method1: `// Anti-pattern: Lớp SpellChecker tự tạo ra Dictionary
public class SpellChecker {
    
    // Phụ thuộc bị gắn cứng!
    private final Dictionary dictionary = new EnglishDictionary(); 

    public boolean isValid(String word) {
        // ... sử dụng dictionary
        return dictionary.contains(word);
    }
}`,
  method2: `// Good practice: Dictionary được cung cấp từ bên ngoài
public class SpellChecker {
    
    // Dependency được "tiêm" vào qua constructor
    private final Dictionary dictionary;

    public SpellChecker(Dictionary dictionary) {
        this.dictionary = Objects.requireNonNull(dictionary);
    }

    public boolean isValid(String word) {
        return dictionary.contains(word);
    }
}`,
  method3: `// Ở môi trường production
SpellChecker checker = new SpellChecker(new EnglishDictionary());

// Khi cần kiểm tra tiếng Việt
SpellChecker vnChecker = new SpellChecker(new VietnameseDictionary());`,
  method4: `// Trong unit test
Dictionary mockDictionary = mock(Dictionary.class);
when(mockDictionary.contains("test")).thenReturn(true);

SpellChecker checkerForTest = new SpellChecker(mockDictionary);
assertTrue(checkerForTest.isValid("test"));`,
method5:`@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final PaymentGateway paymentGateway;

    // Spring sẽ tự động tìm và tiêm các bean cần thiết vào đây
    @Autowired
    public OrderService(OrderRepository orderRepository, PaymentGateway paymentGateway) {
        this.orderRepository = orderRepository;
        this.paymentGateway = paymentGateway;
    }

    public void placeOrder(Order order) {
        // ...
    }
}`
};
