export const code_block = {
  method1: `
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

// Container không đồng nhất an toàn về kiểu
public class Favorites {
    // Key là một Class<?>, tức là một Class của một kiểu không xác định.
    // Value là Object, vì Map phải có một kiểu value chung.
    private Map<Class<?>, Object> favorites = new HashMap<>();

    public <T> void putFavorite(Class<T> type, T instance) {
        // Key là đối tượng Class, value là thực thể của kiểu đó.
        favorites.put(Objects.requireNonNull(type), instance);
    }

    public <T> T getFavorite(Class<T> type) {
        // Lấy ra value dưới dạng Object, sau đó dùng phương thức cast()
        // của Class để ép kiểu một cách an toàn.
        return type.cast(favorites.get(type));
    }
}
`,
  method2: `
Favorites f = new Favorites();

f.putFavorite(String.class, "Java");
f.putFavorite(Integer.class, 17);
f.putFavorite(Class.class, Favorites.class);

// Lấy ra mà không cần ép kiểu và hoàn toàn an toàn
String favoriteString = f.getFavorite(String.class);
int favoriteInteger = f.getFavorite(Integer.class);
Class<?> favoriteClass = f.getFavorite(Class.class);

System.out.printf("%s %d %s%n", favoriteString, favoriteInteger, favoriteClass.getName());
// Output: Java 17 com.example.Favorites
`,
};
