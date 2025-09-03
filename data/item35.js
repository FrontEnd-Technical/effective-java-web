export const code_block = {
  method1: `
// Antipattern: phụ thuộc vào thứ tự!
public enum Ensemble {
    SOLO,   DUET,   TRIO, QUARTET, QUINTET,
    SEXTET, SEPTET, OCTET, NONET,  DECTET;

    // Rất nguy hiểm!
    public int numberOfMusicians() { 
        return ordinal() + 1; 
    }
}
`,
  method2: `
// Mạnh mẽ và an toàn
public enum Ensemble {
    SOLO(1), DUET(2), TRIO(3), QUARTET(4), QUINTET(5),
    SEXTET(6), SEPTET(7), OCTET(8), NONET(9), DECTET(10);

    // Lưu dữ liệu trực tiếp vào một trường của thực thể
    private final int numberOfMusicians;

    Ensemble(int size) {
        this.numberOfMusicians = size;
    }

    public int numberOfMusicians() {
        return numberOfMusicians;
    }
}
`,
};
