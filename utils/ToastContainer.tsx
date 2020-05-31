import { useToast } from "./toast";
import Toast from "../components/Toast";

interface Props {
  children: any;
}
const ToastContainer: React.FC<Props> = ({ children }) => {
  const { toasts } = useToast();

  if (toasts.length === 0) {
    return children;
  }

  return (
    <>
      {children}
      <div className="fixed top-0 flex flex-col items-end justify-center w-full px-4 py-6 pointer-events-none sm:p-6 sm:justify-end">
        {toasts.map(({ content, id }) => {
          return (
            <Toast key={id} toastId={id}>
              {content}
            </Toast>
          );
        })}
      </div>
    </>
  );
};

export default ToastContainer;
