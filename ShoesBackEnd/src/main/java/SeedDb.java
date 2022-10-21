package com.example.Getapi2;

import com.example.Getapi2.model.User;
import com.example.Getapi2.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class SeedDb implements CommandLineRunner {
    @Autowired
    UserRepo userRepo;

    @Override
    public void run(String... args) throws Exception {
        loadUserData();
    }

    private void loadUserData() {
        if(userRepo.count() == 0) {
            User user1 = new User("cesar", "user", "pass", "ROLE_USER");
            User user2 = new User("Robert", "admin", "pass", "ROLE_ADMIN");
            userRepo.save(user1);
            userRepo.save(user2);
            System.out.println("Seeded User Table!");
        } else {
            System.out.println("Table was already seeded!");
        }
    }
}