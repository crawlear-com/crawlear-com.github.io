import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export function useUserSession(InitSession: string | null) {
  const [userUid, setUserUid] = useState<string | null>(InitSession);

  // Listen for changes to the user session if there is a session
  useEffect(() => {
    if (InitSession && window.crawlear?.user) {
      const auth = getAuth()
      const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
        if (authUser) {
          setUserUid(authUser.uid);
        } else {
          setUserUid(null);
        }
      });

      return () => unsubscribe();
    }
  }, [InitSession]);

  return userUid;
}