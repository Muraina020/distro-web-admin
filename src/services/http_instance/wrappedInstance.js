import axios, { HeadersDefaults, AxiosInstance } from "axios";
import CookieManager from "../../components/utils/cookieManager/cookieManager";

const instance = axios.create({
  // baseURL: "https://20.126.3.61:3401/",
  // baseURL: "https://products.bluechiptech.biz:3401/",
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  // baseURL: window.API_KEY,
});

// let instance;

// if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
//   instance = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL,
//   });
// } else {
//   instance = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL,
//   });
// }

export function getJWT() {
  if (typeof window !== "undefined") {
    let token = CookieManager.getCookie("jwt");
    if (token?.charAt(0) === '"' && token?.charAt(token?.length - 1) === '"') {
      token = token?.substring(1, token?.length - 2);
    }
    // token?.replace(/^"(.*)"$/, '$1');
    // console.log(token?.split('"'))
    return "Bearer " + token;
  }
  return "";
}
class HTTPClient {
  static async get(endpoint) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Content-Type": "application/json",
      Authorization: getJWT(),
    };

    const response = await instance.get(endpoint, { headers });
    return response;
  }

  static async post(endpoint, data) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Content-Type": "application/json",
      Authorization: getJWT(),
    };

    const response = await instance.post(endpoint, data, { headers });
    return response;
  }

  static async delete(endpoint) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Content-Type": "application/json",
      Authorization: getJWT(),
    };
    const response = await instance.delete(endpoint, { headers });
    return response;
  }

  static async put(endpoint, data) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Content-Type": "application/json",
      Authorization: getJWT(),
    };

    const response = await instance.put(endpoint, data, { headers });
    return response;
  }
  // static async formDataPost(endpoint, data) {
  //   const headers = {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "POST",
  //     "Content-Type": "multipart/form", //this is not the correct content type please change it
  //     Authorization: getJWT(),
  //   };

  //   const response = await instance.post(endpoint, data, { headers });
  //   return response;
  // }

  static async formDataPost(endpoint, data) {
    const formData = new FormData();

    // Append data fields to the FormData object
    for (const key in data) {
      formData.append(key, data[key]);
    }

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      Authorization: getJWT(),
    };

    const response = await instance.post(endpoint, formData, {
      headers: {
        ...headers,
        "Content-Type": "multipart/form-data", // Set the correct content type for FormData
      },
    });

    return response;
  }

  static async formDataPut(endpoint, data) {
    const formData = new FormData();

    // Append data fields to the FormData object
    for (const key in data) {
      formData.append(key, data[key]);
    }

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "PUT",
      Authorization: getJWT(),
    };

    const response = await instance.put(endpoint, formData, {
      headers: {
        ...headers,
        "Content-Type": "multipart/form-data", // Set the correct content type for FormData
      },
    });

    return response;
  }

  static async patch(endpoint) {
    const response = await instance.patch(endpoint);
    return response;
  }
}
export default HTTPClient;
