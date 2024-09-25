export const API_URL = "http://localhost:3000";

export function GET_PRODUCTS() {
  return {
    url: API_URL + "/products",
    options: {
      method: "GET",
    },
  };
}