import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { UserIcon, Menu, X, Lock, LogOut, Search } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "./ui/input";

const SCENavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-sce-primary text-white shadow-md">
      <div className="sce-container py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/files/9f300eaa-ffd3-4251-9d2b-fb388fe4f6a1.png" 
                alt="SCE Logo" 
                className="h-12 w-auto" 
              />
              <div className="ml-2">
                <span className="font-bold text-xl block">SCE Foundation</span>
                <span className="text-xs opacity-75">Secure. Control. Explore</span>
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative mr-4">
              <Input 
                placeholder="Поиск по базе данных..." 
                className="pl-8 pr-4 py-2 bg-white/10 border-white/20 text-white placeholder:text-white/60 w-64"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
            </div>
            
            <Link to="/objects" className="hover:text-sce-accent transition-colors">
              Объекты SCE
            </Link>
            <Link to="/personnel" className="hover:text-sce-accent transition-colors">
              Персонал
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
              <div className="relative mb-4">
                <Input 
                  placeholder="Поиск по базе данных..." 
                  className="pl-8 pr-4 py-2 bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full"
                />
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
              </div>
              
              <Link
                to="/objects"
                className="block hover:text-sce-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Объекты SCE
              </Link>
              <Link
                to="/personnel"
                className="block hover:text-sce-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Персонал
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