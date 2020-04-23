import ArrowLeftIcon from "../../icons/ArrowLeftIcon";
import Button from "../Button";
import ShareIcon from "../../icons/ShareIcon";
import SaveIcon from "../../icons/SaveIcon";
import ToggleIcon from "../../icons/ToggleIcon";

const Topbar = () => {
  return (
    <div className="w-screen bg-primary-background h-32">
      <div className="flex w-full justify-between tems-center p-7">
        <div className="flex items-center">
          <div className="w-10 h-10 text-primary-text">
            <ArrowLeftIcon />
          </div>

          <span className="text-primary-text text-xl ml-10">Untitled Form</span>
        </div>

        <div>
          <div className=" w-40 sm:w-64 flex justify-between">
            <Button type="text">
              <div className="w-5 h-5 mr-2">
                <ShareIcon />
              </div>
              <span className="hidden sm:inline-block">Share</span>
            </Button>
            <Button type="primary">
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
