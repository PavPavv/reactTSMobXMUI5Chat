import { makeAutoObservable } from "mobx";

export interface MobStoreI {
  isOpen: boolean;
  toggleMobMenu: () => void;
  closeMobMenu: () => void;
};

//  mobile menu store class
export class MobStore implements MobStoreI {
  isOpen: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleMobMenu(): void {
    this.isOpen = !this.isOpen;
  }

  closeMobMenu(): void {
    this.isOpen = false;
  }
}