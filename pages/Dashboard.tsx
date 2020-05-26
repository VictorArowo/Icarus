import Layout from "../components/Layout/Layout";
import { NextPage } from "next";
import FloatingActionButton from "../components/FloatingActionButton";
import Link from "next/link";
import useAuth from "../components/hooks/useAuth";
import nextCookie from "next-cookies";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthenticationContext";
import Loading from "../components/Loading";
import PlusIcon from "../icons/PlusIcon";

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
      <div className="flex items-center justify-between mt-5">
        <p className="text-2xl font-bold text-white">Dashboard</p>
        <div className="flex items-center">
          <div className="text-white">Good morning Victor!</div>
          <span className="inline-flex mx-5">
            <a
              href="/"
              className="inline-flex items-center px-2 py-2 text-sm font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary hover:text-gray-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-gray-700"
            >
              <div className="w-4 h-4 mr-2 text-white">
                <PlusIcon />
              </div>
              Create Form
            </a>
          </span>
        </div>
      </div>
      <div className="mt-10">
        <div className="w-full py-4 shadow px-7 md:w-1/2">
          <div className="flex items-baseline text-white">
            <p className="text-4xl font-bold font-white">3,000</p>
            <p className="ml-2 text-lg">responses this week</p>
          </div>
          <div className="mt-2">
            <div className="w-1/3"></div>
            <div className="w-1/3"></div>
            <div className="w-1/3"></div>
          </div>
        </div>
      </div>
      <div>{!isAuthenticated && <Loading />}</div>
    </Layout>
  );
};

Dashboard.getInitialProps = async (ctx) => {
  const { token } = nextCookie(ctx);

  return { token };
};

export default Dashboard;
