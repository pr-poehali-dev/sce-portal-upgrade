import { Link } from "react-router-dom";
import SCENavbar from "@/components/SCENavbar";
import SCEFooter from "@/components/SCEFooter";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Users, 
  Shield, 
  AlertTriangle, 
  Star, 
  Clock, 
  ArrowRight 
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SCENavbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-sce-primary text-white py-16">
          <div className="sce-container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Фонд SCE
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Secure. Control. Explore. Защита человечества от необъяснимого и исследование тайн за пределами нормального.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/objects">
                  <Button className="bg-white text-sce-primary hover:bg-gray-100">
                    Объекты SCE
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Авторизация персонала
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Latest Objects Section */}
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="sce-container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Последние объекты SCE</h2>
              <Link to="/objects" className="text-sce-accent flex items-center">
                Все объекты <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* SCE Object Card 1 */}
              <div className="sce-object-card overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">SCE-001</h3>
                    <span className="object-class class-euclid">Евклид</span>
                  </div>
                  <h4 className="font-medium mb-3">«Пространственный Портал»</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Аномальный проход, соединяющий два удаленных местоположения через измерение, не соответствующее известным законам физики.
                  </p>
                  <Link to="/objects/sce-001">
                    <Button variant="outline" className="w-full">
                      Полное досье
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* SCE Object Card 2 */}
              <div className="sce-object-card overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">SCE-002</h3>
                    <span className="object-class class-safe">Безопасный</span>
                  </div>
                  <h4 className="font-medium mb-3">«Хроно-часы»</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Карманные часы, показывающие время с абсолютной точностью и способные замедлять субъективное восприятие времени наблюдателем.
                  </p>
                  <Link to="/objects/sce-002">
                    <Button variant="outline" className="w-full">
                      Полное досье
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* SCE Object Card 3 */}
              <div className="sce-object-card overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">SCE-003</h3>
                    <span className="object-class class-keter">Кетер</span>
                  </div>
                  <h4 className="font-medium mb-3">«Эхо мыслей»</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Нематериальная сущность, способная вселяться в электронные устройства и передавать собственное сознание через них.
                  </p>
                  <Link to="/objects/sce-003">
                    <Button variant="outline" className="w-full">
                      Полное досье
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-12">
          <div className="sce-container">
            <h2 className="text-2xl font-bold mb-8 text-center">Разделы базы данных</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Objects Section */}
              <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Объекты SCE</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  База данных аномальных объектов, находящихся под наблюдением и контролем Фонда.
                </p>
                <Link to="/objects">
                  <Button variant="outline" className="w-full">
                    Просмотр
                  </Button>
                </Link>
              </div>
              
              {/* Personnel Section */}
              <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600 dark:text-green-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Персонал</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Сотрудники Фонда, их должности, классификация и уровни допуска.
                </p>
                <Link to="/personnel">
                  <Button variant="outline" className="w-full">
                    Просмотр
                  </Button>
                </Link>
              </div>
              
              {/* Operations Section */}
              <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Операции</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Активные и завершенные операции Фонда по сдерживанию аномалий и защите человечества.
                </p>
                <Link to="/operations">
                  <Button variant="outline" className="w-full">
                    Просмотр
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* News Section */}
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="sce-container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Последние события</h2>
              <Link to="/news" className="text-sce-accent flex items-center">
                Все новости <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="space-y-6">
              {/* News Item 1 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3">
                  <Clock className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-500">15 ноября 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Обнаружен новый объект SCE-078</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Недавно обнаруженный объект класса Евклид переведен на постоянное содержание в Зоне 19. Исследовательская группа изучает необычные пространственные свойства.
                </p>
                <Link to="/news/1">
                  <Button variant="link" className="px-0">
                    Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              {/* News Item 2 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3">
                  <Clock className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-500">3 ноября 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Операция "Синий Горизонт" успешно завершена</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Мобильная оперативная группа "Альфа-7" успешно выполнила операцию по сдерживанию аномального явления в северном регионе. Все агенты вернулись без потерь.
                </p>
                <Link to="/news/2">
                  <Button variant="link" className="px-0">
                    Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <SCEFooter />
    </div>
  );
};

export default HomePage;