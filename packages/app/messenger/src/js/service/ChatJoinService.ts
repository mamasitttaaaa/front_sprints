import { observable } from 'mobx';
import { ChatJoinStore } from '../store/ChatJoinStore';

export class ChatJoinService {
  @observable
  private chatJoinStore: ChatJoinStore;

  constructor(chatJoinStore: ChatJoinStore) {
    this.chatJoinStore = chatJoinStore;
  }

  joinChat(name: string, gender: string) {
    this.chatJoinStore.setUserInfo(name, gender);
    // логика подключения к чату
  }
}