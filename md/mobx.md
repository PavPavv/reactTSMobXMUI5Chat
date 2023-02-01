# My MobX cheat sheet

## Install mobX dependencies

Install main dependency

> yarn add mobx

And React packages
for classes:

> yarn add mobx-react

or the functional React components

> mobx-react-light

## Create local store

```typescript
import { makeAutoObservable } from 'mobx';

class SomeStore {
  public constructor() {
    makeAutoObservable(this);
  }
}

export const someStore = new SomeStore();
```

## Make component observable for the store

```typescript
import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
// the same
// import { observer } from "mobx";

import { someStore } from '../stores';

interface ISomeComponent {
  name: string;
}

const SomeComponent: FC<ISomeComponent> = observer(({ name }): JSX.Element => {
  const store = someStore;

  return (
    <div>
      <div>{store.someValue}</div>
    </div>
  );
});
```

## Also I think it is a better way to combine all the local store into the global one:

1. App.tsx:

```typescript
// ...
import { StoreContext } from './store/StoreContext';
import { rootStore } from './store/rootStore';
// ...

const App = (): JSX.Element => {
  return (
    <StoreContext.Provider value={rootStore}>
      <MainRouter />
    </StoreContext.Provider>
  );
};
export default App;
```

2. StoreContext.ts:

```typescript
import { createContext } from 'react';
import { rootStore } from './rootStore';

export const StoreContext = createContext(rootStore);
```

3. rootStore.ts:

```typescript
import { MobStore } from './mobStore/mobStore';
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
```
