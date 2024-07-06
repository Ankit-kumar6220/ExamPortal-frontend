import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

constructor(private userService:UserService,
  private _snackBar: MatSnackBar){}
  ngOnInit(): void {}


  public user={
    userName:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  }

  formSubmit(){
   console.log(this.user);
   if(this.user.userName==''|| this.user.userName==null)
   {
    //alert("User is Required")

    //"username","action(button)",{duration after this duration it dissapears}
    this._snackBar.open("Username is required !!","",{
      duration:2000,
//       verticalPosition:'top',
// horizontalPosition:'right'
    })
    return;
  }

  this.userService.addUser(this.user).subscribe(
    (data)=>{
      //success
      console.log(data);
      this._snackBar.open("Success ","",{
        duration:3000
      });
    },
    (error)=>{
      //error
      console.log(error);
      // alert('something went wrong');
      this._snackBar.open("something went wrong!!","",{
        duration:3000
      });
    }
  );
  }
}
