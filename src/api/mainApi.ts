import { apiMainClient } from ".";
import { InfoFormValues } from "../types/types";
import API_ENDPOINTS from "./endpoints";

const BASE_URL_MAIN = "http://localhost:8080";

export const subscribeToBankNews = async (email: string) => {
  const response = await apiMainClient.post(`${BASE_URL_MAIN}${API_ENDPOINTS.EMAIL.POST_EMAIL}`, {
    email,
  });
  return response.data;
};

export const submitInfo = async (formData: InfoFormValues) => {
  const response = await apiMainClient.post(`${BASE_URL_MAIN}${API_ENDPOINTS.APP.POST_APP}`, formData);
  return response.data;
};
