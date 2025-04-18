import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface User {
  id: string;
  name: string;
  role: string;
  clearanceLevel: 1 | 2 | 3 | 4 | 5;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Загрузка пользователя из localStorage при инициализации
  useEffect(() => {
    const storedUser = localStorage.getItem("sce_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Симуляция запроса к API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Всегда удачная авторизация с уровнем доступа 5
      const userData: User = {
        id: "sce-staff-" + Math.random().toString(36).substr(2, 9),
        name: username || "Оперативник",
        role: "Исследователь",
        clearanceLevel: 5
      };

      setUser(userData);
      localStorage.setItem("sce_user", JSON.stringify(userData));
      setIsLoading(false);
      return true;
    } catch (err) {
      setError("Произошла ошибка при авторизации. Повторите попытку позже.");
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("sce_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
