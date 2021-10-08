import { MobStore } from "./mobStore/mobStore";
import { ChatStore } from './chatStore/chatStore';

class RootStore {
  mobStore: MobStore;
  chatStore: ChatStore;

  constructor() {
    this.mobStore = new MobStore();
    this.chatStore = new ChatStore();
  }
}

export const rootStore = new RootStore();