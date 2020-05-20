import React, { useEffect, useContext, useState } from "react";
import Layout from "../components/Layout/Layout";
import nextCookie from "next-cookies";
import useAuth from "../components/hooks/useAuth";
import { NextPageContext } from "next";
import { AuthContext } from "../context/AuthenticationContext";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

const Forms = ({ token }: any) => {
  // useAuth({ token });
  token = token || localStorage.getItem("token");
  const {
    currentUser: { id },
  } = useContext(AuthContext);
  const [forms, setForms] = useState([]);

  const { data, error } = useSWR(
    `http://localhost:3000/api/users/${id}/forms`,
    fetcher
  );
  useEffect(() => {
    setForms(data);
  }, [data]);

  return (
    <Layout>
      <h1 className="text-3xl font-extrabold text-gray-200">Your forms</h1>

      <div>{forms && forms.map((form) => <div>{form._id}</div>)}</div>
    </Layout>
  );
};

Forms.getInitialProps = async (ctx: any) => {
  const { token } = nextCookie(ctx);

  return { token };
};

export default Forms;
