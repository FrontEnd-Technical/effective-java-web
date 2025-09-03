export const code_block = {
  method1: `
import java.util.stream.IntStream;

// Ví dụ này có thể không in ra 250000 khi chạy song song!
int[] count = {0};
IntStream.range(0, 1_000_000)
         .parallel() // Chạy song song
         .filter(i -> i % 4 == 0)
         .forEach(i -> count[0]++); // Tác dụng phụ! Nhiều luồng cùng sửa đổi count[0]
`,
  method2: `
import java.math.BigInteger;
import java.util.stream.LongStream;

// Tính số nguyên tố là một tác vụ tốn nhiều CPU
static long pi(long n) {
    return LongStream.rangeClosed(2, n)
                     .parallel() // Song song hóa ở đây rất hiệu quả
                     .filter(i -> BigInteger.valueOf(i).isProbablePrime(50))
                     .count();
}
`,
};
