export const code_block = {
  method1: `
package com.mycompany.project.service; // package

import com.mycompany.project.model.User; // class
import java.util.List; // interface
import java.util.ArrayList;

// Giả lập các lớp cần thiết
enum Status { ACTIVE, INACTIVE }
class User {}

public class UserService { // class

    public static final int MAX_USERS = 100; // constant

    private List<User> activeUsers = new ArrayList<>(); // variable

    // method, enum parameter
    public List<User> findUsersByStatus(Status status) {
        // ...
        return null;
    }

    // method, type parameter
    public <T> T getMetadata(String key, Class<T> type) {
        // ...
        return null;
    }
}
`,
};
