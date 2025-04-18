import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { UserIcon, Database, Menu, X, Lock, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const SCENavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-sce-primary text-white shadow-md">
      <div className="sce-container py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img src="/logo-b.svg" alt="SCE Logo" className="h-10 w-auto" />
              <div className="ml-2">
                <span className="font-bold text-xl block">SCE Foundation</span>
                <span className="text-xs opacity-75">Secure. Control. Explore</span>
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/documents" className="hover:text-sce-accent transition-colors">
              Документы
            </Link>
            <Link to="/personnel" className="hover:text-sce-accent transition-colors">
              Сотрудники
            </Link>
            <Link to="/operations" className="hover:text-sce-accent transition-colors">
              Операции
            </Link>
            <Link to="/anomalies" className="hover:text-sce-accent transition-colors">
              Аномалии
            </Link>

            {user ? (
              <div className="flex items-center ml-4 space-x-2">
                <Link to="/profile" className="flex items-center">
                  <span className="clearance-badge clearance-5 mr-2">Уровень 5</span>
                  <UserIcon className="h-5 w-5 mr-1" />
                  <span>{user.name}</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={logout}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="default" className="bg-sce-accent hover:bg-sce-secondary">
                  <Lock className="h-5 w-5 mr-1" />
                  Авторизация
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-700">
            <div className="space-y-3">
              <Link
                to="/documents"
                className="block hover:text-sce-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Документы
              </Link>
              <Link
                to="/personnel"
                className="block hover:text-sce-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Сотрудники
              </Link>
              <Link
                to="/operations"
                className="block hover:text-sce-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Операции
              </Link>
              <Link
                to="/anomalies"
                className="block hover:text-sce-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Аномалии
              </Link>

              {user ? (
                <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                  <Link to="/profile" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <span className="clearance-badge clearance-5 mr-2">Уровень 5</span>
                    <UserIcon className="h-5 w-5 mr-1" />
                    <span>{user.name}</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={logout}>
                    <LogOut className="h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <Link to="/login" className="block pt-3 border-t border-gray-700" onClick={() => setIsOpen(false)}>
                  <Button variant="default" className="w-full bg-sce-accent hover:bg-sce-secondary">
                    <Lock className="h-5 w-5 mr-1" />
                    Авторизация
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SCENavbar;
