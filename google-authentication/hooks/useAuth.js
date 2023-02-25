import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import React, { createContext, useContext, useEffect, useState, useMemo} from 'react';
import {
    GoogleAuthProvider,
    auth,
    signInWithCredential,
    signOut,
    onAuthStateChanged,
} from './firebase';

const AuthContext = createContext({});

WebBrowser.maybeCompleteAuthSession();

export const AuthProvider = ({ children }) => {
    const config = {
        expoClientId:
        '497637763602-5u6m1v9o9mddile7rg9cgr1ihf8ck3ls.apps.googleusercontent.com',
        scopes: ["profile", "email"],
      permissions: ["public_profile", "email", "gender", "location"],
    };

    const [request, response, promptAsync] = Google.useAuthRequest(config);
    const [error, setError] = useState();
    const [user, setUser] = useState();
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          setUser(user);
          
          if (user) {
            setUser(user);
          } else {
            setUser(null);
          }
    
          setLoadingInitial(false);
        });
      }, []);


      useEffect(() => {
        if (response?.type === "success") {
          const { idToken, accessToken } = response?.authentication;
          const credential = GoogleAuthProvider.credential(idToken, accessToken);
          
          signInWithCredential(auth, credential);
          
        } else {
          setError(response?.error);
        }
    
        setLoading(false);
      }, [response]);

      const logout = () => {
        setLoading(true);
        signOut(auth)
          .catch((error) => setError(error))
          .finally(() => setLoading(false));
      };

      const memoedValue = useMemo(
        () => ({
          
          user,
          loading,
          error,
          logout,
          signinWithGoogle: () => {
            setLoading(true);
            promptAsync({ showInRevents: true });
          },
        }),
        [user, loading, error]
      );


      return (
        <AuthContext.Provider value={memoedValue}>
          {!loadingInitial && children}
        </AuthContext.Provider>
      );
};

export default function useAuth() {
    return useContext(AuthContext);
}