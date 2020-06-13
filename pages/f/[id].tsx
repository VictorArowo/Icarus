import React, { useState } from "react";
import useSwr from "swr";
import { useRouter } from "next/dist/client/router";
import { NextPage } from "next";
import { Element } from "../../utils/form";
import Footer from "../../components/respondent/Footer";
import Dropdown from "../../components/respondent/Dropdown";
import YesNoToggle from "../../components/respondent/YesNoToggle";
import ReactDatePicker from "react-datepicker";
import DateComponent from "../../components/respondent/DateComponent";
import TimeComponent from "../../components/respondent/TimeComponent";
import Loading from "../../components/Loading";

interface Props {
  form: {
    body: Element[];
    title: string;
    description: string;
  };
}

const Respondent: NextPage<Props> = ({ form }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const storage: Record<string, string> = {};

  const [values, setValues] = useState(
    form.body.reduce((acc, elem) => {
      if (elem.text === "Date") {
        acc[elem.id] = new Date().toISOString().substring(0, 10);
      } else if (elem.text === "Time") {
        acc[elem.id] = new Date().toISOString();
      } else {
        acc[elem.id] = "";
      }
      return acc;
    }, storage)
  );

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    await fetch(`/api/forms/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values }),
    });
    setLoading(false);
    router.push("/formResponse");
  };

  return (
    <div className="overflow-auto bg-primary-background">
      {loading && <Loading />}
      <div className="max-w-5xl min-h-screen mx-auto">
        <h1 className="pt-10 text-2xl font-extrabold text-center md:text-4xl text-primary-text">
          {form.title}
        </h1>
        <h4 className="mt-3 font-medium text-center text-gray-300 text-md md:text-xl">
          {form.description}
        </h4>
        <div className="px-3 mx-auto mb-32 md:px-10">
          {form.body.map((element) => {
            switch (element.text) {
              case "Single-Line Text":
                return (
                  <div key={element.id}>
                    <p className="mt-5 mb-1 text-gray-200 text-md md:text-xl">
                      {element.title}
                    </p>
                    <input
                      type="text"
                      className="w-full text-gray-200 bg-transparent form-input"
                      name={element.id}
                      onChange={handleChange}
                    />
                  </div>
                );

              case "Number":
                return (
                  <div key={element.id}>
                    <p className="mt-5 mb-1 text-gray-200 text-md md:text-xl">
                      {element.title}
                    </p>
                    <input
                      type="number"
                      className="text-gray-200 bg-transparent min-w-4/12 form-input"
                      name={element.id}
                      onChange={handleChange}
                    />
                  </div>
                );

              case "Multi-Line Text":
                return (
                  <div key={element.id}>
                    <p className="mt-5 mb-1 text-gray-200 text-md md:text-xl">
                      {element.title}
                    </p>
                    <textarea
                      className="w-full text-gray-200 bg-transparent form-textarea"
                      name={element.id}
                      onChange={handleChange}
                    />
                  </div>
                );

              case "Multiple Choice":
                return (
                  <div key={element.id}>
                    <p className="mt-5 mb-1 text-gray-200 text-md md:text-xl">
                      {element.title}
                    </p>
                    <div>
                      {element.options?.map((opt) => {
                        return (
                          <div key={opt.id} className="mb-2">
                            <input
                              type="radio"
                              className="mr-3 form-radio text-primary"
                              value={opt.name}
                              name={element.id}
                              onChange={handleChange}
                              checked={values[element.id] === opt.name}
                            />
                            <label className="text-gray-300">{opt.name}</label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );

              case "Dropdown":
                return (
                  <div key={element.id}>
                    <p className="mt-5 mb-1 text-xl text-gray-200">
                      {element.title}
                    </p>
                    <div>
                      <Dropdown
                        options={element.options!}
                        values={values}
                        setValues={setValues}
                        elementId={element.id}
                      />
                    </div>
                  </div>
                );

              case "Yes/No":
                return (
                  <div key={element.id}>
                    <p className="mt-5 mb-1 text-gray-200 text-md md:text-xl">
                      {element.title}
                    </p>
                    <YesNoToggle
                      choices={element.choices!}
                      elementId={element.id}
                      values={values}
                      setValues={setValues}
                    />
                  </div>
                );

              case "Date":
                return (
                  <div key={element.id}>
                    <p className="mt-5 mb-1 text-gray-200 text-md md:text-xl">
                      {element.title}
                    </p>
                    <DateComponent
                      elementId={element.id}
                      values={values}
                      setValues={setValues}
                    />
                  </div>
                );

              case "Time":
                return (
                  <div key={element.id}>
                    <p className="mt-5 mb-1 text-gray-200 text-md md:text-xl">
                      {element.title}
                    </p>
                    <TimeComponent
                      elementId={element.id}
                      values={values}
                      setValues={setValues}
                    />
                  </div>
                );

              case "Email Address":
                return (
                  <div key={element.id}>
                    <p className="mt-5 mb-1 text-gray-200 text-md md:text-xl">
                      {element.title}
                    </p>
                    <input
                      type="email"
                      className="w-full text-gray-200 bg-transparent form-input"
                      name={element.id}
                      onChange={handleChange}
                    />
                  </div>
                );

              case "Website":
                return (
                  <div key={element.id}>
                    <p className="mt-5 mb-1 text-gray-200 text-md md:text-xl">
                      {element.title}
                    </p>
                    <input
                      type="url"
                      className="w-full text-gray-200 bg-transparent form-input"
                      name={element.id}
                      onChange={handleChange}
                    />
                  </div>
                );

              default:
                break;
            }
          })}

          <span className="flex items-center justify-center mt-12">
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary hover:bg-yellow-600 focus:outline-none focus:border-yellow-700 focus:shadow-outline-blue active:bg-yellow-800"
            >
              Submit
            </button>
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/forms");
  const forms = await res.json();
  const activeForms = forms.filter((form: any) => form.isActive);

  const paths = activeForms.map((form: any) => `/f/${form._id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(`http://localhost:3000/api/forms/${params.id}`);
  const form = await res.json();

  return { props: { form } };
}

export default Respondent;
