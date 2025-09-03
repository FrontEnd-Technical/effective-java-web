export const code_block = {
  method1: `
// Bit field - Lỗi thời, khó đọc và không an toàn
public class Text {
    public static final int STYLE_BOLD          = 1 << 0; // 1
    public static final int STYLE_ITALIC        = 1 << 1; // 2
    public static final int STYLE_UNDERLINE     = 1 << 2; // 4
    public static final int STYLE_STRIKETHROUGH = 1 << 3; // 8

    // text.applyStyles(STYLE_BOLD | STYLE_ITALIC);
    public void applyStyles(int styles) { 
        // ...
    }
}
`,
  method2: `
import java.util.EnumSet;
import java.util.Set;

// Sử dụng enum và EnumSet - An toàn, rõ ràng và mạnh mẽ
public class Text {
    public enum Style { BOLD, ITALIC, UNDERLINE, STRIKETHROUGH }

    // text.applyStyles(EnumSet.of(Style.BOLD, Style.ITALIC));
    public void applyStyles(Set<Style> styles) { 
        // ...
    }
}
`,
  method3: `
public static void main(String[] args) {
    Text text = new Text();
    
    // Tạo một EnumSet và áp dụng
    Set<Text.Style> styles = EnumSet.of(Text.Style.BOLD, Text.Style.UNDERLINE);
    text.applyStyles(styles);
}
`,
};
