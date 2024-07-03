// searchFunctions.ts
import axios from "axios";
import { useHistory } from "react-router-dom";

export const handleNewSearch = async (
  query: string,
  keywords: string[],
  history: ReturnType<typeof useHistory>,
) => {
  const options = {
    method: "POST",
    url: "https://9d641738-4bde-4795-a50f-bd46a82c0a1d-00-2r4sm0gkoe1kf.picard.replit.dev/get_similar",
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
    history.push("/search_results", { searchData });
  } catch (error) {
    console.error(error);
  }
};

export const handleNewLoadMore = async (
  query: string,
  keywords: string[],
  page: number,
) => {
  const options = {
    method: "POST",
    url: "https://9d641738-4bde-4795-a50f-bd46a82c0a1d-00-2r4sm0gkoe1kf.picard.replit.dev/get_similar",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      text: query,
      keywords: keywords.filter((keyword) => keyword.trim() !== ""),
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
