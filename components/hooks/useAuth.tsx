import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import nextCookie from "next-cookies";

const useAuth = ({ token }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = async () => {
      if (!token) {
        return router.push("/login");
      }
      setLoading(true);
      setIsAuthenticated(false);
      try {
        const res = await fetch("http://localhost:3000/api/auth/initialize", {
          headers: {
            Authorization: token!,
          },
        });
        const json = await res.json();
        setData(json);
        setLoading(false);
        setIsAuthenticated(true);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    auth();
  }, []);

  return { isAuthenticated, data, loading, error };
};

export default useAuth;
