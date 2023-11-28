import axios from "axios";

const live_url = import.meta.env.VITE_BACKEND_URI

export const base_url = live_url || "http://localhost:9090/api/v1";
// export const base_url = "https://coral-app-xn6d6.ondigitalocean.app/api/v1";

export const httpService = {
    headers: {
      Accept: "application/json",
    },
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};
