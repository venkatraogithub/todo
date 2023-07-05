import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username : string ='monal500'
  password : string =''
  messsage : string='Invalid credentials'
  inValidLogin : boolean =false

  //Router 
  //If any components needs to be used , declare it as constructor argument
  //below router component is being used , so declaring as a constructor argument
  constructor(private router : Router){

  }
  //whenever a parameter is passed to a constructor , that parameter is directly available as member variable.
  //in above example router is available as a variable directly.

  handleLogin(){
    console.log(this.username);
    console.log(this.password);

    if(this.username==='monal500' && this.password==='monal500'){
      this.inValidLogin=false
      //Redirect to welcome page
      this.router.navigate(['welcome',this.username])
    }else{
      this.inValidLogin=true;
    }
  }

}
