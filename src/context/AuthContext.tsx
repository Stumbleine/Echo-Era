import { createContext, useContext, useEffect, useState } from "react";
import { authenticateSpotify, getValidAccessToken } from "../api/authSpotify";
import { CircularProgress } from "@mui/material";

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const validToken = getValidAccessToken();
    if (!validToken) {
      authenticateSpotify();
    } else {
      setToken(validToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, isAuthenticated: !!token }}>
      {token ? children : <CircularProgress />}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};
