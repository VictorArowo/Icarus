import React, { useState, createContext } from "react";

interface User {
  id: string;
  email: string;
  verified: boolean;
  memberSince: string;
  picture: string;
}
interface Source {
  sub: string;
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
}
interface Context {
  currentUser: User;
  loginUser: (user: Source) => void;
}
const ToastContext = createContext<Context>({} as Context);

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>({} as User);

  const loginUser = (user: Source) => {
    setCurrentUser({
      email: user.email,
      id: user.sub,
      verified: user.email_verified,
      memberSince: user.updated_at,
      picture: user.picture,
    });
  };
  return (
    <ToastContext.Provider value={{ currentUser, loginUser }}>
      {children}
    </ToastContext.Provider>
  );
};
