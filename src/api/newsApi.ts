import { apiNewsClient } from ".";
import { NewsApiResponse } from "../types/apiTypes";

const API_KEY_NEWS = import.meta.env.VITE_API_KEY_NEWS || "abca151dd940461bad8b4422862f1780";

const BASE_URL_NEWS = " https://newsapi.org";

export const fetchNewsRates = async (): Promise<NewsApiResponse> => {
  const url = `${BASE_URL_NEWS}/v2/top-headlines?country=us&category=business&apiKey=${API_KEY_NEWS}`;

  const { data } = await apiNewsClient.get<NewsApiResponse>(url);
  return data;
};
