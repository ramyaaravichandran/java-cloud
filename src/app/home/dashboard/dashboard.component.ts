import { Component, OnInit } from '@angular/core';
import { createPost } from 'src/app/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  feeds!: any[]
  constructor(private user: UserService) {
  }
  
  get isFeedsExists(){
    return this.feeds ? !!this.feeds.length : false
  } 
  ngOnInit(): void {
    this.user.getFeeds().subscribe({
      next: (res)=> {
        this.feeds = res;
      },
      error: ()=> {
        alert("Feeds fetching failed")
      }
    })
  }

}
