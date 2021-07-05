import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  posts!: any[];
  profile!: any;

  constructor(private userServe: UserService) {}

  ngOnInit(): void {
    this.userServe.allPosts().subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (error) => {
        console.error('There was an error!', error.message);
      },
    });
    this.userServe.getProfile().subscribe({
      next: (data) => {
        this.profile = data;
        console.log(this.profile);
      },
      error: (error) => {
        console.error('There was an error!', error.message);
      },
    });
  }
}
