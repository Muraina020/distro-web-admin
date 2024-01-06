import axios from "axios";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const BASEURL = "https://apps-1.lampnets.com/distro";
const accessToken =
  "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZG1pbjEiLCJpYXQiOjE3MDQzNTkyMzMsImV4cCI6MTcwNDQ0NTYzM30.pAt7Uc35S0AK5UQX04KbjCG30OJxEhF0TmlodxI_yMCIhNHd-T3JuHHokaY6z3GB";

export const customFetch = axios.create({
  baseURL: BASEURL,
  headers: {
    Authorization: `Bearer  ${accessToken}`,
  },
});

export const formatPrice = (price) => {
  const formattedPrice = price.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return formattedPrice;
};

export const formateDate = (date) => {
  const formattedDate = day(date).format("ddd MMM d, YYYY - hh:mm a ");
  return formattedDate;
};
