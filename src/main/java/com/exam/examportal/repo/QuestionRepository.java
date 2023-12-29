package com.exam.examportal.repo;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.examportal.model.exam.Question;
import com.exam.examportal.model.exam.Quiz;

public interface QuestionRepository extends JpaRepository<Question, Long> {

	Set<Question> findByQuiz(Quiz quiz);

	

}
