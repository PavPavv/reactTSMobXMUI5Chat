import { makeAutoObservable } from "mobx";

import { testMessages } from "../mobStore/testData";

export type MessageProperty = number | string | boolean | Date;

export interface Message {
  id: number;
  roomId: string;
  channelId: string;
  body: string;
  ts: Date;
  isOut: boolean;
  isUnread: boolean;
};

export interface ChatStoreI {
  messages: Message[];
  selectedChat: string;
  isTestShown: boolean;
  sendMessage: (msg: Message) => void;
  latestRoomSpeaker: (roomName: string) => string;
  latestMessageFromChannel: (roomName: string) => string;
  latestMessageTime: (roomName: string) => Date;
  unreadCount: (roomName: string) => number;
}

//  store helper functions
type MsgSortType = 'ts' | 'body' | 'isOut' | 'roomId';

const getLastMsgProperty = (messages: Message[], room: string, property: MsgSortType): MessageProperty => {
  const test =  messages.filter((message) => message.channelId === room).sort((a, b) => b.ts.getTime() - a.ts.getTime())[0];
  return test[property];
};

const getLatestRoomSpeaker = (messages: Message[], channelName: string): string => {
  const lastIncomingSpeaker =  getLastMsgProperty(messages, channelName, 'roomId');
  const isOutcoming = getLastMsgProperty(messages, channelName, 'isOut');
                      
  return isOutcoming ? 'you' : lastIncomingSpeaker as string;
};

const getLatestMessageFromChannel = (messages: Message[], channelName: string): string => {
  return getLastMsgProperty(messages, channelName, 'body') as string;
};

const getLatestMessageTime = (messages: Message[], channelName: string): Date => {
  return getLastMsgProperty(messages, channelName, 'ts') as Date;;
};

const getUnreadCount = (messages: Message[], channelName: string): number => {
  return messages
    .filter((message) => message.channelId === channelName)
    .filter((message) => message.isUnread === true)
    .length
};

const setUnreadCountToZero = (messages: Message[], channelName: string): void => {
  messages.filter((message: Message) => message.channelId === channelName)
          .forEach((filteredMsg: Message) => filteredMsg.isUnread = false);
};

//  chat store class
export class ChatStore implements ChatStoreI {
  messages: Message[] = testMessages;
  selectedChat: string = '';
  isTestShown: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  //  ideally this method shoud send each message to server
  sendMessage(msg: Message): void {
    this.messages.push(msg);
  }

  setSelectedChat(chatName: string): void {
    this.selectedChat = chatName;
  }

  latestRoomSpeaker(roomName: string): string {
    return getLatestRoomSpeaker(this.messages, roomName);
  }

  latestMessageFromChannel(roomName: string): string {
    return getLatestMessageFromChannel(this.messages, roomName);
  }

  latestMessageTime(roomName: string): Date {
    return getLatestMessageTime(this.messages, roomName);
  }

  unreadCount(roomName: string): number {
    return getUnreadCount(this.messages, roomName)
  }

  getRoomMessages(): Message[] {
    return this.messages.filter((meassage: Message) => meassage.roomId === this.selectedChat);
  }

  toggleTestModal(): void {
    this.isTestShown = !this.isTestShown;
  }

  getTestModalStatus(): boolean {
    return this.isTestShown;
  }

  readChat(roomName: string): void {
    setUnreadCountToZero(this.messages, roomName);
  }

  //  ideally this method should get all the user's messages from the server
  // getMessages = (): Message[] => {
  //   return this.messages;
  // }
  
}