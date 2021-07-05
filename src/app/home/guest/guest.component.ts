import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'],
})
export class GuestComponent implements OnInit {
  signUpForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userServe: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // console.log('from header', this.header.loginError);
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get loginError() {
    return this.userServe.loginError;
  }

  get l() {
    return this.signUpForm.controls;
  }

  signUp() {
    if (this.signUpForm.invalid) {
      return;
    }
    this.userServe.signUp(this.signUpForm.value).subscribe(
      () => {
        localStorage.setItem('isLogedIn', 'true');
        this.router.navigate(['home']);
      },
      () => {
        alert('error');
      }
    );
    this.submitted = true;
  }
}
