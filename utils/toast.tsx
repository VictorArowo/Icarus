import React, { useState, useContext, createContext, useCallback } from "react";

interface Toast {
  id: number;
  content: string;
}

interface Context {
  addToast: (content: string) => void;
  removeToast: (id: number) => void;
  toasts: Toast[];
}
const ToastContext = createContext<Context>({} as Context);

let toastCount = 0;

export const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    (content: string) => {
      const id = toastCount++;
      const newToast = { content, id };
      setToasts((prevToasts) => {
        return [...prevToasts, newToast];
      });
    },
    [setToasts]
  );

  const removeToast = useCallback(
    (id: number) => {
      setToasts((prevToasts) => {
        return prevToasts.filter((toast) => {
          return toast.id !== id;
        });
      });
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
