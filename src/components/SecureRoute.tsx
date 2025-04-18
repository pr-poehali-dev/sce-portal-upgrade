import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface SecureRouteProps {
  requiredClearance?: number;
  children: React.ReactNode;
}

const SecureRoute = ({ 
  requiredClearance = 1, 
  children 
}: SecureRouteProps) => {
  const { user, hasAccess } = useAuth();
  
  // Если пользователь не авторизован, перенаправляем на страницу входа
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  // Если у пользователя недостаточный уровень доступа, показываем страницу с ошибкой
  if (!hasAccess(requiredClearance)) {
    return <Navigate to="/access-denied" replace />;
  }
  
  // Если все проверки пройдены, показываем содержимое
  return <>{children}</>;
};

export default SecureRoute;