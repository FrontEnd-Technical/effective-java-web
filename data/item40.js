export const code_block = {
  method1: `
public class Bigram {
    private final char first;
    private final char second;

    public Bigram(char first, char second) {
        this.first  = first;
        this.second = second;
    }

    // LỖI! Cố gắng override equals nhưng lại sai kiểu tham số.
    // Đây là nạp chồng (overload), không phải ghi đè (override).
    public boolean equals(Bigram b) { 
        return b.first == first && b.second == second;
    }
    
    public int hashCode() {
        return 31 * first + second;
    }

    public static void main(String[] args) {
        Set<Bigram> s = new HashSet<>();
        for (int i = 0; i < 10; i++)
            for (char ch = 'a'; ch <= 'z'; ch++)
                s.add(new Bigram(ch, ch));
        
        // In ra 260 thay vì 26, vì HashSet dùng Object.equals()!
        System.out.println(s.size());
    }
}
`,
  method2: `
    @Override 
    public boolean equals(Bigram b) { // LỖI BIÊN DỊCH!
        // Trình biên dịch sẽ báo lỗi: 
        // "Method does not override method from its superclass"
        return b.first == first && b.second == second;
    }
`,
  method3: `
    @Override 
    public boolean equals(Object o) { // Sửa lại cho đúng
        if (!(o instanceof Bigram))
            return false;
        Bigram b = (Bigram) o;
        return b.first == first && b.second == second;
    }
`,
};
