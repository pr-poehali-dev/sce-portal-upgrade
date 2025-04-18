import { useState } from "react";
import { Link } from "react-router-dom";
import SCENavbar from "@/components/SCENavbar";
import SCEFooter from "@/components/SCEFooter";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Filter, 
  ArrowUpDown,
  ChevronRight
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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const sceObjects = [
  {
    id: "sce-001",
    name: "Пространственный Портал",
    class: "euclid",
    description: "Аномальный проход, соединяющий два удаленных местоположения через измерение, не соответствующее известным законам физики."
  },
  {
    id: "sce-002",
    name: "Хроно-часы",
    class: "safe",
    description: "Карманные часы, показывающие время с абсолютной точностью и способные замедлять субъективное восприятие времени наблюдателем."
  },
  {
    id: "sce-003",
    name: "Эхо мыслей",
    class: "keter",
    description: "Нематериальная сущность, способная вселяться в электронные устройства и передавать собственное сознание через них."
  },
  {
    id: "sce-004",
    name: "Гравитационный манипулятор",
    class: "euclid",
    description: "Устройство, способное локально изменять силу гравитации в радиусе до 5 метров, потенциально приводя к созданию миниатюрных черных дыр."
  },
  {
    id: "sce-005",
    name: "Зеркало Вечности",
    class: "euclid",
    description: "Антикварное зеркало в деревянной раме, показывающее отражение мира через 50 лет в будущем."
  },
  {
    id: "sce-006",
    name: "Преобразователь материи",
    class: "keter",
    description: "Сфера из неизвестного металла, трансформирующая любой органический материал в синтетический аналог с непредсказуемыми свойствами."
  },
  {
    id: "sce-007",
    name: "Звездный компас",
    class: "safe",
    description: "Древний астрономический инструмент, указывающий путь к звездным системам, которые официально не открыты современной астрономией."
  },
  {
    id: "sce-008",
    name: "Корень памяти",
    class: "safe",
    description: "Растение, плоды которого при употреблении позволяют человеку получить доступ к генетической памяти своих предков."
  },
  {
    id: "sce-009",
    name: "Странник измерений",
    class: "keter",
    description: "Гуманоидная сущность, способная перемещаться между параллельными реальностями и приносить объекты и информацию из них."
  }
];

const ObjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  
  // Фильтрация объектов на основе поиска и выбранного класса
  const filteredObjects = sceObjects.filter(obj => {
    const matchesSearch = 
      obj.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
      obj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      obj.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesClass = selectedClass ? obj.class === selectedClass : true;
    
    return matchesSearch && matchesClass;
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
              <span>Объекты SCE</span>
            </div>
            <h1 className="text-3xl font-bold mb-4">База данных объектов SCE</h1>
            <p className="text-lg opacity-90 max-w-3xl">
              Полный архив аномальных объектов, исследуемых и содержащихся под наблюдением Фонда SCE.
            </p>
          </div>
        </div>
        
        {/* Filters Section */}
        <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="sce-container py-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-grow">
                <Input 
                  placeholder="Поиск по номеру, названию или описанию..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-44">
                  <Select onValueChange={(value) => setSelectedClass(value === "all" ? null : value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Класс объекта" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Класс объекта</SelectLabel>
                        <SelectItem value="all">Все классы</SelectItem>
                        <SelectItem value="safe">Безопасный</SelectItem>
                        <SelectItem value="euclid">Евклид</SelectItem>
                        <SelectItem value="keter">Кетер</SelectItem>
                        <SelectItem value="thaumiel">Таумиэль</SelectItem>
                        <SelectItem value="anomalous">Аномальный</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Фильтры
                </Button>
                
                <Button variant="ghost" className="gap-2">
                  <ArrowUpDown className="h-4 w-4" />
                  Сортировка
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Objects List */}
        <div className="py-8">
          <div className="sce-container">
            <div className="mb-4">
              <p className="text-gray-600 dark:text-gray-400">
                Найдено {filteredObjects.length} объектов
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredObjects.map((obj) => (
                <div key={obj.id} className="sce-object-card overflow-hidden">
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{obj.id.toUpperCase()}</h3>
                      <span className={`object-class class-${obj.class}`}>
                        {obj.class === "safe" && "Безопасный"}
                        {obj.class === "euclid" && "Евклид"}
                        {obj.class === "keter" && "Кетер"}
                        {obj.class === "thaumiel" && "Таумиэль"}
                        {obj.class === "anomalous" && "Аномальный"}
                      </span>
                    </div>
                    <h4 className="font-medium mb-3">«{obj.name}»</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {obj.description}
                    </p>
                    <Link to={`/objects/${obj.id}`}>
                      <Button variant="outline" className="w-full">
                        Полное досье
                      </Button>
                    </Link>
                  </div>
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
                <Button variant="outline">10</Button>
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

export default ObjectsPage;