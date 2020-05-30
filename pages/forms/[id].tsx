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

  return (
    <Layout>
      <div className="flex flex-col">
        <h1 className="text-3xl text-center text-gray-100">{selected.title}</h1>
        <h3 className="text-center text-gray-400">{selected.description}</h3>
        <div className="mt-10">
          {selected.body.map((question, index) => (
            <div className="px-5 py-10 mb-5 rounded-lg shadow-xl" key={index}>
              <p className="text-2xl font-bold text-gray-100 ">
                <span className="text-lg text-primary">Q{index + 1}</span>
                {"    "}
                {question.title}
              </p>
              <p className="text-sm text-gray-300">
                {responses[question.id].length} reponses
              </p>
              <div className="mt-2">
                {responses[question.id].map((response, index) => (
                  <div className="text-gray-100" key={index}>
                    {response}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FormDetails;
