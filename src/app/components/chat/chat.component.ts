import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  inputMessage = new FormControl('');

  constructor(private auth: UserService, private chat: ChatService) {}

  get chatVisibility() {
    return this.chat.chatVisible;
  }

  get myMessages() {
    return this.chat.giveMyMessages;
  }

  get othersMessages() {
    return this.chat.giveOthersMessages;
  }

  sendMessage() {
    this.chat.sendMessageToServer(this.inputMessage.value);
    this.inputMessage.reset();
  }

  toggleChat() {
    this.chat.toggleChat();
  }
  ngOnInit(): void {}
}
