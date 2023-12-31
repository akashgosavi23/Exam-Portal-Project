# Exam-Portal-Project
An exam portal project typically involves the development of a web-based platform that facilitates the creation, management, and administration of exams or quizzes.


# Contents
-  About the Software	
-  Software Design	
-  Software Diagrams	
-  Flow of Control	
-  Entity Relationship Diagram	
-  Database Design	
-  Relationships Among Table within Database	
-  Demonstration Images of the Software
-  Admin Profile	
-  Registration Page	
-  Login Page	
-  Welcome Page of Admin-Side	
-  Viewing Your Profile Details	
-  Adding a category	
-  Viewing Created category
-  Deleting a Created category	
-  Adding a Quiz	
-  Adding Questions to a Quiz
-  deleted Question to a Quiz
-  Viewing Created Quizzes	
-  Updating Quiz Information	
-  Student Profile	
-  View All Quizzes	
-  View Quizzes of a Particular category
-  Starting a Quiz	
-  Viewing the Result for a Quiz

 
# About the Software

Exam portal is a software that provides professors a user-friendly platform to host quizzes for all of their courses while ensuring that these quizzes are answered by students in an ethical manner.

There are 2 types of profiles that are available in Exam Portal

- Admin – to be used by the Professor
- Student

Users working on the Admin Profile have the following functionalities available to them:

- Create Category
- Modify Category
- Delete Category
- Create Quizzes
- Modify Quizzes
- Delete Quizzes
- Enable Tab Switch Prevention
- Create Questions
- View Student-Wise Test Results

Users working on the Student Profile have the following functionalities available to them:

- Attempt Quizzes
- Review Quizzes

- # Software Design

This software was developed using

- Angular – Frontend
- SpringBoot – Backend
- MySQL – Database Management

  
## Flow of Control
![](flowchart.png)

# Database Design(MySql Workbench)

Tables in Database


![](databasetable.png)


Table-role


![](role-index.png)


Table-user

![](user.png)


Table-user_role


![](user_role.png)


Table-category


![](category-index-table.png)


Table-questions

![](question-index-table.png)


Table-quiz

![](quiz-index.png)






## Relationships Among Table within Database

![](relationship_table-database.png.png)

# Demonstration Images of the Software

## Admin Profile

### Registration Page
- Users: All who are not registered with Exam Portal
- Users are required to enter a valid:
  - Username
  - Password
  - First Name
  - Last Name
  - Email
  - Phone Number
- All entries are validated and appropriate errors will be given
- Accounts are authenticated using JWT Authentication
- ![](register.png)
- ![](register1.png)


### Login Page
- Users: All who are registered with Exam Portal
- Users are required to enter a valid:
  - Username
  - Password
  - First Name
  - Last Name
  - Email
  - Phone Number
- All entries are validated and appropriate errors will be given
- Accounts are authenticated using JWT Authentication

![](login.png)


### Welcome Page of Admin-Side
- Users: Professors or anyone who has logged in with an Admin Profile

![](welcome.jpeg)


### Viewing Your Profile Details
- Users: Professors or anyone who has logged in with an Admin Profile
- How to Get Here: Click on the ‘*Profile*’ button from the menu on the left

![](profile.png)


### Adding a Category
- Users: Professors or anyone who has logged in with an Admin Profile
- How to Get Here: 
  - Click on the ‘*Add Category*’ button from the menu on the left
  - Click on ‘*Add New Category*’ below the created subjects within the ‘*category*’ sub-menu
- What you have to enter:
  - Name of the category
  - Description of the category

![](add-category.png)

![](add-category-s.png)


### Viewing Created Category
- Users: Professors or anyone who has logged in with an Admin Profile
- How to Get Here: Click on the ‘*Category*’ button from the menu on the left


![](categorys.png)





### Adding a Quiz
- Users: Professors or anyone who has logged in with an Admin Profile
- How to Get Here: Click on the ‘*Add Quiz*’ button from the menu on the left
- What you have to enter:
  - Name of the Quiz
  - Description of the Quiz
  - Maximum Marks for the Quiz
  - Number of Questions to be asked
  - Subject that the quiz is part of
  - ‘Publish Status’ toggle will control whether the student is able to view the quiz on their profile

![](add-quiz.png)
![](add-quiz1.png)
![](add-quiz2.png)


### Adding Questions to a Quiz
- Users: Professors or anyone who has logged in with an Admin Profile
- How to Get Here: Click on the ‘Questions’ button from the row of buttons below the name of a created quiz within the Quizzes Page
- How to Create Your First Question:
  - After clicking on the ‘Questions’ button, click on ‘Add Question’ Button
  - Enter your question in the text field given
    - Questions can be formatted with different font styles, equations, colors, hyperlinks or images with the use of the ribbon of formatting options on the top border of the text filed
  - Enter the four options you would like the student to choose from
  - Select the correct answer from the dropdown list
    - The correct answer must be one of the options
  - Click on ‘*Add*’ button at the bottom of the page
  - You have successfully created a question
  - If you would like to start afresh, you can clear the question and associated option with the ‘*Clear*’ button at the bottom of the page before clicking on the ‘Add’ button
  - Repeat this process to add further questions
- Questions can be updated after adding by clicking on the ‘*Update*’ button within the ‘*Questions*’ *Page*

![](add-q.png)
![](add-q1.png)
![](add-q2.png)
![](add-q3.png)
![](add-q4.png)


### Deleted question to a quiz
- Users: Professors or anyone who has logged in with an Admin Profile
- How to Get Here: Click on the ‘Questions’ button from the row of buttons below the name of a created quiz within the Quizzes Page
- How to delete Your  Question:
- After clicking on the ‘Questions’ button, click on ‘delete’ Button.
- A confirmation pop-up will be displayed to Delete the question.
- Click on the “*delete*” button to delete question. Else, click on the “*cancel*” button
- ![](d1.png)
- ![](d2.png)
- ![](d3.png)
  - 


### Viewing Created Quizzes
- Users: Professors or anyone who has logged in with an Admin Profile
- How to Get Here: Click on the ‘*Quizzes*’ button from the menu on the left

![](u3.png)


### Updating Quiz Information
- Users: Professors or anyone who has logged in with an Admin Profile
- How to Get Here: Click on the ‘*Update*’ button from the row of buttons below the name of a created quiz within the Quizzes Page

![](u1.png)
![](u2.png)




### Viewing the Result for a Quiz as a Professor
- Users: Professors or anyone who has logged in with an Admin Profile
- How to Get Here: From the “Quizzes” page, click on the “*View Result*” button below the name of the quiz you would like to see the results
- The results will be shown student-wise in a tabular manner

![](r.png)


## Student Profile

### Registration Page
- Users: All who are not registered with Exam Portal
- Users are required to enter a valid:
  - Username
  - Password
  - First Name
  - Last Name
  - Email
  - Phone Number
- All entries are validated and appropriate errors will be given
- Accounts are authenticated using JWT Authentication
- ![](register.png)
- ![](register1.png)


### Login Page
- Users: All who are registered with Exam Portal
- Users are required to enter a valid:
  - Username
  - Password
  - First Name
  - Last Name
  - Email
  - Phone Number
- All entries are validated and appropriate errors will be given
- Accounts are authenticated using JWT Authentication

![](login.png)



### View Quizzes of a Particular Category
- Users: Students
- How to Get Here: Click on the subject name button from the menu on the left. For example, if you would like to view the quizzes available in the subject, “*html*”, click on the button, “*html*”

![](us1.png)


### Starting a Quiz
- Users: Students
- How to Get Here: Click on the “*Start*” button below the quiz name
- Instructions for attempting the quiz will be shown on starting the quiz
- To start answering questions, click on the “*Start Quiz*” button from the instructions page

![](us2.png)

- A confirmation pop-up will be displayed to start the quiz.
- Click on the “*Start*” button to start. Else, click on the “*No*” button

![](us3.png)
![](us4.png)

- It is to be noted that the quiz will Auto Submit when the timer on the right side of the screen reaches 0


![](us5.png)

### Print result
![](p.png)





