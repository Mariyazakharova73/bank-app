import { apiCurrencyClient } from ".";
import { CurrencyApiResponse } from "../types/apiTypes";

const API_KEY_CURRENCY = import.meta.env.VITE_API_KEY_CURRENCY || "aa573207cf0200690e0874fd";
const BASE_URL_CURRENCY = "https://v6.exchangerate-api.com/v6";

export const fetchCurrencyRates = async (baseCurrency: string): Promise<CurrencyApiResponse> => {
  const url = `${BASE_URL_CURRENCY}/${API_KEY_CURRENCY}/latest/${baseCurrency}`;

  const { data } = await apiCurrencyClient.get<CurrencyApiResponse>(url);

  return data;
};
