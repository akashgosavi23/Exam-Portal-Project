import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

qId:any;
qTitle:any;
questions:any = [];
  constructor(private _route:ActivatedRoute,private _question:QuestionService) { }

  ngOnInit(): void {
    this.qId=this._route.snapshot.params.qid;
    this.qTitle=this._route.snapshot.params.title;
    this._question.getQuestionsOfQuiz(this.qId).subscribe((data:any)=>{
      console.log(data);
      this.questions=data;
    },
    (error)=>{
      console.log(error);
    }
    )
  }

  deleteQuestion(qid:any){
    Swal.fire({
      icon:'info',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title:'Are you sure,want to delete this Question'
    }).then((result)=>{
      if(result.isConfirmed){
        this._question.deleteQuestion(qid).subscribe(
          (data:any)=>{
            this.questions=this.questions.filter((q:any)=> q.quesId != qid);
            Swal.fire("Deleted","Question  sucesfully deleted",'success');
          },
          (error:any)=>{
            Swal.fire("Error","Error in deleting question",'error');
          }
        )
      }
    })

  }

}
