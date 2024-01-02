import axios from "axios";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const BASEURL = "https://apps-1.lampnets.com/distro";
const accessToken =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZG1pbjEiLCJpYXQiOjE3MDQxOTc0NzQsImV4cCI6MTcwNDI4Mzg3NH0.8cPhEMWzHueLIc0lfc2tTb86ZsISu2Yl7wXg_mBNhhUDpo-ce9Q1JKl-gcGYUFP5";

export const customFetch = axios.create({
  baseURL: BASEURL,
  headers: {
    Authorization: `Bearer  ${accessToken}`,
  },
});

export const formatPrice = (price) => {
  const newPrice = parseFloat(price);
  const formattedPrice = newPrice.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return formattedPrice;
};

export const formateDate = (date) => {
  const formattedDate = day(date).format("ddd MMM d, YYYY - hh:mm a ");
  return formattedDate;
};

export const getRecentOrdersById = (arr) => {
  const recentOrder = arr.reduce((recent, currentItem) => {
    return currentItem?.id > recent?.id ? currentItem : recent;
  }, arr[0]);

  return recentOrder || null;
};
