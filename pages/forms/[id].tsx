import Layout from "../../components/Layout/Layout";
import { useEffect, useContext, useMemo } from "react";
import { SelectedFormContext } from "../../context/SelectedFormContext";

const FormDetails = () => {
  const { selected } = useContext(SelectedFormContext);

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
  console.log("responses", responses);
  return (
    <Layout>
      <div className="flex flex-col">
        <h1 className="text-3xl text-center text-gray-100">{selected.title}</h1>
        <h3 className="text-center text-gray-400">{selected.description}</h3>
        <div className="mt-10">
          {selected.body.map((question) => {
            return (
              <div>
                <p className="text-2xl text-gray-100">{question.title}</p>
                {responses[question.id].map((response) => (
                  <div>{response}</div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default FormDetails;
