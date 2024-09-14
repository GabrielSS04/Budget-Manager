// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCrP-vGPjWYj89pi7ZK0ml6tCj8Yt9jtYw",
  authDomain: "budget-manager-c95d0.firebaseapp.com",
  projectId: "budget-manager-c95d0",
  storageBucket: "budget-manager-c95d0.appspot.com",
  messagingSenderId: "775460750430",
  appId: "1:775460750430:web:7972d89b08616b59f520cf",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
