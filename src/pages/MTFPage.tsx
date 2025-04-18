import { useEffect } from "react";
import SCENavbar from "@/components/SCENavbar";
import SCEFooter from "@/components/SCEFooter";
import MTFCard from "@/components/MTFCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Users } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

// Данные о мобильных оперативных группах
const mtfGroups = [
  {
    id: "Альфа-9",
    name: "Н-МОГ Альфа-9",
    codeName: "Последняя Надежда",
    description: "Группа, специализирующаяся на сдерживании и нейтрализации особо опасных Кетер-объектов, когда все остальные методы не дали результата.",
    specialization: "Кетер-класс объекты, технологически продвинутые аномалии",
    philosophy: "Философия самопожертвования: Альфа-9 придерживается кодекса, согласно которому жизнь оператора не имеет значения по сравнению с безопасностью человечества.",
    equipment: "Используют артефакты, которые усиливают их физические способности или позволяют им временно становиться невидимыми.",
    operations: ["Протокол экстренной нейтрализации K-20407-AL9"]
  },
  {
    id: "Бета-4",
    name: "Н-МОГ Бета-4",
    codeName: "Разбитые Алмихики",
    description: "Группа, занимающаяся исследованием и нейтрализацией аномалий религиозного и оккультного происхождения.",
    specialization: "Религиозные артефакты, сверхъестественные сущности, ритуалы",
    philosophy: "Каждый член группы проходит обучение в различных религиозных и оккультных традициях, включая шаманизм и алхимию.",
    equipment: "Ритуальные артефакты, защитные амулеты, специализированное оборудование для обнаружения сверхъестественной активности.",
    operations: ["Ритуалы изоляции по протоколу R-2020-B4"]
  },
  {
    id: "Гамма-13",
    name: "Н-МОГ Гамма-13",
    codeName: "Дикая Охота",
    description: "Мобильная группа, специализирующаяся на выслеживании и захвате неуловимых аномальных сущностей в полевых условиях.",
    specialization: "Преследование, захват и транспортировка мобильных аномалий",
    philosophy: "Члены группы обучены использовать нестандартные методы реагирования на экстренные ситуации, включая импровизацию и рискованные маневры.",
    equipment: "Высокотехнологичное оборудование для слежения, нелетальное оружие, специальные средства сдерживания.",
    operations: ["Шаблон предсказания RP-0971-G13"]
  },
  {
    id: "Дельта-6",
    name: "Н-МОГ Дельта-6",
    codeName: "Дух Волка",
    description: "Группа, занимающаяся защитой от меметических и когнитивных угроз, а также разработкой методов противодействия им.",
    specialization: "Когнитивные и меметические угрозы, психологические аномалии",
    philosophy: "Участники проходят углубленное обучение в области психологии и нейробиологии, что позволяет им лучше понимать когнитивные угрозы.",
    equipment: "Противомеметическое оборудование, средства защиты сознания, специализированные препараты для сохранения ясности мышления.",
    operations: ["Меморандум оценки воздействия P-4620-D6"]
  },
  {
    id: "Эпсилон-7",
    name: "Н-МОГ Эпсилон-7",
    codeName: "Гадюка",
    description: "Группа, специализирующаяся на проведении тайных операций, дезинформации и манипуляции общественным мнением для сокрытия аномальных явлений.",
    specialization: "Связи с общественностью, дезинформация, подавление информации",
    philosophy: "Члены группы проходят обучение в области социологии, психологии и медиапроизводства, что позволяет им эффективно манипулировать общественным мнением.",
    equipment: "Средства для создания ложных доказательств, высокотехнологичное оборудование для наблюдения и слежки, различные маскировки.",
    operations: ["Оперативный отчёт по развертыванию S-3147-E7"]
  },
  {
    id: "Дзета-1",
    name: "Н-МОГ Дзета-1",
    codeName: "Стражи Протокола",
    description: "Группа, отвечающая за разработку и внедрение протоколов безопасности при работе с аномальными объектами и явлениями.",
    specialization: "Протоколы безопасности, исследовательские методики, аномальные материалы",
    philosophy: "В состав группы входят специалисты из различных областей — биологи, химики, историки и программисты — что позволяет им всесторонне исследовать аномалии.",
    equipment: "Специализированное оборудование для безопасной работы с аномалиями, инструменты для анализа и измерения аномальных свойств.",
    operations: ["Протокол безопасности T-4588-Z1"]
  },
  {
    id: "Эта-3",
    name: "Н-МОГ Эта-3",
    codeName: "Бегущие По Краю",
    description: "Группа исследователей, занимающихся изучением пограничных состояний реальности и аномалий пространства-времени.",
    specialization: "Аномалии пространства-времени, альтернативные реальности",
    philosophy: "Используют нестандартные научные подходы, такие как квантовая механика и теория хаоса, чтобы взаимодействовать с аномалиями.",
    equipment: "Экспериментальные устройства для измерения и воздействия на пространство-время, специальные защитные костюмы для работы в искаженных реальностях.",
    operations: ["Протокол опасного эксперимента X-0924-E3"]
  },
  {
    id: "Тета-12",
    name: "Н-МОГ Тета-12",
    codeName: "Монах",
    description: "Группа специалистов по архаическим и аномальным знаниям, фокусирующаяся на расшифровке и интерпретации древних текстов и артефактов.",
    specialization: "Древние языки, архаические знания, аномальные тексты",
    philosophy: "Участники обладают глубокими знаниями о древних языках и символах, что позволяет им расшифровывать сложные аномальные тексты и находить скрытые значения.",
    equipment: "Обширные библиотеки древних текстов, специализированные инструменты для перевода и анализа символов, защитные средства против опасных текстов.",
    operations: ["Операция по изучению аномалии Z-3070-T12"]
  }
];

const MTFPage = () => {
  const { user } = useAuth();
  
  // Если пользователь не авторизован, перенаправляем на страницу входа
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  // Прокрутка наверх при загрузке страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <SCENavbar />
      
      <main className="flex-grow py-8">
        <div className="sce-container">
          <div className="flex items-center mb-8">
            <Shield className="h-8 w-8 text-sce-accent mr-3" />
            <div>
              <h1 className="text-3xl font-bold">Научные Мобильные Оперативные Группы</h1>
              <p className="text-muted-foreground">
                Специализированные подразделения для исследования и сдерживания аномалий
              </p>
            </div>
          </div>
          
          <div className="mb-8 p-6 bg-sce-light dark:bg-sce-dark rounded-lg border border-border">
            <div className="flex items-start mb-4">
              <Users className="h-6 w-6 text-sce-accent mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2">О Научных МОГ</h2>
                <p>
                  Научные Мобильные Оперативные Группы (Н-МОГ) — элитные подразделения SCE Foundation, 
                  состоящие из высококвалифицированных специалистов с различными навыками и опытом. 
                  Каждая группа имеет свою специализацию и предназначена для решения конкретных задач, 
                  связанных с исследованием, сдерживанием и нейтрализацией аномальных объектов и явлений.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-white dark:bg-sce-primary rounded">
                <h3 className="font-semibold mb-1">Подготовка</h3>
                <p>Члены Н-МОГ проходят интенсивную подготовку в своих областях специализации, включая как теоретические знания, так и практические навыки.</p>
              </div>
              <div className="p-3 bg-white dark:bg-sce-primary rounded">
                <h3 className="font-semibold mb-1">Оснащение</h3>
                <p>Группы оснащены специализированным оборудованием и иногда используют безопасные аномальные артефакты для выполнения своих задач.</p>
              </div>
              <div className="p-3 bg-white dark:bg-sce-primary rounded">
                <h3 className="font-semibold mb-1">Субординация</h3>
                <p>Каждая Н-МОГ подчиняется директору соответствующего подразделения и работает в тесном сотрудничестве с исследовательским отделом.</p>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="overview" className="mb-6">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Обзор групп</TabsTrigger>
              <TabsTrigger value="details">Детальная информация</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mtfGroups.map((group) => (
                  <MTFCard
                    key={group.id}
                    id={group.id}
                    name={group.name}
                    codeName={group.codeName}
                    description={group.description}
                    specialization={group.specialization}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="details">
              <div className="space-y-6">
                {mtfGroups.map((group) => (
                  <div key={group.id} className="p-6 bg-white dark:bg-sce-dark rounded-lg border border-border">
                    <div className="flex items-center mb-4">
                      <Shield className="h-6 w-6 text-sce-accent mr-3" />
                      <h2 className="text-xl font-bold">{group.name} <span className="font-normal text-muted-foreground">"{group.codeName}"</span></h2>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Описание</h3>
                        <p className="mb-4">{group.description}</p>
                        
                        <h3 className="text-lg font-semibold mb-2">Специализация</h3>
                        <p className="mb-4">{group.specialization}</p>
                        
                        <h3 className="text-lg font-semibold mb-2">Философия</h3>
                        <p>{group.philosophy}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Оснащение</h3>
                        <p className="mb-4">{group.equipment}</p>
                        
                        <h3 className="text-lg font-semibold mb-2">Операции</h3>
                        <ul className="list-disc list-inside space-y-1">
                          {group.operations.map((op, index) => (
                            <li key={index} className="text-sce-accent font-medium">
                              {op}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <SCEFooter />
    </div>
  );
};

export default MTFPage;
