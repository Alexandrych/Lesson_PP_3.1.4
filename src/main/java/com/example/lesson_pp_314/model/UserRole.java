package com.example.lesson_pp_314.model;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Entity
@Table(name = "roles")
public class UserRole implements GrantedAuthority {

    @Id
    private long id;

    private String role;

    public UserRole() {
    }

    public UserRole(long id, String role) {
        this.id = id;
        this.role = role;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setUsername(String userName) {
        this.role = userName;
    }

    @Override
    public String getAuthority() {
        return getRole();
    }

    @Override
    public String toString() {
        return role.substring(5);
    }
}
