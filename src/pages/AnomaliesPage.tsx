import { useState } from "react";
import { Link } from "react-router-dom";
import SCENavbar from "@/components/SCENavbar";
import SCEFooter from "@/components/SCEFooter";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Filter, 
  ChevronRight,
  AlertCircle,
  MapPin,
  Gauge,
  BrainCircuit
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Моковые данные аномалий
const anomaliesData = [
  {
    id: "a-001",
    name: "Искаженная зона №7",
    type: "spatial",
    location: "Карпатские горы, Украина",
    intensity: "high",
    discovery: "2018-05-12",
    status: "active",
    description: "Пространственная аномалия размером 300 м², где законы евклидовой геометрии не действуют. Внутри зоны наблюдаются невозможные архитектурные структуры и пространственные парадоксы."
  },
  {
    id: "a-002",
    name: "Темпоральный разлом",
    type: "temporal",
    location: "Кольский полуостров, Россия",
    intensity: "medium",
    discovery: "2012-09-24",
    status: "inactive",
    description: "Локализованная область с нестабильным течением времени. В активном состоянии создает временные петли и позволяет наблюдать фрагменты прошлого. В настоящее время находится в неактивной фазе."
  },
  {
    id: "a-003",
    name: "Биоморфный лес",
    type: "biological",
    location: "Сибирская тайга, Россия",
    intensity: "high",
    discovery: "2015-08-03",
    status: "active",
    description: "Участок леса площадью около 5 км², где растения обладают признаками сознания и способностью к перемещению. Деревья реагируют на присутствие живых существ и могут менять свое расположение."
  },
  {
    id: "a-004",
    name: "Энергетический узел",
    type: "energetic",
    location: "Побережье Балтийского моря, Польша",
    intensity: "extreme",
    discovery: "2019-11-30",
    status: "active",
    description: "Точка концентрации необъяснимой энергии, вызывающая спонтанные электромагнитные явления и влияющая на электронные устройства в радиусе 2 км. Периодически генерирует вспышки яркого света."
  },
  {
    id: "a-005",
    name: "Когнитивная слепая зона",
    type: "cognitive",
    location: "Прага, Чехия",
    intensity: "low",
    discovery: "2017-04-15",
    status: "active",
    description: "Городской район, где люди испытывают необъяснимые провалы в памяти и изменения в восприятии. Объекты внутри зоны могут быть видимы, но не запоминаются после выхода из нее."
  },
  {
    id: "a-006",
    name: "Акустический резонатор",
    type: "acoustic",
    location: "Адриатическое море, вблизи Хорватии",
    intensity: "medium",
    discovery: "2016-02-28",
    status: "inactive",
    description: "Подводная область, где звуковые волны усиливаются и трансформируются, создавая странные акустические эффекты и влияя на поведение морских животных. Активируется циклически, раз в 3 месяца."
  },
  {
    id: "a-007",
    name: "Гравитационная инверсия",
    type: "gravitational",
    location: "Горы Атлас, Марокко",
    intensity: "high",
    discovery: "2020-01-17",
    status: "active",
    description: "Область радиусом 150 метров, где гравитация периодически меняет направление, вызывая левитацию предметов и сложности с перемещением. Интенсивность эффекта возрастает при приближении к центру."
  },
  {
    id: "a-008",
    name: "Хроматическая аберрация",
    type: "visual",
    location: "Норвежские фьорды",
    intensity: "low",
    discovery: "2021-06-08",
    status: "active",
    description: "Визуальная аномалия, в пределах которой цвета объектов смещаются и искажаются, создавая психоделические эффекты. Воздействует только на зрительное восприятие, не изменяя физические свойства объектов."
  },
  {
    id: "a-009",
    name: "Электромагнитная воронка",
    type: "electromagnetic",
    location: "Исландия, вблизи вулкана Эйяфьядлайёкюдль",
    intensity: "extreme",
    discovery: "2014-10-22",
    status: "active",
    description: "Постоянно вращающийся электромагнитный вихрь, создающий помехи для любых электронных устройств и притягивающий металлические предметы к своему центру. Связан с геотермальной активностью в регионе."
  }
];

// Вспомогательные функции для отображения типа и интенсивности
const getTypeBadge = (type: string) => {
  switch (type) {
    case "spatial":
      return <Badge variant="outline" className="border-purple-500 text-purple-500">Пространственная</Badge>;
    case "temporal":
      return <Badge variant="outline" className="border-blue-500 text-blue-500">Временная</Badge>;
    case "biological":
      return <Badge variant="outline" className="border-green-500 text-green-500">Биологическая</Badge>;
    case "energetic":
      return <Badge variant="outline" className="border-orange-500 text-orange-500">Энергетическая</Badge>;
    case "cognitive":
      return <Badge variant="outline" className="border-red-500 text-red-500">Когнитивная</Badge>;
    case "acoustic":
      return <Badge variant="outline" className="border-cyan-500 text-cyan-500">Акустическая</Badge>;
    case "gravitational":
      return <Badge variant="outline" className="border-amber-500 text-amber-500">Гравитационная</Badge>;
    case "visual":
      return <Badge variant="outline" className="border-indigo-500 text-indigo-500">Визуальная</Badge>;
    case "electromagnetic":
      return <Badge variant="outline" className="border-yellow-500 text-yellow-500">Электромагнитная</Badge>;
    default:
      return <Badge variant="outline">Неизвестно</Badge>;
  }
};

const getIntensityBadge = (intensity: string) => {
  switch (intensity) {
    case "low":
      return <Badge className="bg-green-500">Низкая</Badge>;
    case "medium":
      return <Badge className="bg-yellow-500">Средняя</Badge>;
    case "high":
      return <Badge className="bg-orange-500">Высокая</Badge>;
    case "extreme":
      return <Badge className="bg-red-500">Экстремальная</Badge>;
    default:
      return <Badge>Неизвестно</Badge>;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-500">Активна</Badge>;
    case "inactive":
      return <Badge className="bg-gray-500">Неактивна</Badge>;
    default:
      return <Badge>Неизвестно</Badge>;
  }
};

const AnomaliesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  
  // Фильтрация аномалий 
  const filteredAnomalies = anomaliesData.filter(anomaly => {
    const matchesSearch = 
      anomaly.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      anomaly.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      anomaly.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesType = selectedType ? anomaly.type === selectedType : true;
    const matchesStatus = selectedStatus ? anomaly.status === selectedStatus : true;
    
    return matchesSearch && matchesType && matchesStatus;
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      <SCENavbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-sce-primary text-white py-8">
          <div className="sce-container">
            <div className="flex items-center mb-4">
              <Link to="/" className="text-white/80 hover:text-white">Главная</Link>
              <ChevronRight className="h-4 w-4 mx-2 text-white/60" />
              <span>Аномалии</span>
            </div>
            <h1 className="text-3xl font-bold mb-4">Аномальные зоны и явления</h1>
            <p className="text-lg opacity-90 max-w-3xl">
              Каталог известных Фонду SCE аномальных областей, проявлений и феноменов.
            </p>
          </div>
        </div>
        
        {/* Filters Section */}
        <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="sce-container py-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-grow">
                <Input 
                  placeholder="Поиск по названию, местоположению или описанию..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-44">
                  <Select onValueChange={(value) => setSelectedType(value === "all" ? null : value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Тип аномалии" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Тип аномалии</SelectLabel>
                        <SelectItem value="all">Все типы</SelectItem>
                        <SelectItem value="spatial">Пространственная</SelectItem>
                        <SelectItem value="temporal">Временная</SelectItem>
                        <SelectItem value="biological">Биологическая</SelectItem>
                        <SelectItem value="energetic">Энергетическая</SelectItem>
                        <SelectItem value="cognitive">Когнитивная</SelectItem>
                        <SelectItem value="acoustic">Акустическая</SelectItem>
                        <SelectItem value="gravitational">Гравитационная</SelectItem>
                        <SelectItem value="visual">Визуальная</SelectItem>
                        <SelectItem value="electromagnetic">Электромагнитная</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="w-44">
                  <Select onValueChange={(value) => setSelectedStatus(value === "all" ? null : value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Статус" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Статус</SelectLabel>
                        <SelectItem value="all">Все статусы</SelectItem>
                        <SelectItem value="active">Активные</SelectItem>
                        <SelectItem value="inactive">Неактивные</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Фильтры
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Anomalies List */}
        <div className="py-8">
          <div className="sce-container">
            <div className="mb-4">
              <p className="text-gray-600 dark:text-gray-400">
                Найдено {filteredAnomalies.length} аномалий
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAnomalies.map((anomaly) => (
                <Card key={anomaly.id} className="overflow-hidden">
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{anomaly.name}</h3>
                      <div className="flex space-x-2">
                        {getTypeBadge(anomaly.type)}
                        {getStatusBadge(anomaly.status)}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {anomaly.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm">{anomaly.location}</span>
                      </div>
                      <div className="flex items-center">
                        <AlertCircle className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm">Обнаружено: {anomaly.discovery}</span>
                      </div>
                      <div className="flex items-center">
                        <Gauge className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm">Интенсивность: {getIntensityBadge(anomaly.intensity)}</span>
                      </div>
                      <div className="flex items-center">
                        <BrainCircuit className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm">Группа исследования: РГ-{Math.floor(Math.random() * 20) + 1}</span>
                      </div>
                    </div>
                    
                    <Link to={`/anomalies/${anomaly.id}`}>
                      <Button variant="outline" className="w-full">
                        Подробная информация
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <Button variant="outline" disabled>Предыдущая</Button>
                <Button variant="outline" className="bg-sce-primary text-white">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <span className="pagination-link flex items-center justify-center">...</span>
                <Button variant="outline">5</Button>
                <Button variant="outline">Следующая</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <SCEFooter />
    </div>
  );
};

export default AnomaliesPage;