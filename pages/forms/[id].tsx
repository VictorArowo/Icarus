import useSWR from "swr";
import { useRouter } from "next/router";
import fetcher from "../../utils/fetcher";

const FormDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/forms/${id}`, fetcher);

  return <div>{data && JSON.stringify(data)}</div>;
};

export default FormDetails;
