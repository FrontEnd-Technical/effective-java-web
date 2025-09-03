export const code_block = {
  method1: `
// 1. Interface định nghĩa hợp đồng
public interface SoundMaker {
    void makeSound();
    void increaseVolume();
    int getVolume();
}

// 2. Abstract class cung cấp một bộ khung triển khai
public abstract class AbstractSoundMaker implements SoundMaker {
    protected int volume = 5; // Chia sẻ trạng thái

    // Cung cấp triển khai mặc định cho một phương thức
    @Override
    public void increaseVolume() {
        if (volume < 10) {
            volume++;
        }
    }

    @Override
    public int getVolume(){
        return volume;
    }

    // Buộc lớp con phải triển khai phương thức cốt lõi
    @Override
    public abstract void makeSound();
}

// 3. Lớp cụ thể chỉ cần triển khai phần còn lại
public class Dog extends AbstractSoundMaker {
    @Override
    public void makeSound() {
        System.out.println("Gâu gâu at volume " + getVolume());
    }
}
`,
};
