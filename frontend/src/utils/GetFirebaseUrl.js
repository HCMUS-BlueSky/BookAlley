import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

export const GetFirebaseUrl = async (photoLink) => {
  const photoRef = ref(storage, photoLink);
  const url = await getDownloadURL(photoRef);
  return url;
};
