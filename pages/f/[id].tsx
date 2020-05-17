import React, { useState } from "react";
import useSwr from "swr";
import { useRouter } from "next/dist/client/router";
import { NextPage } from "next";
import { Element } from "../../utils/form";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/respondent/Footer";
import Dropdown from "../../components/Dropdown";

interface Props {
  form: {
    body: Element[];
  };
}

const Respondent: NextPage<Props> = ({ form }) => {
  const router = useRouter();
  const { id } = router.query;

  const storage: Record<string, string> = {};

  const [values, setValues] = useState(
    form.body.reduce((acc, elem) => {
      acc[elem.id] = "";
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
    <div className="bg-primary-background">
      <div className="min-h-screen mx-auto max-w-7xl">
        <h1 className="pt-10 text-4xl text-center text-primary-text">
          Form Title Lorem
        </h1>
        <h4 className="mt-3 text-center text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum
          veritatis consequuntur quaerat neque est eligendi ex magni delectus
          nulla vel.
        </h4>
        <div className="max-w-5xl mx-auto">
          {form.body.map((element) => {
            switch (element.text) {
              case "Single-Line Text":
                return (
                  <div>
                    <p className="mt-5 text-xl text-gray-200">
                      {element.title}
                    </p>
                    <input
                      type="text"
                      className="w-full bg-transparent form-input"
                      name={element.id}
                      onChange={handleChange}
                    />
                  </div>
                );

              case "Multi-Line Text":
                return (
                  <div>
                    <p className="mt-5 text-xl text-gray-200">
                      {element.title}
                    </p>
                    <textarea
                      className="w-full bg-transparent form-textarea"
                      name={element.id}
                      onChange={handleChange}
                    />
                  </div>
                );

              case "Multiple Choice":
                return (
                  <div>
                    <p className="mt-5 text-xl text-gray-200">
                      {element.title}
                    </p>
                    <div>
                      {element.options?.map((opt) => {
                        return (
                          <div key={opt.id} className="mb-2">
                            <input
                              type="radio"
                              className="mr-3"
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
                  <div>
                    <p className="mt-5 text-xl text-gray-200">
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

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/forms");
  const forms = await res.json();

  const paths = forms.map((form: any) => `/f/${form._id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(`http://localhost:3000/api/forms/${params.id}`);
  const form = await res.json();

  return { props: { form } };
}

export default Respondent;
