import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loginForm!: FormGroup;
  loginError: boolean = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: UserService,
    private router: Router,
    private chat: ChatService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get s() {
    return this.loginForm.controls;
  }

  get isLogedIn() {
    return this.auth.isLogedIn();
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.auth.login(this.loginForm.value).subscribe(
      () => {
        localStorage.setItem('isLogedIn', 'true');
        this.router.navigate(['home']);
      },
      () => {
        this.auth.loginError = true;
      }
    );
    this.submitted = true;
    this.loginForm.reset();
  }

  logout() {
    this.auth.logout().subscribe(
      () => {
        alert('logged out');
      },
      () => {
        localStorage.removeItem('isLogedIn');
        this.router.navigate(['guest']);
      }
    );
  }

  

  showChat() {
    this.chat.showChat();
  }
}
