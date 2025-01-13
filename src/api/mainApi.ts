import { apiMainClient } from ".";
import API_ENDPOINTS from "./endpoints";

export const BASE_URL_MAIN = "http://localhost:8080";

export const subscribeToBankNews = async (email: string) => {
  const res = await apiMainClient.post(`${BASE_URL_MAIN}${API_ENDPOINTS.EMAIL.POST_EMAIL}`, {
    email,
  });
  return res.data;
};
