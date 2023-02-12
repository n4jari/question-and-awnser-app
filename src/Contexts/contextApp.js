import { createContext } from "react";

export const contextApp = createContext({
  spinner: false,
  setSpinner: () => {},
});
