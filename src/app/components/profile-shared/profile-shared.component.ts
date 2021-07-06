import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-shared',
  templateUrl: './profile-shared.component.html',
  styleUrls: ['./profile-shared.component.css'],
})
export class ProfileSharedComponent implements OnInit {
  constructor(private route: ActivatedRoute, private userServe: UserService) {}
  username!: string | null;
  user!: any;

  ngOnInit() {
    this.username = this.route.snapshot?.params?.username;
    this.userServe.getSharedUser(this.username).subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (e) => {
        alert('User profile not found');
      },
    });
  }

  follow() {
    this.userServe.addFollow(this.user.profileUsername).subscribe({
      next: (res) => {
        alert(res.success);
        window.location.reload()
      },
      error: (e) => {
        alert(`You can't follow ${this.user.profileUsername}`);
      },
    });
  }
  unFollow() {
    this.userServe.removeFollow(this.user.profileUsername).subscribe({
      next: (res) => {
        alert(res.success);
        window.location.reload()
      },
      error: (e) => {
        alert(`You can't un follow ${this.user.profileUsername}`);
      },
    });
  }
}
