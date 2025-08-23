export const code_block = {
  method1: `// Cách làm cũ, phức tạp và không an toàn
static void copy(String src, String dst) throws IOException {
    InputStream in = new FileInputStream(src);
    try {
        OutputStream out = new FileOutputStream(dst);
        try {
            byte[] buf = new byte[BUFFER_SIZE];
            int n;
            while ((n = in.read(buf)) >= 0) {
                out.write(buf, 0, n);
            }
        } finally {
            out.close(); // Lỗi ở đây có thể che mất lỗi ở khối try
        }
    } finally {
        in.close(); // Lỗi ở đây có thể che mất lỗi ở khối try đầu tiên
    }
}`,
  method2: `// Ngắn gọn, dễ đọc và an toàn!
static void copy(String src, String dst) throws IOException {
    try (InputStream in = new FileInputStream(src);
         OutputStream out = new FileOutputStream(dst)) { // Khai báo tài nguyên ở đây
        
        byte[] buf = new byte[BUFFER_SIZE];
        int n;
        while ((n = in.read(buf)) >= 0) {
            out.write(buf, 0, n);
        }
    } // in.close() và out.close() được tự động gọi ở đây
}`,
  method3: `try (Connection conn = dataSource.getConnection();
     PreparedStatement ps = conn.prepareStatement(sql);
     ResultSet rs = ps.executeQuery()) {

    while (rs.next()) {
        // xử lý kết quả
    }
} catch (SQLException e) {
    // xử lý lỗi
}`,
};
