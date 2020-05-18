import { useToast } from "../utils/toast";
import { useState, useEffect } from "react";
import { useTimeoutFn } from "react-use";
import { useRouter } from "next/dist/client/router";
import Transition from "./Transition";
import CheckIcon from "../icons/CheckIcon";
import CloseIcon from "../icons/CloseIcon";

interface Props {
  toastId: number;
}

const Toast: React.FC<Props> = ({ children, toastId }) => {
  const { removeToast } = useToast();
  const router = useRouter();
  const [show, setShow] = useState(true);
  const [timedout, cancelTimeout, resetTimeout] = useTimeoutFn(hide, 5000);

  function hide() {
    if (timedout() === false) {
      cancelTimeout();
    }

    setShow(false);
  }

  function onMouseEnter() {
    cancelTimeout();
  }

  function onMouseLeave() {
    resetTimeout();
  }

  useEffect(() => {
    return () => {
      if (show === false) {
        removeToast(toastId);
      }
    };
  });

  return (
    <Transition
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      show={show}
    >
      <div
        className="w-full max-w-xs mb-4 bg-white rounded-lg shadow-lg pointer-events-auto"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="overflow-hidden rounded-lg shadow-xs">
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 text-green-400">
                  <CheckIcon />
                </div>
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium leading-5 text-gray-900">
                  {children}
                </p>
              </div>
              <div className="flex flex-shrink-0 ml-4">
                <button
                  className="inline-flex text-gray-400 transition duration-150 ease-in-out focus:outline-none focus:text-gray-500"
                  onClick={hide}
                >
                  <div className="w-5 h-5">
                    <CloseIcon />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Toast;
