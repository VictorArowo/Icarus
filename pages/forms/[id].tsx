import useSWR from "swr";
import { useRouter } from "next/router";
import fetcher from "../../utils/fetcher";
import Layout from "../../components/Layout/Layout";
import { useEffect, useContext } from "react";
import { SelectedFormContext } from "../../context/SelectedFormContext";

const FormDetails = () => {
  const { selected } = useContext(SelectedFormContext);
  return <Layout>{JSON.stringify(selected)}</Layout>;
};

export default FormDetails;
