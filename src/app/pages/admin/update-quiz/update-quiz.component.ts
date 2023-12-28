import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private _snack:MatSnackBar,private _router:Router,private _quiz:QuizService,private _cat:CategoryService) { }

  qId = 0;
  quiz:any;
  categories:any;

  ngOnInit(): void {

   this.qId = this._route.snapshot.params.qid;
   this._quiz.getQuiz(this.qId).subscribe(
    (data:any)=>{
      this.quiz=data;
      console.log(this.quiz);
      
    },
    (error)=>{
      console.log(error);
    }
   );

   this._cat.categories().subscribe((data:any)=>{
    this.categories=data;
   },
   (error)=>{
    alert("error in loading categories");
   });
   
  }

  public updateData(){
    if(this.quiz.title.trim()=='' || this.quiz.title==null){
      this._snack.open('Title Required !!','',{
        duration:3000,
      }
      );
      return;
    }
    this._quiz.updateQuiz(this.quiz).subscribe((data:any)=>{
      Swal.fire("Updated !!",'succesfuly updated ','success').then((e)=>{
        this._router.navigate(['/admin/quizzes']);
      });
    },
    (error)=>{
       Swal.fire("Error",'error in updateing','error');
       console.log(error);
    });
  }

}
