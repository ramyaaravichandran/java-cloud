import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { createPost } from 'src/app/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  [x: string]: any;
  createPostForm!: FormGroup;
  submitted = false;
  createpost!: createPost;
  constructor(
    private formBuilder: FormBuilder,
    private userServe: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }
  get c() {
    return this.createPostForm.controls;
  }

  createPost() {
    if (this.createPostForm.invalid) {
      return;
    }
    console.log(this.createPostForm.value);
    this.userServe.createPost(this.createPostForm.value).subscribe({
      next: (data) => {
        alert('Post created');
        this.createPostForm.reset();
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
    // this.router.navigate(['dashboard']);
    this.submitted = true;
  }
}
