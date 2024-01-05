import axios from "axios";
import clsx from "clsx";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { twMerge } from "tailwind-merge";
day.extend(advancedFormat);

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const BASEURL = "https://apps-1.lampnets.com/distro";
const accessToken =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZG1pbjEiLCJpYXQiOjE3MDQ0NjQ3MTYsImV4cCI6MTcwNDU1MTExNn0.XdlLjNcXOoifJmjkR7ogYNgr3weT5IUaNPzWLUAXeYzceygiwdrvhh_bLmpT9pax";

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
