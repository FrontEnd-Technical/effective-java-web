export const code_block = {
  method1: `public class ClassicSingleton {
    private static final ClassicSingleton INSTANCE = new ClassicSingleton();

    private ClassicSingleton() {
        // Ngăn việc khởi tạo từ bên ngoài
    }

    public static ClassicSingleton getInstance() {
        return INSTANCE;
    }
}`,
  method2: `public enum EnumSingleton {
    INSTANCE; // Đây chính là thực thể duy nhất

    public void doSomething() {
        System.out.println("Doing something...");
    }
}`,
  method3: `import com.fasterxml.jackson.databind.ObjectMapper;

// Sử dụng Enum Singleton để cung cấp một ObjectMapper dùng chung, an toàn
public enum JsonMapper {
    INSTANCE;

    private final ObjectMapper mapper = new ObjectMapper();

    public ObjectMapper getMapper() {
        return mapper;
    }
}

// Cách dùng trong code:
// String json = JsonMapper.INSTANCE.getMapper().writeValueAsString(myObject);`,
  method4: `import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public ObjectMapper objectMapper() {
        // Spring sẽ gọi phương thức này MỘT LẦN DUY NHẤT
        // và quản lý đối tượng ObjectMapper này như một singleton.
        return new ObjectMapper();
    }
}`,
};
