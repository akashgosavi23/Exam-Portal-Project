import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  qid:any;
  quiz:any;
  
  // Example structure of questions array
questions:any;

  marksGot = 0;
  correctAnswer = 0;
  attempted = 0;
  isSubmit = false;
  timer:any;
  

  
  




  constructor(private locationSt:LocationStrategy,private _route:ActivatedRoute,private _question:QuestionService,private _quiz:QuizService) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.qid=this._route.snapshot.params.qid;
    console.log(this.qid);
    this.loadQuestions();
  }
  loadQuestions(){
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe(
      (data:any)=>{
        this.questions=data;
        this.timer=this.questions.length*0.5*60;

       
        console.log(this.questions);
        this.startTimer();
      },
      (error:any)=>{
        console.log(error
          );
          Swal.fire("Error","Error in loading question of quizz",'error');
      }
    )
  }

  preventBackButton(){
    history.pushState(null,'null',location.href);
    this.locationSt.onPopState(()=>{
      history.pushState(null,'null',location.href);
    });
  }

  submitQuiz(){
    Swal.fire({
      title: "Do you want to Submit quiz?",
      
      showCancelButton: true,
      confirmButtonText: "Submit",
      icon:'info',
    }).then((e:any)=>{
      if(e.isConfirmed){
        this.evalQuiz();
      }
      
    });

  }
  startTimer(){
    let t=window.setInterval(()=>{
      if(this.timer<=0){
        this.evalQuiz();
        clearInterval(t);
      }else{
        this.timer--;
      }

    },1000)
  }
  getFormattedTime(){
    let mm=Math.floor(this.timer/60);
    let ss=this.timer-mm*60;
    return `${mm} min: ${ss} sec`;

  }
  evalQuiz(){
    
    // this.questions.forEach((q:any)=>{
    //   if(q.givenAnswer == q.answer){
    //     this.correctAnswer++;
    //     let marksSingle = this.questions[0].quiz.maxMarks / this.questions.length;
    //     this.marksGot += marksSingle;
    //   }

    //   if(q.givenAnswer.trim()!=''){
    //     this.attempted++;
    //   }
    // })
    this._question.evalQuiz(this.questions).subscribe(
      (data:any)=>{

      console.log(data);
      this.marksGot= parseFloat(Number(data.marksGot).toFixed(2));
      this.correctAnswer=data.correctAnswer;
      this.attempted=data.attempted;
      this.isSubmit =true;
    },
    (error:any)=>{
      console.log(error)
    })

  

  }

  printPage(){

    window.print();
  }
  

}
