package com.exam.examportal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.examportal.model.exam.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
