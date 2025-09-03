export const code_block = {
  method1: `
// Int enum pattern - Rất không an toàn và nên tránh!
public class Fruit {
    public static final int APPLE_FUJI = 0;
    public static final int APPLE_PIPPIN = 1;
    public static final int ORANGE_NAVEL = 2;
    public static final int ORANGE_TEMPLE = 3;
}
`,
  method2: `
// Enum type - An toàn, mạnh mẽ và dễ đọc
public enum Fruit {
    FUJI_APPLE, 
    PIPPIN_APPLE, 
    NAVEL_ORANGE, 
    TEMPLE_ORANGE;
}
`,
  method3: `
public enum Planet {
    MERCURY(3.302e+23, 2.439e6),
    VENUS(4.869e+24, 6.052e6),
    EARTH(5.975e+24, 6.378e6);

    private final double mass;   // in kilograms
    private final double radius; // in meters
    
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    public double surfaceGravity() {
        final double G = 6.67300E-11;
        return G * mass / (radius * radius);
    }
}
`,
};
