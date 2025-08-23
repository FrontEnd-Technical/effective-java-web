export const code_block = {
  method1: `// Lớp tiện ích StringUtils không thể được khởi tạo.
public class StringUtils {

    // 1. Constructor là private để ngăn chặn việc khởi tạo.
    private StringUtils() {
        // 2. Ném ra lỗi để ngăn chặn cả việc gọi từ bên trong hoặc qua reflection.
        throw new AssertionError("This utility class should not be instantiated.");
    }

    // Tất cả các phương thức đều là static.
    public static boolean isBlank(String str) {
        return str == null || str.trim().isEmpty();
    }

    public static String capitalize(String str) {
        if (isBlank(str)) {
            return str;
        }
        return Character.toUpperCase(str.charAt(0)) + str.substring(1);
    }
}`,
  method2: `public final class AppConstants {
    
    private AppConstants() {
        throw new AssertionError("Constants class should not be instantiated.");
    }

    public static final String DEFAULT_ENCODING = "UTF-8";
    public static final int DEFAULT_TIMEOUT_MS = 5000;
    public static final String API_VERSION = "v2.1";
}`,
};
