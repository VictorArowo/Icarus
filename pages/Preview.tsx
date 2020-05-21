import React, { useState, useContext } from "react";
import useSwr from "swr";
import { useRouter } from "next/dist/client/router";
import { NextPage } from "next";
import { Element } from "../utils/form";
import Footer from "../components/respondent/Footer";
import Dropdown from "../components/respondent/Dropdown";
import YesNoToggle from "../components/respondent/YesNoToggle";
import ReactDatePicker from "react-datepicker";
import DateComponent from "../components/respondent/DateComponent";
import TimeComponent from "../components/respondent/TimeComponent";
import { FormContext } from "../context/FormContext";

interface Props {}

const Preview: NextPage<Props> = () => {
  const context = useContext(FormContext);
  const { form: elements } = context;
  const form = {
    body: [...elements["1"]],
  };

  console.log("form", form);

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

  return (
    <div className="overflow-auto bg-primary-background">
      <div className="max-w-5xl min-h-screen mx-auto">
        <h1 className="pt-10 text-4xl font-extrabold text-center text-primary-text">
          Form Title Lorem
        </h1>
        <h4 className="mt-3 text-xl font-medium text-center text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum
          veritatis consequuntur quaerat neque est eligendi ex magni delectus
          nulla vel.
        </h4>
        <div className="px-10 mx-auto mb-32">
          {form.body.map((element) => {
            switch (element.text) {
              case "Single-Line Text":
                return (
                  <div key={element.id}>
                    <p className="mt-5 text-xl text-gray-200">
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
                    <p className="mt-5 text-xl text-gray-200">
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
                    <p className="mt-5 text-xl text-gray-200">
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
                    <p className="mt-5 text-xl text-gray-200">
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
                    <p className="mt-5 text-xl text-gray-200">
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
                    <p className="mt-5 text-xl text-gray-200">
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
                    <p className="mt-5 text-xl text-gray-200">
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
                    <p className="mt-5 text-xl text-gray-200">
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
                    <p className="mt-5 text-xl text-gray-200">
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Preview;
