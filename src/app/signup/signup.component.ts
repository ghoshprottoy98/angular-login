import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})

export class SignupComponent {
  signup!: FormGroup;
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit() : void {
    this.signup = new FormGroup({
      Fname: new FormControl(),
      Lname: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
    });
  }

  signupData(signup: FormGroup) {

    this.http.post<any>('http://localhost:3000/signup',this.signup.value).subscribe((req) => {
      alert('Registered Successfully');
      this.signup.reset;
      this.router.navigate(['login'])
    });
  }

  
}
