package com.example.Getapi2.service;

import com.example.Getapi2.model.User;
import com.example.Getapi2.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepo userRepo;

    PasswordEncoder passwordEncoder;

    // Returns all users
    @Override
    public List<User> getAllUsers() {
        return this.userRepo.findAll();
    }

    // returns a user by Id
    @Override
    public User getUserById(int userId) {
        Optional<User> list = this.userRepo.findById(userId);
        User user = null;
        if(list.isPresent()) {
            user = list.get();
        } else {
            throw new RuntimeException("Task not found for id: " + userId);
        }

        return user;
    }

    @Override
    public User addUser(User user) {
        String encodedPassword = this.passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return this.userRepo.save(user);
    }

    @Override
    public User updateUser(User user) {
        return this.userRepo.save(user);
    }

    @Override
    public String deleteUser(int userId) {
        this.userRepo.deleteById(userId);
        return "User deleted!";
    }
}