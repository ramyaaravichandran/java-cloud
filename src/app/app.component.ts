import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Posto-book';
  constructor(private userAuth: UserService) {}

  ngOnInit() {
    this.userAuth.isLogedInCheck().subscribe(
      (isIt: boolean) => {
        localStorage.setItem('isLogedIn', isIt.toString());
      },
      () => {
        localStorage.setItem('isLogedIn', false.toString());
      }
    );
  }
}
