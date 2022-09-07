package com.example.lesson_pp_314.service;

import com.example.lesson_pp_314.model.User;
import com.example.lesson_pp_314.model.UserRole;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

@Component
public interface UserService extends UserDetailsService {
    List<User> getUsers();
    Set<UserRole> getRoles();
    void addUser(User user);
    void updateUser(User user);
    void deleteUserById(long id);
    User getUserByID(long id);
    UserDetails loadUserByUsername(String username);
    PasswordEncoder passwordEncoder();
}
