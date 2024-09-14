import { auth, provider } from '../../firebaseConfig';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error('Erro ao autenticar:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Erro ao deslogar:', error);
    throw error;
  }
};

export const authStateListener = (callback: (user: any) => void) => {
  return onAuthStateChanged(auth, callback);
};
