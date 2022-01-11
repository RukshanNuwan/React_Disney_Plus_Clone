import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBYtqpPrFsTx5jGB31-l6zC5M6mG23O19M",
  authDomain: "disney-plus-clone-52151.firebaseapp.com",
  projectId: "disney-plus-clone-52151",
  storageBucket: "disney-plus-clone-52151.appspot.com",
  messagingSenderId: "184115827400",
  appId: "1:184115827400:web:12dc07858451d6898b4bfd"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export {auth, provider, storage};
export default db;
