import Layout from "../components/Layout/Layout";
import { NextPage } from "next";
import FloatingActionButton from "../components/FloatingActionButton";
import Link from "next/link";
import useAuth from "../components/hooks/useAuth";
import nextCookie from "next-cookies";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthenticationContext";
import Loading from "../components/Loading";

const Dashboard: NextPage = ({ token }: any) => {
  useAuth({ token });

  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Layout>
      <Link href="/create">
        <a href="">
          <FloatingActionButton />
        </a>
      </Link>
      <div className="text-xl text-white">{isAuthenticated.toString()}</div>
      <div>{!isAuthenticated && <Loading />}</div>
    </Layout>
  );
};

Dashboard.getInitialProps = async (ctx) => {
  const { token } = nextCookie(ctx);

  return { token };
};

export default Dashboard;
