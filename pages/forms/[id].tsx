import Layout from "../../components/Layout/Layout";
import { useEffect, useContext, useMemo } from "react";
import { SelectedFormContext } from "../../context/SelectedFormContext";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";
import { useRouter } from "next/router";
import ActivityToggle from "../../components/forms/ActivityToggle";
import ClipboardIcon from "../../icons/ClipboardIcon";
import { useToast } from "../../utils/toast";

const FormDetails = () => {
  const { selected } = useContext(SelectedFormContext);
  const { addToast } = useToast();
  const router = useRouter();

  const responses = useMemo(() => {
    return selected.responses.reduce<Record<string, string[]>>((acc, curr) => {
      Object.keys(curr).map((key) => {
        return acc[key] === undefined
          ? (acc[key] = [curr[key]])
          : acc[key].push(curr[key]);
      });
      return acc;
    }, {});
  }, [selected]);

  const handleCopy = () => {
    navigator.clipboard.writeText(`http://localhost:3000/f/${selected._id}`);
    addToast("Copied to clipboard");
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="absolute top-10 left-10">
          <div
            className="w-10 h-10 cursor-pointer text-primary-text"
            onClick={() => router.back()}
          >
            <ArrowLeftIcon />
          </div>
        </div>
        <h1 className="text-3xl text-center text-gray-100">{selected.title}</h1>
        <h3 className="text-center text-gray-400">{selected.description}</h3>
        <div className="flex items-center justify-between mt-10">
          <div className="flex flex-col items-center text-gray-400 md:flex-row">
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
          </div>
          <ActivityToggle
            initialState={selected.isActive}
            selected={selected}
          />
        </div>
        <div className="mt-10">
          {Object.keys(selected).length > 0 ? (
            selected.body.map((question, index) => (
              <div className="px-5 py-10 mb-5 rounded-lg shadow-xl" key={index}>
                <p className="text-2xl font-bold text-gray-100 ">
                  <span className="text-lg text-primary">Q{index + 1}</span>
                  {"    "}
                  {question.title}
                </p>
                <p className="text-sm text-gray-300">
                  {responses[question.id] ? responses[question.id].length : "0"}{" "}
                  reponses
                </p>
                <div className="mt-2">
                  {responses[question.id] &&
                    responses[question.id].map((response, index) => (
                      <div className="text-gray-100" key={index}>
                        {response}
                      </div>
                    ))}
                </div>
              </div>
            ))
          ) : (
            <p>No responses yet</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default FormDetails;
