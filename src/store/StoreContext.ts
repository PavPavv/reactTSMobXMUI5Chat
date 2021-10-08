import { createContext } from "react";

import { rootStore } from "./rootStore";

export const StoreContext = createContext(rootStore);
