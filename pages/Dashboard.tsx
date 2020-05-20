import Layout from "../components/Layout/Layout";
import { NextPage } from "next";
import FloatingActionButton from "../components/FloatingActionButton";
import Link from "next/link";
import useAuth from "../components/hooks/useAuth";
import nextCookie from "next-cookies";

const Dashboard: NextPage = ({ token }: any) => {
  const { data, error, isAuthenticated, loading } = useAuth({ token });

  return (
    <Layout>
      <Link href="/create">
        <a href="">
          <FloatingActionButton />
        </a>
      </Link>
      <div className="text-xl text-white">{isAuthenticated.toString()}</div>
    </Layout>
  );
};

Dashboard.getInitialProps = async (ctx) => {
  const { token } = nextCookie(ctx);

  return { token };
};

export default Dashboard;
