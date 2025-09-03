export const code_block = {
  method1: `
// KHÔNG NÊN LÀM VẬY! - Constant Interface Antipattern
public interface PhysicalConstants {
    // Avogadro's number (1/mol)
    static final double AVOGADROS_NUMBER = 6.022_140_857e23;

    // Boltzmann constant (J/K)
    static final double BOLTZMANN_CONSTANT = 1.380_648_52e-23;
    
    // ...
}
`,
  method2: `
// Lớp tiện ích để chứa hằng số
public final class PhysicalConstants {
    
    // Ngăn chặn việc khởi tạo
    private PhysicalConstants() { } 

    public static final double AVOGADROS_NUMBER = 6.022_140_857e23;
    public static final double BOLTZMANN_CONSTANT = 1.380_648_52e-23;
}

// Cách sử dụng với static import:
import static com.myapp.PhysicalConstants.*;

public class MyCalculation {
    public double calculateEnergy(double temperature) {
        return 0.5 * BOLTZMANN_CONSTANT * temperature;
    }
}
`,
  method3: `
public enum Planet {
    MERCURY(3.302e+23, 2.439e6),
    VENUS(4.869e+24, 6.052e6),
    EARTH(5.975e+24, 6.378e6);
    // ...
    
    private final double mass;   // in kilograms
    private final double radius; // in meters
    
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }
    // ...
}
`,
};
