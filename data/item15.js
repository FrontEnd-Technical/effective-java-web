export const code_block = {
  method1: `
public class BankAccount {
    // Trường 'balance' được bảo vệ, không thể bị thay đổi tùy tiện từ bên ngoài.
    private double balance;

    public BankAccount(double initialBalance) {
        if (initialBalance < 0) {
            throw new IllegalArgumentException("Balance cannot be negative");
        }
        this.balance = initialBalance;
    }

    public double getBalance() {
        return balance;
    }

    // Chỉ có thể thay đổi balance thông qua các phương thức được kiểm soát.
    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
        } else {
            throw new IllegalArgumentException("Invalid withdraw amount");
        }
    }
}
`,
  method2: `
// File: OrderService.java (Public API)
package com.mycompany.order;

public class OrderService {
    private final TaxCalculator taxCalculator = new TaxCalculator(); // Sử dụng lớp nội bộ

    public double calculateTotal(Order order) {
        double subtotal = order.getSubtotal();
        double tax = taxCalculator.calculate(subtotal); // Gọi lớp package-private
        return subtotal + tax;
    }
}

// File: TaxCalculator.java (Lớp hỗ trợ, không cần public)
package com.mycompany.order;

// Lớp này không có từ khóa 'public', nên nó là package-private.
// Chỉ các lớp trong package 'com.mycompany.order' mới thấy và sử dụng được nó.
class TaxCalculator {
    private static final double VAT_RATE = 0.1;

    double calculate(double amount) {
        return amount * VAT_RATE;
    }
}
`,
  method3: `
import java.time.LocalDate;
import java.util.List;
import java.util.ArrayList;

// Giả lập các lớp cần thiết
class Data {}
class ProcessedData {}
class Report {}

public class ReportGeneratorService {

    // API công khai: đơn giản và rõ ràng.
    public Report generateMonthlyReport(LocalDate month) {
        List<Data> rawData = fetchDataFromDatabase(month);
        ProcessedData processedData = processAndAggregateData(rawData);
        return formatReportAsPdf(processedData);
    }

    // Các chi tiết triển khai phức tạp được giữ là private.
    private List<Data> fetchDataFromDatabase(LocalDate month) {
        // ... logic kết nối database, chạy query phức tạp...
        System.out.println("Fetching data for " + month);
        return new ArrayList<>();
    }

    private ProcessedData processAndAggregateData(List<Data> rawData) {
        // ... logic tính toán, tổng hợp, lọc dữ liệu ...
        System.out.println("Processing data...");
        return new ProcessedData();
    }

    private Report formatReportAsPdf(ProcessedData processedData) {
        // ... logic sử dụng thư viện để tạo file PDF...
        System.out.println("Formatting report as PDF...");
        return new Report();
    }
}
`,
};
