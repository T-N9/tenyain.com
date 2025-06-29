import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export function useAuth() {
  const [user, loading, error] = useAuthState(auth);

  const loginWithGoogle = async () => await signInWithPopup(auth, new GoogleAuthProvider());
  const loginWithGitHub = async () => await signInWithPopup(auth, new GithubAuthProvider());
  const logout = async () => await signOut(auth);

  return { user, loading, error, loginWithGoogle, loginWithGitHub, logout };
}
