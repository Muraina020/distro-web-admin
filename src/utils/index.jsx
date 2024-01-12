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

export const customFetch = axios.create({
  baseURL: BASEURL,
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
