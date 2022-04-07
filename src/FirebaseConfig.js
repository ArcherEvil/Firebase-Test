
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGIQ5uFbBB-jrjkSMbFy0uMKFnhynYx3w",
  authDomain: "fruitsflavourstp.firebaseapp.com",
  projectId: "fruitsflavourstp",
  storageBucket: "fruitsflavourstp.appspot.com",
  messagingSenderId: "438072237298",
  appId: "1:438072237298:web:05734df230bd1ea385846b",
  measurementId: "G-64D16CTX0E"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);