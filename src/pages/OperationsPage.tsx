import { useState } from "react";
import { Link } from "react-router-dom";
import SCENavbar from "@/components/SCENavbar";
import SCEFooter from "@/components/SCEFooter";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Filter, 
  ChevronRight,
  Calendar,
  Check,
  Clock,
  ShieldAlert,
  Users,
  MapPin
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
import { Progress } from "@/components/ui/progress";

// Моковые данные операций
const operationsData = [
  {
    id: "op-001",
    name: "Синий Горизонт",
    status: "completed", // completed, ongoing, planned
    type: "recovery",
    startDate: "23.10.2023",
    endDate: "30.10.2023",
    location: "Северная Карелия, Россия",
    team: "МОГ Альфа-7",
    description: "Операция по обнаружению и изъятию аномального объекта класса Евклид в отдаленной лесной местности.",
    progress: 100,
    risk: "high"
  },
  {
    id: "op-002",
    name: "Ночной Дозор",
    status: "ongoing",
    type: "containment",
    startDate: "15.11.2023",
    endDate: null,
    location: "Западная Сибирь",
    team: "МОГ Бета-4",
    description: "Операция по сдерживанию аномального явления, вызывающего пространственно-временные искажения.",
    progress: 45,
    risk: "medium"
  },
  {
    id: "op-003",
    name: "Серебряный Щит",
    status: "planned",
    type: "containment",
    startDate: "05.12.2023",
    endDate: null,
    location: "Москва, Россия",
    team: "МОГ Дельта-3",
    description: "Планируемая операция по созданию защитного периметра вокруг зоны аномальной активности в городской черте.",
    progress: 0,
    risk: "high"
  },
  {
    id: "op-004",
    name: "Белый Ворон",
    status: "ongoing",
    type: "research",
    startDate: "08.09.2023",
    endDate: null,
    location: "Казань, Россия",
    team: "Научная группа Омега-2",
    description: "Исследовательская операция для изучения аномальных свойств объекта SCE-042.",
    progress: 78,
    risk: "low"
  },
  {
    id: "op-005",
    name: "Красная Стрела",
    status: "completed",
    type: "recovery",
    startDate: "30.07.2023",
    endDate: "02.08.2023",
    location: "Алтай, Россия",
    team: "МОГ Эпс-9",
    description: "Экстренная операция по извлечению нестабильного аномального артефакта.",
    progress: 100,
    risk: "high"
  },
  {
    id: "op-006",
    name: "Тихий Шепот",
    status: "planned",
    type: "research",
    startDate: "12.12.2023",
    endDate: null,
    location: "Санкт-Петербург, Россия",
    team: "Научная группа Тау-1",
    description: "Планируемое исследование акустической аномалии, обнаруженной в историческом здании.",
    progress: 0,
    risk: "medium"
  },
  {
    id: "op-007",
    name: "Черный Лед",
    status: "ongoing",
    type: "containment",
    startDate: "21.10.2023",
    endDate: null,
    location: "Байкал, Россия",
    team: "МОГ Гамма-5",
    description: "Операция по сдерживанию аномальной зоны замерзания в озере Байкал.",
    progress: 35,
    risk: "high"
  },
  {
    id: "op-008",
    name: "Золотой Ключ",
    status: "completed",
    type: "recovery",
    startDate: "05.06.2023",
    endDate: "09.06.2023",
    location: "Владивосток, Россия",
    team: "МОГ Зета-3",
    description: "Операция по извлечению древнего артефакта из морских глубин.",
    progress: 100,
    risk: "medium"
  },
  {
    id: "op-009",
    name: "Зеленая Игла",
    status: "planned",
    type: "containment",
    startDate: "20.12.2023",
    endDate: null,
    location: "Краснодар, Россия",
    team: "МОГ Бета-2",
    description: "Планируемая операция по сдерживанию аномальной растительности.",
    progress: 0,
    risk: "medium"
  }
];

// Вспомогательные функции для отображения статуса и типа операции
const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge className="bg-green-500">Завершена</Badge>;
    case "ongoing":
      return <Badge className="bg-blue-500">В процессе</Badge>;
    case "planned":
      return <Badge className="bg-gray-500">Запланирована</Badge>;
    default:
      return <Badge>Неизвестно</Badge>;
  }
};

const getTypeBadge = (type: string) => {
  switch (type) {
    case "recovery":
      return <Badge variant="outline" className="border-amber-500 text-amber-500">Извлечение</Badge>;
    case "containment":
      return <Badge variant="outline" className="border-red-500 text-red-500">Сдерживание</Badge>;
    case "research":
      return <Badge variant="outline" className="border-blue-500 text-blue-500">Исследование</Badge>;
    default:
      return <Badge variant="outline">Прочее</Badge>;
  }
};

const getRiskBadge = (risk: string) => {
  switch (risk) {
    case "low":
      return <Badge className="bg-green-500">Низкий</Badge>;
    case "medium":
      return <Badge className="bg-yellow-500">Средний</Badge>;
    case "high":
      return <Badge className="bg-red-500">Высокий</Badge>;
    default:
      return <Badge>Неизвестно</Badge>;
  }
};

const OperationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  
  // Фильтрация операций 
  const filteredOperations = operationsData.filter(operation => {
    const matchesSearch = 
      operation.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      operation.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
      operation.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      operation.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesStatus = selectedStatus ? operation.status === selectedStatus : true;
    const matchesType = selectedType ? operation.type === selectedType : true;
    
    return matchesSearch && matchesStatus && matchesType;
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
              <span>Операции</span>
            </div>
            <h1 className="text-3xl font-bold mb-4">Операции Фонда SCE</h1>
            <p className="text-lg opacity-90 max-w-3xl">
              Информация о текущих, завершенных и запланированных операциях по исследованию, сдерживанию и извлечению аномалий.
            </p>
          </div>
        </div>
        
        {/* Filters Section */}
        <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="sce-container py-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-grow">
                <Input 
                  placeholder="Поиск по названию, команде или местоположению..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-44">
                  <Select onValueChange={(value) => setSelectedStatus(value === "all" ? null : value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Статус" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Статус</SelectLabel>
                        <SelectItem value="all">Все статусы</SelectItem>
                        <SelectItem value="completed">Завершенные</SelectItem>
                        <SelectItem value="ongoing">В процессе</SelectItem>
                        <SelectItem value="planned">Запланированные</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="w-44">
                  <Select onValueChange={(value) => setSelectedType(value === "all" ? null : value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Тип операции" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Тип операции</SelectLabel>
                        <SelectItem value="all">Все типы</SelectItem>
                        <SelectItem value="recovery">Извлечение</SelectItem>
                        <SelectItem value="containment">Сдерживание</SelectItem>
                        <SelectItem value="research">Исследование</SelectItem>
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
        
        {/* Operations List */}
        <div className="py-8">
          <div className="sce-container">
            <div className="mb-4">
              <p className="text-gray-600 dark:text-gray-400">
                Найдено {filteredOperations.length} операций
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredOperations.map((operation) => (
                <div key={operation.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{operation.name}</h3>
                    <div className="flex space-x-2">
                      {getStatusBadge(operation.status)}
                      {getTypeBadge(operation.type)}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{operation.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">
                        {operation.startDate} {operation.endDate ? `- ${operation.endDate}` : ''}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">{operation.team}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">{operation.location}</span>
                    </div>
                    <div className="flex items-center">
                      <ShieldAlert className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm">Уровень риска: {getRiskBadge(operation.risk)}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Прогресс</span>
                      <span className="text-sm font-medium">{operation.progress}%</span>
                    </div>
                    <Progress value={operation.progress} className="h-2" />
                  </div>
                  
                  <Link to={`/operations/${operation.id}`}>
                    <Button variant="outline" className="w-full">
                      Подробная информация
                    </Button>
                  </Link>
                </div>
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

export default OperationsPage;