import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig";

export const AuthContext = createContext(null);

export default function AuthState({ children }) {
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  function registerWithFirebase() {
    const { email, password } = registerFormData;
    return createUserWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      checkAuthState();
    };
  }, []);

  console.log(user, "user");

  return (
    <AuthContext.Provider
      value={{ registerFormData, setRegisterFormData, registerWithFirebase, user,loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
