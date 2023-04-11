import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA_zKqVtF5q59uYoOrc_LTx8-5vzv2KdcU",
  authDomain: "mhtm-3f509.firebaseapp.com",
  projectId: "mhtm-3f509",
  storageBucket: "mhtm-3f509.appspot.com",
  messagingSenderId: "327495606993",
  appId: "1:327495606993:web:f89dabd9f6d20ae6361bf0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
const storage = getStorage(app)
export default app ;