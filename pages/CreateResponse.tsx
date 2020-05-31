import Footer from "../components/respondent/Footer";
import { useRouter } from "next/router";
import { useContext } from "react";
import { SelectedFormContext } from "../context/SelectedFormContext";
import ClipboardIcon from "../icons/ClipboardIcon";
import { useToast } from "../utils/toast";

const FormResponse = () => {
  const { selected } = useContext(SelectedFormContext);
  const router = useRouter();
  const { addToast } = useToast();

  const handleBack = () => {
    router.push("/dashboard");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`http://localhost:3000/f/${selected._id}`);
    addToast("Copied to clipboard");
  };
  return (
    <div className="bg-primary-background">
      <div className="flex flex-col items-center max-w-5xl min-h-screen mx-auto">
        <h4 className="mt-3 mt-20 text-3xl font-medium text-center text-gray-300">
          Form successfully created
        </h4>

        <p className="flex flex-col items-center mt-10 text-gray-400 md:flex-row">
          Shareable url:{"  "}
          <div className="flex items-center">
            <a
              href={`http://localhost:3000/f/${selected._id}`}
              target="_blank"
              className="ml-2 text-sm whitespace-normal text-primary hover:text-yellow-600"
            >
              http://localhost:3000/f/{selected._id}
            </a>
            <div
              className="w-6 h-6 ml-1 text-gray-400 cursor-pointer hover:text-gray-500"
              onClick={handleCopy}
            >
              <ClipboardIcon />
            </div>
          </div>
        </p>
        <span className="inline-flex mt-12 rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex items-center px-4 py-3 font-medium font-bold leading-5 transition duration-150 ease-in-out border border-transparent rounded-md text-md text-gray-50 bg-primary hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
            onClick={handleBack}
          >
            Back to dashboard
          </button>
        </span>
      </div>
    </div>
  );
};

export default FormResponse;
