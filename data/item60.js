export const code_block = {
  method1: `
// Vấn đề: Kết quả không chính xác!
double funds = 1.00;
int itemsBought = 0;
for (double price = 0.10; funds >= price; price += 0.10) {
    funds -= price;
    itemsBought++;
}
System.out.println(itemsBought + " items bought.");
System.out.println("Change: $" + funds);

// Kết quả in ra:
// 3 items bought.
// Change: $0.3999999999999999
`,
  method2: `
import java.math.BigDecimal;

// Chính xác và an toàn
final BigDecimal TEN_CENTS = new BigDecimal("0.10");

BigDecimal funds = new BigDecimal("1.00");
int itemsBought = 0;
for (BigDecimal price = TEN_CENTS; 
     funds.compareTo(price) >= 0; 
     price = price.add(TEN_CENTS)) {
    funds = funds.subtract(price);
    itemsBought++;
}
System.out.println(itemsBought + " items bought.");
System.out.println("Change: $" + funds);

// Kết quả in ra:
// 4 items bought.
// Change: $0.00
`,
};
