export const code_block = {
  method1: `
// Xấu: Danh sách tham số dài và khó đọc
public void processPayment(String cardNumber, int expiryMonth, int expiryYear, String cvv, double amount) { 
    // ... 
}

// Tốt: Nhóm các tham số liên quan vào một lớp
public class CardDetails {
    private final String cardNumber;
    private final int expiryMonth;
    private final int expiryYear;
    // ...
}
public void processPayment(CardDetails cardDetails, double amount) { 
    // ... 
}
`,
  method2: `
import java.util.ArrayList;
import java.util.List;

// Xấu: Cứng nhắc, chỉ chấp nhận ArrayList
public void printNames(ArrayList<String> names) { 
    // ... 
}

// Tốt: Linh hoạt, chấp nhận bất kỳ loại List nào (ArrayList, LinkedList, ...)
public void printNames(List<String> names) { 
    // ... 
}
`,
  method3: `
// Khó đọc: true nghĩa là gì? Phải xem tài liệu mới biết.
thermometer.setTemperature(25.5, true); 

// --------------------------------------------------

// Tốt: Rõ ràng và dễ hiểu ngay lập tức
public enum TemperatureScale { CELSIUS, FAHRENHEIT }
thermometer.setTemperature(25.5, TemperatureScale.CELSIUS);
`,
};
