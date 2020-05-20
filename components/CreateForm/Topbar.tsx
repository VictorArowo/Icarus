import ArrowLeftIcon from "../../icons/ArrowLeftIcon";
import Button from "../Button";
import ShareIcon from "../../icons/ShareIcon";
import SaveIcon from "../../icons/SaveIcon";
import ToggleIcon from "../../icons/ToggleIcon";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import useSWR, { mutate } from "swr";
import fetcher from "../../utils/fetcher";
import { useToast } from "../../utils/toast";
import { AuthContext } from "../../context/AuthenticationContext";

const Topbar = () => {
  const context = useContext(FormContext);
  const authContext = useContext(AuthContext);
  const { addToast } = useToast();

  const { form } = context;
  const {
    currentUser: { id },
  } = authContext;
  const handleClick = async () => {
    await fetch("/api/forms", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: [...form["1"]],
        user: id,
        created: new Date(),
      }),
    });
    addToast("Form successfully created");
  };

  return (
    <div className="w-screen h-24 bg-primary-background">
      <div className="flex justify-between w-full tems-center p-7">
        <div className="flex items-center">
          <div className="w-10 h-10 text-primary-text">
            <ArrowLeftIcon />
          </div>

          <span className="ml-10 text-xl text-primary-text">Untitled Form</span>
        </div>

        <div>
          <div className="flex justify-between w-40 sm:w-64">
            <Button type="text">
              <div className="w-5 h-5 mr-2">
                <ShareIcon />
              </div>
              <span className="hidden sm:inline-block">Share</span>
            </Button>
            <Button type="primary" onClick={handleClick}>
              <div className="w-5 h-5 mr-2">
                <SaveIcon />
              </div>
              <span className="hidden sm:inline-block">Save</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
