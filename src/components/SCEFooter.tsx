import { Link } from "react-router-dom";
import { Shield, FileText, Users, Info } from "lucide-react";

const SCEFooter = () => {
  return (
    <footer className="bg-sce-primary text-white pt-8 pb-6">
      <div className="sce-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              О Фонде
            </h3>
            <p className="text-sm opacity-80">
              SCE Foundation (Secure. Control. Explore) — организация, 
              занимающаяся изучением и сдерживанием аномальных объектов и явлений, 
              представляющих угрозу для человечества.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Разделы
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/documents" className="opacity-80 hover:opacity-100 hover:text-sce-accent transition-colors">
                  Документы
                </Link>
              </li>
              <li>
                <Link to="/anomalies" className="opacity-80 hover:opacity-100 hover:text-sce-accent transition-colors">
                  Аномалии
                </Link>
              </li>
              <li>
                <Link to="/protocols" className="opacity-80 hover:opacity-100 hover:text-sce-accent transition-colors">
                  Протоколы
                </Link>
              </li>
              <li>
                <Link to="/operations" className="opacity-80 hover:opacity-100 hover:text-sce-accent transition-colors">
                  Операции
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Персонал
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/personnel" className="opacity-80 hover:opacity-100 hover:text-sce-accent transition-colors">
                  Сотрудники
                </Link>
              </li>
              <li>
                <Link to="/mtf" className="opacity-80 hover:opacity-100 hover:text-sce-accent transition-colors">
                  Мобильные Группы
                </Link>
              </li>
              <li>
                <Link to="/departments" className="opacity-80 hover:opacity-100 hover:text-sce-accent transition-colors">
                  Отделы
                </Link>
              </li>
              <li>
                <Link to="/clearance" className="opacity-80 hover:opacity-100 hover:text-sce-accent transition-colors">
                  Уровни доступа
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Info className="h-5 w-5 mr-2" />
              Правовая информация
            </h3>
            <p className="text-sm opacity-80 mb-2">
              Вся информация на данном сайте является вымышленной и 
              предназначена исключительно для развлекательных целей.
            </p>
            <p className="text-sm opacity-80">
              SCE Foundation, 2023-2024. Все права защищены.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm opacity-70">
          <p>Уровень допуска 5 — Полный доступ ко всем секторам и документам.</p>
        </div>
      </div>
    </footer>
  );
};

export default SCEFooter;
