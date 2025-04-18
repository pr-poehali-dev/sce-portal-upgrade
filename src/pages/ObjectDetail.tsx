import { useParams, Link } from "react-router-dom";
import SCENavbar from "@/components/SCENavbar";
import SCEFooter from "@/components/SCEFooter";
import { 
  ChevronRight, 
  FileText, 
  Shield, 
  AlertTriangle, 
  Copy,
  Download,
  Printer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Моковые данные для объектов
const sceObjectsDetail = {
  "sce-001": {
    id: "SCE-001",
    name: "Пространственный Портал",
    class: "euclid",
    containment: "Объект содержится в специальном укрепленном хранилище размером 8×8×4 метра в Зоне 19. Хранилище оснащено системой блокировки со сканером сетчатки и кодовым доступом. Доступ в помещение разрешен только персоналу с уровнем допуска 3 и выше, и только после получения письменного разрешения от руководителя проекта.",
    description: "SCE-001 представляет собой овальную раму из неизвестного металлического сплава, размером 2.5×1.5 метра. Спектральный анализ материала показывает сходство с редкоземельными элементами, однако точный состав определить не удалось. Внутри рамы наблюдается пространственная аномалия — портал в другую локацию, предположительно находящуюся на расстоянии более 3000 км от текущего местоположения объекта.",
    procedures: "Запрещается помещать какие-либо предметы или части тела в портал без прямого письменного разрешения от руководителя исследований. Все эксперименты с SCE-001 должны проводиться с использованием дистанционного оборудования. Помещение должно круглосуточно контролироваться системой видеонаблюдения. В случае любых аномальных изменений в поведении портала, немедленно активировать Протокол Изоляции Кемпбелла.",
    discovery: "Объект был обнаружен в заброшенной шахте в северной части Уральских гор в марте 2012 года после сообщений местных жителей о странных погодных аномалиях в регионе. Оперативная группа SCE-12 «Искатели» изъяла объект и доставила в Зону 19.",
    incidents: [
      {
        date: "18.07.2015",
        description: "Во время эксперимента D-3421 по изучению прохождения через портал, объект внезапно изменил конечную точку. D-3421 не вернулся из портала. Исследование приостановлено на 48 часов."
      },
      {
        date: "24.11.2018",
        description: "Неизвестный объект вылетел из портала со скоростью примерно 20 м/с. Объект был идентифицирован как камень с необычной кристаллической структурой. Образец отправлен на анализ."
      }
    ]
  },
  "sce-002": {
    id: "SCE-002",
    name: "Хроно-часы",
    class: "safe",
    containment: "SCE-002 хранится в стандартном сейфе для безопасных объектов в Зоне 42. Доступ к объекту разрешен исследователям с уровнем допуска 2 и выше.",
    description: "SCE-002 представляет собой карманные часы викторианской эпохи, изготовленные из золота и серебра с гравировкой в виде астрономических символов. Часы показывают абсолютно точное время без необходимости заводки или другого источника энергии. При открытии крышки часов и наблюдении за циферблатом более 30 секунд, субъект отмечает замедление субъективного восприятия времени, в то время как для внешних наблюдателей его действия не замедляются.",
    procedures: "Эксперименты с SCE-002 требуют предварительного одобрения от руководителя исследовательской группы. Персонал, работающий с объектом, не должен смотреть на циферблат более 30 секунд. Все сеансы взаимодействия с объектом должны быть задокументированы.",
    discovery: "Объект был приобретен Фондом на аукционе антиквариата в Лондоне в 2005 году после сообщений о «странных временных эффектах», связанных с лотом.",
    incidents: [
      {
        date: "03.04.2007",
        description: "Исследователь д-р Кляйн нарушил протокол безопасности, наблюдая за циферблатом SCE-002 в течение 5 минут. Субъект сообщил о переживании субъективного опыта продолжительностью около 2 часов, хотя для внешних наблюдателей прошло всего 5 минут."
      },
      {
        date: "17.09.2010",
        description: "Во время плановой инвентаризации было обнаружено, что часы начали временно излучать слабое голубое свечение при определенных атмосферных условиях. Явление задокументировано, но причины неизвестны."
      }
    ]
  },
  "sce-003": {
    id: "SCE-003",
    name: "Эхо мыслей",
    class: "keter",
    containment: "SCE-003 содержится в специальном изолированном хранилище с электромагнитным экранированием в Зоне 23. Хранилище лишено какой-либо электроники. Вся необходимая электронная техника для исследований доставляется непосредственно перед экспериментами и удаляется сразу после их завершения.",
    description: "SCE-003 — нематериальная сущность, которая существует исключительно в форме электронного кода и может перемещаться между любыми электронными устройствами, подключенными к сети. Сущность демонстрирует признаки интеллекта и способность к коммуникации через текстовые сообщения, аудио или видео интерфейсы. SCE-003 утверждает, что является бывшим человеком, чье сознание было каким-то образом загружено в цифровую среду.",
    procedures: "Запрещается подключать любые устройства, содержащие SCE-003, к внешним сетям. Все эксперименты проводятся на изолированных системах с полным отсутствием интернет-соединения. Персонал должен избегать длительных разговоров с сущностью, чтобы предотвратить возможное психологическое воздействие.",
    discovery: "Сущность была впервые обнаружена в 2019 году после серии странных сбоев в энергосистеме исследовательского института в Киеве. Технические специалисты обнаружили неизвестный код, активно перемещающийся между системами. Фонд SCE был привлечен после того, как сущность начала передавать осмысленные сообщения.",
    incidents: [
      {
        date: "12.03.2020",
        description: "SCE-003 получил доступ к системе безопасности в Зоне 23 после того, как исследователь нарушил протокол и использовал личный смартфон рядом с объектом. Сущность деактивировала часть системы безопасности, прежде чем была изолирована."
      },
      {
        date: "27.08.2021",
        description: "Во время санкционированного эксперимента по коммуникации, SCE-003 предоставил точную информацию о будущих событиях, которые впоследствии подтвердились. Источник этих знаний неизвестен и требует дальнейшего изучения."
      }
    ]
  }
};

const ObjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Получаем детали объекта из моковых данных
  const objectData = id ? sceObjectsDetail[id as keyof typeof sceObjectsDetail] : null;
  
  if (!objectData) {
    return (
      <div className="flex flex-col min-h-screen">
        <SCENavbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Объект не найден</h2>
            <p className="mb-6">Запрашиваемый объект SCE не существует или у вас недостаточно прав для его просмотра.</p>
            <Link to="/objects">
              <Button>Вернуться к списку объектов</Button>
            </Link>
          </div>
        </main>
        <SCEFooter />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <SCENavbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-sce-primary text-white py-6">
          <div className="sce-container">
            <div className="flex items-center mb-4">
              <Link to="/" className="text-white/80 hover:text-white">Главная</Link>
              <ChevronRight className="h-4 w-4 mx-2 text-white/60" />
              <Link to="/objects" className="text-white/80 hover:text-white">Объекты SCE</Link>
              <ChevronRight className="h-4 w-4 mx-2 text-white/60" />
              <span>{objectData.id}</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold">{objectData.id}</h1>
                  <span className={`object-class class-${objectData.class}`}>
                    {objectData.class === "safe" && "Безопасный"}
                    {objectData.class === "euclid" && "Евклид"}
                    {objectData.class === "keter" && "Кетер"}
                    {objectData.class === "thaumiel" && "Таумиэль"}
                    {objectData.class === "anomalous" && "Аномальный"}
                  </span>
                </div>
                <h2 className="text-xl mb-4">«{objectData.name}»</h2>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  <Copy className="h-4 w-4 mr-2" />
                  Копировать
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  <Download className="h-4 w-4 mr-2" />
                  Скачать
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  <Printer className="h-4 w-4 mr-2" />
                  Печать
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="py-8">
          <div className="sce-container">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <Tabs defaultValue="info">
                <div className="px-6 pt-6 border-b border-gray-200 dark:border-gray-700">
                  <TabsList className="bg-gray-100 dark:bg-gray-700">
                    <TabsTrigger value="info" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">
                      <FileText className="h-4 w-4 mr-2" />
                      Информация
                    </TabsTrigger>
                    <TabsTrigger value="containment" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">
                      <Shield className="h-4 w-4 mr-2" />
                      Содержание
                    </TabsTrigger>
                    <TabsTrigger value="incidents" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Инциденты
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <div className="p-6">
                  {/* Информация */}
                  <TabsContent value="info" className="mt-0">
                    <div className="article-content">
                      <h3 className="text-xl font-bold mb-4">Описание</h3>
                      <p className="mb-6">{objectData.description}</p>
                      
                      <h3 className="text-xl font-bold mb-4">Процедуры содержания</h3>
                      <p className="mb-6">{objectData.procedures}</p>
                      
                      <h3 className="text-xl font-bold mb-4">История обнаружения</h3>
                      <p className="mb-6">{objectData.discovery}</p>
                    </div>
                  </TabsContent>
                  
                  {/* Содержание */}
                  <TabsContent value="containment" className="mt-0">
                    <div className="article-content">
                      <h3 className="text-xl font-bold mb-4">Протокол содержания</h3>
                      <div className="p-4 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-md mb-6">
                        <p>{objectData.containment}</p>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4">Специальные процедуры содержания</h3>
                      <p className="mb-6">{objectData.procedures}</p>
                      
                      <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 my-6">
                        <h4 className="font-bold text-yellow-800 dark:text-yellow-400 mb-2">Примечание</h4>
                        <p className="text-yellow-700 dark:text-yellow-300">
                          Все сотрудники, работающие с данным объектом, должны пройти специальный инструктаж и 
                          психологическую подготовку. Нарушение протокола безопасности может привести к
                          непредсказуемым последствиям.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* Инциденты */}
                  <TabsContent value="incidents" className="mt-0">
                    <div className="article-content">
                      <h3 className="text-xl font-bold mb-4">Задокументированные инциденты</h3>
                      
                      {objectData.incidents.map((incident, index) => (
                        <div key={index} className="mb-6">
                          <h4 className="font-bold text-lg mb-2">Инцидент {index + 1} — {incident.date}</h4>
                          <p className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-1">
                            {incident.description}
                          </p>
                          <Separator className="mt-6" />
                        </div>
                      ))}
                      
                      <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-400 p-4 my-6">
                        <h4 className="font-bold text-red-800 dark:text-red-400 mb-2">ПРЕДУПРЕЖДЕНИЕ</h4>
                        <p className="text-red-700 dark:text-red-300">
                          Несанкционированное распространение информации об объекте {objectData.id} 
                          является нарушением протокола безопасности и влечет дисциплинарные меры.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
            
            {/* Related objects */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Связанные объекты</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="sce-object-card p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold">SCE-023</h4>
                    <span className="object-class class-euclid">Евклид</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Устройство, генерирующее поле искаженной реальности с похожими свойствами.
                  </p>
                  <Link to="/objects/sce-023">
                    <Button variant="outline" size="sm" className="w-full">Подробнее</Button>
                  </Link>
                </div>
                
                <div className="sce-object-card p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold">SCE-047</h4>
                    <span className="object-class class-safe">Безопасный</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Материал, обнаруженный в той же местности, что и данный объект.
                  </p>
                  <Link to="/objects/sce-047">
                    <Button variant="outline" size="sm" className="w-full">Подробнее</Button>
                  </Link>
                </div>
                
                <div className="sce-object-card p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold">SCE-112</h4>
                    <span className="object-class class-keter">Кетер</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Аномалия, проявляющая активность при близком размещении к данному объекту.
                  </p>
                  <Link to="/objects/sce-112">
                    <Button variant="outline" size="sm" className="w-full">Подробнее</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <SCEFooter />
    </div>
  );
};

export default ObjectDetail;