import { attachmentsApi } from "../api/attachmentsApi";

export function useAttachments() {
  const load = (image: File) => {
    const formData = new FormData();
    formData.append("image", image);
    attachmentsApi.post(
      `/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
      formData
    );
  };
  return {
    load,
  };
}
