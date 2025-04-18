import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
import SCENavbar from "@/components/SCENavbar";
import SCEFooter from "@/components/SCEFooter";
import { useAuth } from "@/hooks/useAuth";

const AccessDenied = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <SCENavbar />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-lg p-8">
          <ShieldAlert className="h-20 w-20 mx-auto mb-6 text-sce-accent" />
          <h1 className="text-3xl font-bold mb-4">Доступ запрещен</h1>
          <p className="mb-6">
            Ваш текущий уровень допуска ({user?.clearanceLevel || 0}) 
            недостаточен для просмотра запрашиваемой информации.
          </p>
          <p className="mb-8 text-sm opacity-80">
            Обратитесь к администратору системы для повышения уровня допуска или 
            запросите специальное разрешение на доступ к этим данным.
          </p>
          <Link to="/">
            <Button className="bg-sce-accent hover:bg-sce-secondary">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </main>
      
      <SCEFooter />
    </div>
  );
};

export default AccessDenied;