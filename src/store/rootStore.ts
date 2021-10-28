import { MobStore } from "./mobStore/mobStore";
import { ChatStore } from './chatStore/chatStore';
import { AuthStore } from './authStore/authStore';

class RootStore {
  mobStore: MobStore;
  chatStore: ChatStore;
  authStore: AuthStore;

  constructor() {
    this.mobStore = new MobStore();
    this.chatStore = new ChatStore();
    this.authStore = new AuthStore();
  }
}

export const rootStore = new RootStore();