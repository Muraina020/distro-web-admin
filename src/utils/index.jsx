import axios from "axios";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const BASEURL = "https://apps-1.lampnets.com/distro";
const accessToken =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZG1pbjEiLCJpYXQiOjE3MDI3NTM4MTQsImV4cCI6MTcwMjg0MDIxNH0.X79uLdkE8IsHWnamZL8GhLrbRcJBP_LGXuU3we4XCGYNJgdnGhmzxwOhIFG29Lj3";

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
