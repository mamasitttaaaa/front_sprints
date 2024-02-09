import { observable, action } from 'mobx';

export class ChatJoinStore {
  @observable
  userInfo: { name: string; gender: string } = { name: '', gender: '' };

  @action
  setUserInfo(name: string, gender: string) {
    this.userInfo = { name, gender };
  }
}