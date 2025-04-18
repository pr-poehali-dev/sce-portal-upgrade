import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { 
  Globe, 
  Shield, 
  Book, 
  Mail, 
  Lock, 
  AlertTriangle, 
  FileBadge 
} from "lucide-react";

const SCEFooter = () => {
  return (
    <footer className="bg-sce-secondary text-white">
      <div className="sce-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1: About */}
          <div>
            <h3 className="font-bold text-lg mb-4">О Фонде SCE</h3>
            <p className="text-gray-300 text-sm mb-4">
              Фонд SCE — организация, занимающаяся обнаружением, сдерживанием и изучением аномальных объектов и явлений для защиты человечества.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Globe className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Shield className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Book className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Section 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/objects" className="hover:text-white transition-colors">
                  Объекты SCE
                </Link>
              </li>
              <li>
                <Link to="/personnel" className="hover:text-white transition-colors">
                  Персонал
                </Link>
              </li>
              <li>
                <Link to="/operations" className="hover:text-white transition-colors">
                  Операции
                </Link>
              </li>
              <li>
                <Link to="/anomalies" className="hover:text-white transition-colors">
                  Аномалии
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-white transition-colors">
                  Авторизация
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Section 3: Classification */}
          <div>
            <h3 className="font-bold text-lg mb-4">Классификация</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="object-class class-safe text-xs mr-2">Безопасный</span>
                <span>Объекты, которые легко содержать</span>
              </li>
              <li className="flex items-center">
                <span className="object-class class-euclid text-xs mr-2">Евклид</span>
                <span>Объекты с непредсказуемым поведением</span>
              </li>
              <li className="flex items-center">
                <span className="object-class class-keter text-xs mr-2">Кетер</span>
                <span>Объекты, трудные для содержания</span>
              </li>
              <li className="flex items-center">
                <span className="object-class class-thaumiel text-xs mr-2">Таумиэль</span>
                <span>Объекты, используемые Фондом</span>
              </li>
              <li className="flex items-center">
                <span className="object-class class-anomalous text-xs mr-2">Аномальный</span>
                <span>Объекты с необычными свойствами</span>
              </li>
            </ul>
          </div>
          
          {/* Section 4: Contacts */}
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5" />
                <span>secure-communications@sce-foundation.org</span>
              </li>
              <li className="flex items-start">
                <Lock className="h-5 w-5 mr-2 mt-0.5" />
                <span>Для связи требуется уровень допуска 2+</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-5 w-5 mr-2 mt-0.5" />
                <span>Экстренная линия: Код RED-7</span>
              </li>
              <li className="flex items-start">
                <FileBadge className="h-5 w-5 mr-2 mt-0.5" />
                <span>Мемохранилище: MT-7719-Alpha</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© 2023 Фонд SCE — Secure. Control. Explore. Все права защищены.</p>
          <p className="mt-1">
            Внимание: Несанкционированное распространение информации о деятельности Фонда SCE 
            карается согласно Протоколу Безопасности B-12.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SCEFooter;