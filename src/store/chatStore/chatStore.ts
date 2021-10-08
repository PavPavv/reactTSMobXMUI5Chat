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
  sendMessage: (msg: Message) => void;
  latestRoomSpeaker: (roomName: string) => string;
  latestMessageFromChannel: (roomName: string) => string;
  latestMessageTime: (roomName: string) => Date;
  unreadCount: (roomName: string) => number;
}

//  store helper functions
const getLatestRoomSpeaker = (messages: Message[], channelName: string): string => {
  const lastIncomingSpeaker =  messages.filter((message) => message.channelId === channelName).sort((a, b) => b.ts.getTime() - a.ts.getTime())[0].roomId;
  
  const isOutcoming = messages.filter((message) => message.channelId === channelName).sort((a, b) => b.ts.getTime() - a.ts.getTime())[0].isOut;
                      
  return isOutcoming ? 'you' : lastIncomingSpeaker;
};

const getLatestMessageFromChannel = (messages: Message[], channelName: string): string => {
  return messages.filter((message) => message.channelId === channelName).sort((a, b) => b.ts.getTime() - a.ts.getTime())[0].body;
};

const getLatestMessageTime = (messages: Message[], channelName: string): Date => {
  return messages.filter((message) => message.channelId === channelName).sort((a, b) => b.ts.getTime() - a.ts.getTime())[0].ts;
};

const getUnreadCount = (messages: Message[], channelName: string): number => {
  return messages
    .filter((message) => message.channelId === channelName)
    .filter((message) => message.isUnread === true)
    .length
};

//  TODO!
// const getLastMsgProperty = (messages: Message[], room: string, property: string): MessageProperty => {
//   const test =  messages.filter((message) => message.channelId === room).sort((a, b) => b.ts.getTime() - a.ts.getTime())[0];
//   return test[property];
// };

// console.log('testy', getLastMsgProperty(testMessages, 'mia', 'ts'))


//
export class ChatStore implements ChatStoreI {
  messages: Message[] = [];
  selectedChat: string = '';

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

  //  ideally this method should get all the user's messages from the server
  // getMessages = (): Message[] => {
  //   return this.messages;
  // }
  
}