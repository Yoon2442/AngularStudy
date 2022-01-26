import { Injectable } from '@angular/core';

@Injectable() // providedIn:'root' 사용하면 에러 발생
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
