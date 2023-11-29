import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@UserTOKEN");
    if (!token) {
      setLoading(false);
      navigate("");
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    navigate("dashboard");
    setLoading(false);
  }, []);

  const userLogin = async (formData) => {
    try {
      const response = await api.post("/login", formData);
      const { token } = response.data;
      console.log(response);

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("@UserTOKEN", token);
      navigate("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const userRegister = async (formData) => {
    try {
      await api.post("/users", formData);
      navigate("");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@UserTOKEN");
    navigate("");
  };

  return (
    <AuthContext.Provider
      value={{ userLogin, loading, userLogout, userRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
};
