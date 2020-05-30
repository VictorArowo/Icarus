import React, { useEffect, useContext, useState } from "react";
import Layout from "../components/Layout/Layout";
import nextCookie from "next-cookies";
import useAuth from "../components/hooks/useAuth";
import { NextPageContext } from "next";
import { AuthContext } from "../context/AuthenticationContext";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import SingleForm from "../components/forms/SingleForm";
import Loading from "../components/Loading";
import { useRouter } from "next/router";
import { FormState, Element } from "../utils/form";
import { SelectedFormContext } from "../context/SelectedFormContext";

const Forms = ({ token }: any) => {
  token = token || localStorage.getItem("token");
  useAuth({ token });
  const {
    currentUser: { id },
    isAuthenticated,
  } = useContext(AuthContext);
  const { changeSelected } = useContext(SelectedFormContext);
  const [forms, setForms] = useState<
    {
      body: Element[];
      _id: string;
      created: string;
      title: string;
      description: string;
      responses: Record<string, string>[];
    }[]
  >([]);
  const router = useRouter();

  const { data, error } = useSWR(
    `http://localhost:3000/api/users/${id}/forms`,
    fetcher
  );
  useEffect(() => {
    setForms(data);
  }, [data]);

  return (
    <Layout>
      <div>{(!isAuthenticated || !data) && <Loading />}</div>

      <h1 className="text-3xl font-extrabold text-gray-200">Your forms</h1>

      <div>
        {forms &&
          forms.map((form) => (
            <ul
              key={form._id}
              onClick={() => {
                changeSelected(form);
                router.push("/forms/[id]", `/forms/${form._id}`);
              }}
            >
              <SingleForm form={form} />
            </ul>
          ))}
      </div>
    </Layout>
  );
};

Forms.getInitialProps = async (ctx: any) => {
  const { token } = nextCookie(ctx);

  return { token };
};

export default Forms;
