import useSWR from "swr";
import { useRouter } from "next/router";
import fetcher from "../../utils/fetcher";
import Layout from "../../components/Layout/Layout";

const FormDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/forms/${id}`, fetcher);

  return <Layout>{data && JSON.stringify(data)}</Layout>;
};

export default FormDetails;
