export const code_block = {
  method1: `
import java.util.concurrent.*;

// Giả lập các lớp cần thiết
class Result {}
class MyProcess {
    public Result computeResult() { return new Result(); }
    public void process(Result result) {}
}

public class ExecutorExample {
    public void run() {
        MyProcess myProcess = new MyProcess();

        // 1. Tạo một ExecutorService (ví dụ: một thread pool với 4 luồng)
        ExecutorService exec = Executors.newFixedThreadPool(4);

        // 2. Gửi một tác vụ (Callable) và nhận về một Future
        Future<Result> future = exec.submit(() -> {
            // ... thực hiện công việc nặng ở đây
            return myProcess.computeResult(); 
        });

        // 3. Làm việc khác trong khi tác vụ đang chạy...
        System.out.println("Doing other work...");

        // 4. Lấy kết quả (lời gọi này sẽ block cho đến khi tác vụ hoàn thành)
        try {
            Result result = future.get();
            myProcess.process(result);
        } catch (ExecutionException | InterruptedException e) {
            // Xử lý lỗi
            Thread.currentThread().interrupt();
        }

        // 5. Đóng ExecutorService khi không cần nữa
        exec.shutdown();
    }
}
`,
};
