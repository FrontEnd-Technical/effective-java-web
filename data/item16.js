export const code_block = {
  method1: `
// Phiên bản 1: Lưu trữ tuổi trực tiếp.
public class Person {
    private int age; // private!

    public int getAge() {
        return age;
    }
    // ...
}

// --------------------------------------------------

// Phiên bản 2: Lưu ngày sinh và tính toán tuổi.
import java.time.LocalDate;
import java.time.Period;

public class Person {
    private LocalDate birthDate; // Thay đổi hoàn toàn trường nội bộ!

    // Chữ ký của phương thức getAge() không đổi.
    // Client không hề biết có sự thay đổi bên trong.
    public int getAge() {
        return Period.between(birthDate, LocalDate.now()).getYears();
    }
    
    // ...
}
`,
  method2: `
public class Temperature {
    private double kelvin;

    // Setter đảm bảo nhiệt độ không bao giờ dưới độ không tuyệt đối.
    public void setKelvin(double kelvin) {
        if (kelvin < 0) {
            throw new IllegalArgumentException("Temperature cannot be below absolute zero.");
        }
        this.kelvin = kelvin;
    }

    public double getKelvin() {
        return kelvin;
    }
}
`,
  method3: `
public class AppConstants {
    // An toàn vì là hằng số và String là bất biến.
    public static final String DEFAULT_GREETING = "Hello, World!";
    public static final int MAX_CONNECTIONS = 100;
}
`,
};
