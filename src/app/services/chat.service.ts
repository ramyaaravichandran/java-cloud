import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { messageObj } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  openedYet: boolean = false;
  chatVisible: boolean = false;
  username!: string;
  avatar!: string;
  data!: messageObj[];
  myMessages: messageObj[] = [];
  othersMessages: messageObj[] = [];

  private socket: any;

  constructor() {}

  openConnection() {
    this.socket = io('http://localhost:7000');
    this.socket.on('welcome', (data: any) => {
      this.username = data.username;
      this.avatar = data.avatar;
    });

    this.socket.on('chatMessageFromServer', (data: any) => {
      this.data = data;
      this.othersMessages.push(data);
    });
  }

  sendMessageToServer(msg: string) {
    this.socket.emit('chatMessageFromBrowser', {
      message: msg,
    });
    this.myMessages.push({
      message: msg,
      username: this.username,
      avatar: this.avatar,
    });
  }

  showChat() {
    if (!this.openedYet) {
      this.chatVisible = !this.chatVisible;
      this.openConnection();
    }
  }

  toggleChat() {
    if (!this.openedYet) {
      this.chatVisible = !this.chatVisible;
    }
    this.openedYet = false;
  }

  get giveMyMessages() {
    return this.myMessages;
  }

  get giveOthersMessages() {
    return this.othersMessages;
  }
}
