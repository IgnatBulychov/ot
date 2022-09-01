import axios from "axios";

export const attachmentsApi = axios.create({
  baseURL: import.meta.env.VITE_IMGBB_API,
});
