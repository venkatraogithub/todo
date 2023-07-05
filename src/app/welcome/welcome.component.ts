import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent{

  message : string ='Some welcome message'
  name : string = this.router.snapshot.params['name']

  //Activate route
  constructor(private router : ActivatedRoute){

  }
  
  welcome(){
    console.log(this.router.snapshot.params['name']);
  }



}
