package com.exam.examportal.service;

import java.util.Set;

import com.exam.examportal.model.exam.Question;
import com.exam.examportal.model.exam.Quiz;

public interface QuestionService {
	
	public Question addQuestion(Question question);
	public Question updateQuestion(Question question);
	public Set<Question>getQuestion();
	public Question getQuestion(Long questionId);
	public Set<Question> getQuestionsofQuiz(Quiz quiz);
	 public void deleteQuestion(Long questionId);
	 public Question get(Long questionId);

	

}
