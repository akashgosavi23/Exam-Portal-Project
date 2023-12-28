import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={

    username:'',
    password:'',
  };



  constructor(private snack:MatSnackBar,private login:LoginService,private routr:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("login btn clicked");

    if(this.loginData.username.trim()=='' || this.loginData.username==null){

      this.snack.open('username requird !!','',
      {
        duration:3000,
      });
      return;


    }

    if(this.loginData.password.trim()=='' || this.loginData.password==null){

      this.snack.open('password requird !!','',
      {
        duration:3000,
      });
      return;


    }

    //request ton server to generate token
    this.login.generateToken(this.loginData).subscribe(

      (data:any)=>{
        console.log("success")
        console.log(data);

        //login
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe(

          (user:any)=>{
            this.login.setUser(user);
            console.log(user);
            //redirect ...admin:admin dashboard
            //redirect  normal:normal dashboard
            if(this.login.getUserRole()=='admin')
            {
              // window.location.href='/admin';
              this.routr.navigate(['admin']);
              this.login.loginStatusSubject.next(true);

            }else if(this.login.getUserRole()=='normal')
            {
              // window.location.href='/user-dashboard';
              this.routr.navigate(['user-dashboard/0']);
              this.login.loginStatusSubject.next(true)
              

            }else{
              this.login.logOut();
              this.snack.open("INVALID DETAILS!!Try again",'',{
                duration:3000,
              })
            }

          
            
            
          }
        );
      },

      (error)=>{
        console.log("Error !");
        console.log(error);
        this.snack.open("Invalid Details !! Try again",'',{
          duration:3000,
        });
      

      }
    );

  }

}
