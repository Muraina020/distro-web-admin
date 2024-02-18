import { useEffect, useState } from "react";
import { customFetch, getRecentOrdersById } from "../utils";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";

export const UsePendingRecentOrder = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { admin } = useAuthContext();
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await customFetch(
        "/orders/all?deliveryType=Express&deliveryStatus=Pending&pageSize=1000",
        { headers: { Authorization: `Bearer ${admin.accessToken}` } }
      );

      const data = response.data.content;
      const recentData = getRecentOrdersById(data);
      setData(recentData);
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/");
      }
      setError("There was an error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export const UseCancelRecentOrder = () => {
  const [data, setData] = useState(null);
  const { admin } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customFetch(
          "/orders/all?deliveryType=Express&deliveryStatus=Cancel&pageSize=1000",
          { headers: { Authorization: `Bearer ${admin.accessToken}` } }
        );

        const data = response.data.content;
        const recentData = getRecentOrdersById(data);

        setData(recentData);
      } catch (error) {
        if (error.response.status === 401) {
          navigate("/");
        }
        setError("There was an error");
      }
    };

    fetchData();
  }, []);

  return { data };
};

export const UseOnTheWayRecentOrder = () => {
  const [data, setData] = useState({});
  const { admin } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customFetch(
          "/orders/all?deliveryType=Express&deliveryStatus=On the way&pageSize=1000",
          { headers: { Authorization: `Bearer ${admin.accessToken}` } }
        );
        const data = response.data.content;
        const recentData = getRecentOrdersById(data);
        setData(recentData);
      } catch (error) {
        if (error.response.status === 401) {
          navigate("/");
        }
        setError("There was an error");
      }
    };

    fetchData();
  }, []);

  return { data };
};

export const UseDeliveredRecentOrder = () => {
  const [data, setData] = useState({});
  const { admin } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customFetch(
          "/orders/all?deliveryType=Express&deliveryStatus=Delivered&pageSize=1000",
          { headers: { Authorization: `Bearer ${admin.accessToken}` } }
        );

        const data = response.data.content;
        const recentData = getRecentOrdersById(data);
        setData(recentData);
      } catch (error) {
        if (error.response.status === 401) {
          navigate("/");
        }
        setError("There was an error");
      }
    };

    fetchData();
  }, []);

  return { data };
};

export const UsePickedUpRecentOrder = () => {
  const [data, setData] = useState({});
  const { admin } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customFetch(
          "/orders/all?deliveryType=Express&deliveryStatus=Picked up&pageSize=1000",
          { headers: { Authorization: `Bearer ${admin.accessToken}` } }
        );

        const data = response.data.content;
        const recentData = getRecentOrdersById(data);
        setData(recentData);
      } catch (error) {
        if (error.response.status === 401) {
          navigate("/");
        }
        setError("There was an error");
      }
    };

    fetchData();
  }, []);

  return { data };
};
