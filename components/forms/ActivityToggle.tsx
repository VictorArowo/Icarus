import { useState } from "react";
import Transition from "../Transition";
import { Form } from "../../context/SelectedFormContext";
import { useToast } from "../../utils/toast";
import Loading from "../Loading";

interface Props {
  initialState: boolean;
  selected: Form;
}

const ActivityToggle: React.FC<Props> = ({ initialState, selected }) => {
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();
  const handleClick = () => {
    setActive(!active);
  };

  const disableForm = async () => {
    if (current) {
      setLoading(true);
      await fetch(`/api/forms/${selected._id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...selected,
          isActive: false,
        }),
      });
      setLoading(false);
    }
    setActive(false);
    setCurrent(false);
    addToast("Form deactivated");
  };

  const activateForm = async () => {
    if (!current) {
      setLoading(true);
      await fetch(`/api/forms/${selected._id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...selected,
          isActive: true,
        }),
      });
      setLoading(false);
    }
    setActive(false);
    setCurrent(true);
    addToast("Form activated");
  };

  return (
    <div>
      {loading && <Loading />}
      <div className="relative inline-block text-left" onClick={handleClick}>
        <div>
          <span className="rounded-md shadow-sm">
            <button
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-transparent border border-gray-300 rounded-md hover:text-gray-200 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-300"
            >
              {current ? "Active" : "Disabled"}
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
        </div>

        <Transition
          show={active}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right rounded-md shadow-lg">
            <div className="rounded-md shadow bg-primary-background">
              <div className="py-1">
                <div
                  className="block px-4 py-2 text-sm leading-5 text-white cursor-pointer hover:bg-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  onClick={activateForm}
                >
                  Active
                </div>
                <div
                  className="block px-4 py-2 text-sm leading-5 text-white cursor-pointer hover:bg-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  onClick={disableForm}
                >
                  Disabled
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default ActivityToggle;
