import { useEffect, useState } from "react";
import { customFetch } from "../utils";
import { useAuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const useCustomFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { admin } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await customFetch(url, {
          headers: { Authorization: `Bearer ${admin.accessToken}` },
        });
        const _data = response.data.content;
        setData(_data);
      } catch (error) {
        if (error.response.status === 401) {
          navigate("/");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};
export default useCustomFetch;
