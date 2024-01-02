import axios from "axios";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const BASEURL = "https://apps-1.lampnets.com/distro";
const accessToken =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZG1pbjEiLCJpYXQiOjE3MDQwMzM2MzQsImV4cCI6MTcwNDEyMDAzNH0.p0lZVrr3Qqx_IhII7H0FAYZopJRGSTxftpEXkVt80dG32hRoDubT7L1akaaIRSkf";

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
