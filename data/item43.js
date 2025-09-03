export const code_block = {
  method1: `
// Dùng lambda - đã tốt, nhưng có thể tốt hơn
map.merge(key, 1, (count, incr) -> count + incr);
`,
  method2: `
// Dùng method reference - ngắn gọn và rõ ràng nhất
map.merge(key, 1, Integer::sum);
`,
};
