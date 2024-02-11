import { observable, action, makeObservable } from 'mobx';

export class ChatMessage {
  id: number;
  sender: string;
  text: string;

  constructor(id: number, sender: string, text: string) {
    this.id = id;
    this.sender = sender;
    this.text = text;
  }
}

export class ChatMessageStore {
  messages: ChatMessage[] = [];

  constructor() {
    makeObservable(this, {
      messages: observable,
      addMessage: action,
    });
  }

  addMessage(message: ChatMessage) {
    this.messages.push(message);
  }
}