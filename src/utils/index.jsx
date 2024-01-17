import axios from "axios";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const BASEURL = "https://apps-1.lampnets.com/distro";


// Function to retrieve the access token from localStorage
const getAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.accessToken || "";
};

// Axios instance with dynamic Authorization header
export const customFetch = axios.create({
  baseURL: BASEURL,
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
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
