export const code_block = {
  method1: `
import com.fasterxml.jackson.databind.ObjectMapper;

public class User {
    public String name;
    public int age;
}

// Chuyển đổi đối tượng thành chuỗi JSON
ObjectMapper mapper = new ObjectMapper();
User user = new User();
user.name = "Gemini";
user.age = 1;

String jsonString = mapper.writeValueAsString(user); 
// Kết quả: {"name":"Gemini","age":1}
`,
};
