import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sce-light dark:bg-sce-dark">
      <div className="text-center p-6 max-w-md">
        <AlertTriangle className="h-16 w-16 text-sce-accent mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-3">Доступ запрещен</h1>
        <div className="bg-sce-primary text-white px-4 py-2 rounded-md mb-6 inline-block">
          <span className="font-mono">Код ошибки: SCE-404</span>
        </div>
        <p className="mb-6 text-lg">
          Запрашиваемая страница не существует или засекречена.
          Ваш уровень доступа не позволяет просматривать данный материал.
        </p>
        <div className="space-y-3">
          <Link to="/">
            <Button className="w-full bg-sce-accent hover:bg-sce-secondary">
              <Home className="mr-2 h-4 w-4" />
              Вернуться на главную
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground">
            Попытка несанкционированного доступа зафиксирована и передана в службу безопасности SCE Foundation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
