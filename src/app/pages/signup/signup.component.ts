import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import  swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar) { }

public user = {
  username:'',
  password:'',
  firstName:'',
  lastname:'',
  email:'',
  phone:'',
};

  ngOnInit(): void {};

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null)
    {
      this.snack.open("Username is Required !!",'',{
        duration:3000,
        verticalPosition:'top',
      })
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data:any) => {
        console.log(data);
        swal.fire('Successfuly Done !!','user is registred.....','success');

      },
      (error) =>{
        console.log(error);
        this.snack.open('somting went wrong !!','',{
          duration:3000,
        })

      }
      
    );
  }

}
