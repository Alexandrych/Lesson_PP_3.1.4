package com.example.lesson_pp_314.dao;

import com.example.lesson_pp_314.model.UserRole;
import org.springframework.data.repository.CrudRepository;

public interface RoleDao extends CrudRepository<UserRole, Long> {
}
