import { useEffect, useState } from "react";
import { customFetch, getRecentOrdersById } from "../utils";
import { redirect, useNavigate } from "react-router-dom";

export const UsePendingRecentOrder = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await customFetch(
          "/orders/all?deliveryType=Express&deliveryStatus=Pending"
        );

        const data = response.data.content;
        const recentData = getRecentOrdersById(data);
        setData(recentData);
      } catch (error) {
        setError("There was an error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export const UseCancelRecentOrder = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customFetch(
          "/orders/all?deliveryType=Express&deliveryStatus=Cancel"
        );

        const data = response.data.content;
        const recentData = getRecentOrdersById(data);

        setData(recentData);
      } catch (error) {
        setError("There was an error");
      }
    };

    fetchData();
  }, []);

  return { data };
};

export const UseOnTheWayRecentOrder = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customFetch(
          "/orders/all?deliveryType=Express&deliveryStatus=On the way"
        );

        const data = response.data.content;
        const recentData = getRecentOrdersById(data);
        setData(recentData);
      } catch (error) {
        setError("There was an error");
      }
    };

    fetchData();
  }, []);

  return { data };
};

export const UseDeliveredRecentOrder = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customFetch(
          "/orders/all?deliveryType=Express&deliveryStatus=Delivered"
        );

        const data = response.data.content;
        const recentData = getRecentOrdersById(data);
        setData(recentData);
      } catch (error) {
        setError("There was an error");
      }
    };

    fetchData();
  }, []);

  return { data };
};

export const UsePickedUpRecentOrder = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customFetch(
          "/orders/all?deliveryType=Express&deliveryStatus=Picked up"
        );

        const data = response.data.content;
        const recentData = getRecentOrdersById(data);
        setData(recentData);
      } catch (error) {
        setError("There was an error");
      }
    };

    fetchData();
  }, []);

  return { data };
};
