import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/AuthenticationContext";

const useAuth = ({ token }: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { loginUser, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const auth = async () => {
      if (!token) {
        return router.push("/login");
      }
      if (!isAuthenticated) {
        setLoading(true);
        try {
          const res = await fetch("http://localhost:3000/api/auth/initialize", {
            headers: {
              Authorization: token!,
            },
          });
          const json = await res.json();
          loginUser(json);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      }
    };

    auth();
  }, []);

  return { loading };
};

export default useAuth;
