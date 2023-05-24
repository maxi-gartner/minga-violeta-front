import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {v4} from "uuid"

const firebaseConfig = {
  apiKey: "AIzaSyAncUUuQlJsgpKIeluOhImAUvC8_elEnPc",
  authDomain: "img-minga--project.firebaseapp.com",
  projectId: "img-minga--project",
  storageBucket: "img-minga--project.appspot.com",
  messagingSenderId: "948185860306",
  appId: "1:948185860306:web:59f1998df57ed49475450b"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export async function uploadFile(file, page){
    const storageRef = ref(storage, page+v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}