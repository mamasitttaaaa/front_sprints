import { observable, action } from 'mobx';
import { ChatJoinStore } from '../store/ChatJoinStore';
import { WebSocketSubject } from 'rxjs/webSocket';
import { ChatMessageStore, ChatMessage } from '../store/ChatMessageStore';
import { API_BASE_URL } from '../constants';

interface ChatMessageData {
  type: string;
  id?: number;
  sender?: string;
  text?: string;
}

export class ChatJoinService {
  @observable
  private chatJoinStore: ChatJoinStore;
  private chatMessageStore: ChatMessageStore;
  private socket$: WebSocketSubject<ChatMessageData>;

  constructor(chatJoinStore: ChatJoinStore, chatMessageStore: ChatMessageStore) {
    this.chatJoinStore = chatJoinStore;
    this.chatMessageStore = chatMessageStore;
    this.socket$ = new WebSocketSubject(API_BASE_URL);

    this.socket$.subscribe((message: ChatMessageData) => {
      if (message.type === 'chat') {
        if (message.id && message.sender && message.text) {
          this.handleChatMessage(message);
        }
      }
    });
  }

  @action
  private handleChatMessage(message: ChatMessageData) {
    this.chatMessageStore.addMessage(new ChatMessage(message.id!, message.sender!, message.text!));
  }

  joinChat(name: string, gender: string) {
    this.chatJoinStore.setUserInfo(name, gender);
    const joinMessage: ChatMessageData = { type: 'join' };
    this.socket$.next(joinMessage);

    // Send a welcome message to the chat
    this.socket$.next({ type: 'chat', id: 0, sender: 'System', text: 'Welcome to the chat!' });
  }

  sendMessage(message: string) {
    const { name } = this.chatJoinStore.userInfo;
    const chatMessage: ChatMessageData = { type: 'chat', sender: name, text: message };
    this.socket$.next(chatMessage);
  }

  disconnect() {
    this.socket$.complete();
  }
}