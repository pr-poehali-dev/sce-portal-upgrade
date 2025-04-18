import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SCENavbar from "@/components/SCENavbar";
import SCEFooter from "@/components/SCEFooter";
import { Shield, FileText, Users, Flask, AlertTriangle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const HomePage = () => {
  const { user } = useAuth();
  
  // Прокрутка наверх при загрузке страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <SCENavbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-sce-primary text-white py-16">
          <div className="sce-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SCE Foundation
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Secure. Control. Explore
            </p>
            <p className="max-w-3xl mx-auto mb-8 text-lg opacity-80">
              Наша миссия — изучать и сдерживать аномальные объекты и явления, 
              представляющие угрозу для безопасности человечества.
            </p>
            {!user && (
              <Link to="/login">
                <Button size="lg" className="bg-sce-accent hover:bg-sce-secondary">
                  Авторизация в системе
                </Button>
              </Link>
            )}
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white dark:bg-sce-dark">
          <div className="sce-container">
            <h2 className="text-3xl font-bold text-center mb-12">Разделы базы данных</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-sce-accent/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-sce-accent" />
                  </div>
                  <CardTitle>Документы SCE</CardTitle>
                  <CardDescription>
                    Архив документов, протоколов и отчетов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Доступ к полной базе документации по аномальным объектам, 
                    включая протоколы сдерживания и результаты исследований.
                  </p>
                  <Link to="/documents">
                    <Button variant="outline" className="w-full">Просмотр документов</Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-sce-accent/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-sce-accent" />
                  </div>
                  <CardTitle>Персонал</CardTitle>
                  <CardDescription>
                    Мобильные оперативные группы и сотрудники
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Информация о мобильных оперативных группах Фонда, 
                    их специализации и проведенных операциях.
                  </p>
                  <Link to="/personnel">
                    <Button variant="outline" className="w-full">Список персонала</Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-sce-accent/10 flex items-center justify-center mb-4">
                    <Flask className="h-6 w-6 text-sce-accent" />
                  </div>
                  <CardTitle>Аномалии</CardTitle>
                  <CardDescription>
                    Каталог аномальных объектов и явлений
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Полный каталог всех известных аномальных объектов, 
                    их классификация и особенности.
                  </p>
                  <Link to="/anomalies">
                    <Button variant="outline" className="w-full">Изучить аномалии</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Warning Section */}
        <section className="py-12 bg-sce-light dark:bg-sce-primary">
          <div className="sce-container">
            <div className="bg-white dark:bg-sce-dark p-6 rounded-lg shadow-md border border-sce-accent">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-10 w-10 text-sce-accent" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2">Предупреждение безопасности</h3>
                  <p className="mb-2">
                    Вся информация, содержащаяся в этой базе данных, строго конфиденциальна и защищена 
                    законодательством о государственной тайне.
                  </p>
                  <p>
                    Несанкционированный доступ, раскрытие или распространение данных 
                    строго запрещены и караются по всей строгости закона.
                  </p>
                </div>
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
