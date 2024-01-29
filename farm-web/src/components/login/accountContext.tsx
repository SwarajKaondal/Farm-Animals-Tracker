import { createContext } from "react";

const switchToSignup = () => {
  setTimeout(() => {
  }, 400);
};

const switchToSignin = () => {
  setTimeout(() => {
  }, 400);
};

export const AccountContext = createContext<{ switchToSignup: () => void; switchToSignin: () => void }>({ switchToSignup , switchToSignin});
