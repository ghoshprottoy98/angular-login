import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  login!: FormGroup;

  constructor(private http: HttpClient,private router: Router ) {}
  ngOnInit() : void {
     this.login = new FormGroup({
      fname: new FormControl(),
      fpassword: new FormControl(),
     });

  }


  logindata(login: FormGroup) {
    this.http.get<any>(' http://localhost:3000/signup').subscribe((res)=>{
     const user= res.find((a: any) => {
      return (

        a.Fname === this.login.value.fname &&
        a.password === this.login.value.fpassword
      );
     });

     if(user){
      alert('You have logged in successfully');
      this.router.navigate(['home'])
     }

     else {
      alert('User Not Found')
     }

    });

   }
  
  













}
