export const code_block = {
  method1: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileReaderWrapper implements AutoCloseable {
    private final BufferedReader reader;

    public FileReaderWrapper(String path) throws IOException {
        this.reader = new BufferedReader(new FileReader(path));
    }

    public String readLine() throws IOException {
        return reader.readLine();
    }

    @Override
    public void close() throws IOException {
        System.out.println("Closing the reader now!");
        reader.close();
    }
}`,
  method2: `public class Main {
    public static void main(String[] args) {
        // Sử dụng try-with-resources
        try (FileReaderWrapper wrapper = new FileReaderWrapper("myFile.txt")) {
            System.out.println(wrapper.readLine());
            // Ngay khi khối try này kết thúc (dù thành công hay có lỗi),
            // phương thức close() sẽ được tự động gọi.
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`,
  method3: `import java.lang.ref.Cleaner;

public class MyResource implements AutoCloseable {
    private static final Cleaner cleaner = Cleaner.create();

    // Lớp chứa trạng thái cần dọn dẹp, không giữ tham chiếu đến MyResource
    private static class State implements Runnable {
        // ... native resource handle
        State(/*...*/) { /* ... */ }

        @Override
        public void run() {
            // Dọn dẹp tài nguyên native ở đây
            System.out.println("Cleaner is cleaning up the resource!");
        }
    }

    private final State state;
    private final Cleaner.Cleanable cleanable;

    public MyResource() {
        this.state = new State(/*...*/);
        this.cleanable = cleaner.register(this, state);
    }

    @Override
    public void close() {
        // Dọn dẹp tường minh và kịp thời
        System.out.println("Closing resource explicitly.");
        cleanable.clean(); // Hủy đăng ký và chạy clean action ngay lập tức
    }
}`,
};
