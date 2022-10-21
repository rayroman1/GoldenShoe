package com.example.Getapi2.service;

import com.example.Getapi2.model.User;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();
    User getUserById(int userId);
    User addUser(User user);
    User updateUser(User user);
    String deleteUser(int User);
}