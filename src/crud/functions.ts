// searchFunctions.ts
import axios from "axios";
import { useHistory } from "react-router-dom";

const backend_domain = process.env.REACT_APP_BACKEND_DOMAIN || "default";
const captcha_key = process.env.REACT_APP_CAPTCHA_KEY || "default";

export const handleNewSearch = async (
  query: string,
  keywords: string[],
  history: ReturnType<typeof useHistory>,
) => {
  const options = {
    method: "POST",
    url: backend_domain + "/get_similar",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      text: query,
      keywords: keywords.filter((keyword) => keyword.trim() !== ""),
      page: 0,
    },
  };

  try {
    const response = await axios.request(options);
    const searchData = {
      query,
      results: response.data,
    };
    console.log("herer");
    history.push("/search_results", { searchData });
  } catch (error) {
    console.error(error);
  }
};

export const handleNewLoadMore = async (
  query: string,
  keywords: string[],
  captcha: string | null,
  page: number,
) => {
  const options = {
    method: "POST",
    url: backend_domain + "/get_similar",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      text: query,
      keywords: keywords.filter((keyword) => keyword.trim() !== ""),
      captcha: captcha,
      page: page,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const SearchPageHandleNewSearh = async (
  query: string,
  keywords: string[],
  captcha: string | null,
) => {
  const options = {
    method: "POST",
    url: backend_domain + "/get_similar",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      text: query,
      keywords: keywords.filter((keyword) => keyword.trim() !== ""),
      captcha: captcha,
      page: 0,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
