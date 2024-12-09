import axios from "axios";

export const apiCurrencyClient = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiNewsClient = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
