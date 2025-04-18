import { useState } from "react";
import { Link } from "react-router-dom";
import SCENavbar from "@/components/SCENavbar";
import SCEFooter from "@/components/SCEFooter";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Filter, 
  ChevronRight,
  UserCog,
  BadgeCheck,
  ShieldCheck
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

// Моковые данные персонала
const personnelData = [
  {
    id: "p-001",
    name: "Д-р Алексей Каменев",
    role: "Старший исследователь",
    department: "Научный отдел",
    clearanceLevel: 5,
    specialization: "Аномальная физика",
    yearsOfService: 12,
    avatar: "/placeholder.svg"
  },
  {
    id: "p-002",
    name: "Майор Виктория Соколова",
    role: "Начальник службы безопасности",
    department: "Безопасность",
    clearanceLevel: 4,
    specialization: "Тактика сдерживания",
    yearsOfService: 8,
    avatar: "/placeholder.svg"
  },
  {
    id: "p-003",
    name: "Д-р Михаил Орлов",
    role: "Исследователь",
    department: "Научный отдел",
    clearanceLevel: 3,
    specialization: "Биологические аномалии",
    yearsOfService: 5,
    avatar: "/placeholder.svg"
  },
  {
    id: "p-004",
    name: "Инженер Ольга Петрова",
    role: "Старший техник",
    department: "Инженерный отдел",
    clearanceLevel: 3,
    specialization: "Аномальная технология",
    yearsOfService: 7,
    avatar: "/placeholder.svg"
  },
  {
    id: "p-005",
    name: "Андрей Волков",
    role: "Оперативник МОГ",
    department: "Полевые операции",
    clearanceLevel: 3,
    specialization: "Тактическое сдерживание",
    yearsOfService: 6,
    avatar: "/placeholder.svg"
  },
  {
    id: "p-006",
    name: "Д-р Елена Морозова",
    role: "Руководитель проекта",
    department: "Научный отдел",
    clearanceLevel: 4,
    specialization: "Когнитивные аномалии",
    yearsOfService: 9,
    avatar: "/placeholder.svg"
  },
  {
    id: "p-007",
    name: "Сергей Иванов",
    role: "Специалист по содержанию",
    department: "Управление объектами",
    clearanceLevel: 2,
    specialization: "Процедуры содержания",
    yearsOfService: 4,
    avatar: "/placeholder.svg"
  },
  {
    id: "p-008",
    name: "Д-р Наталья Белова",
    role: "Психолог",
    department: "Медицинский отдел",
    clearanceLevel: 3,
    specialization: "Аномальные когнитивные эффекты",
    yearsOfService: 5,
    avatar: "/placeholder.svg"
  },
  {
    id: "p-009",
    name: "Капитан Дмитрий Громов",
    role: "Командир МОГ Альфа-1",
    department: "Полевые операции",
    clearanceLevel: 4,
    specialization: "Захват объектов",
    yearsOfService: 10,
    avatar: "/placeholder.svg"
  }
];

const PersonnelPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  
  // Фильтрация персонала на основе поиска и выбранного отдела
  const filteredPersonnel = personnelData.filter(person => {
    const matchesSearch = 
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      person.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.specialization.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesDepartment = selectedDepartment ? person.department === selectedDepartment : true;
    
    return matchesSearch && matchesDepartment;
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
              <span>Персонал</span>
            </div>
            <h1 className="text-3xl font-bold mb-4">Персонал Фонда SCE</h1>
            <p className="text-lg opacity-90 max-w-3xl">
              Информация о сотрудниках, работающих над исследованием и сдерживанием аномалий.
            </p>
          </div>
        </div>
        
        {/* Filters Section */}
        <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="sce-container py-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-grow">
                <Input 
                  placeholder="Поиск по имени, должности или специализации..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-48">
                  <Select onValueChange={(value) => setSelectedDepartment(value === "all" ? null : value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Отдел" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Отдел</SelectLabel>
                        <SelectItem value="all">Все отделы</SelectItem>
                        <SelectItem value="Научный отдел">Научный отдел</SelectItem>
                        <SelectItem value="Безопасность">Безопасность</SelectItem>
                        <SelectItem value="Инженерный отдел">Инженерный отдел</SelectItem>
                        <SelectItem value="Полевые операции">Полевые операции</SelectItem>
                        <SelectItem value="Медицинский отдел">Медицинский отдел</SelectItem>
                        <SelectItem value="Управление объектами">Управление объектами</SelectItem>
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
        
        {/* Personnel List */}
        <div className="py-8">
          <div className="sce-container">
            <div className="mb-4">
              <p className="text-gray-600 dark:text-gray-400">
                Найдено {filteredPersonnel.length} сотрудников
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPersonnel.map((person) => (
                <Card key={person.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="p-4">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-16 w-16 border">
                          <AvatarImage src={person.avatar} alt={person.name} />
                          <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-lg">{person.name}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{person.role}</p>
                          <div className="flex items-center mt-2">
                            <span className={`clearance-badge clearance-${person.clearanceLevel}`}>
                              Уровень {person.clearanceLevel}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <UserCog className="h-4 w-4 text-gray-500" />
                          <span>Отдел: {person.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BadgeCheck className="h-4 w-4 text-gray-500" />
                          <span>Специализация: {person.specialization}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-gray-500" />
                          <span>Стаж: {person.yearsOfService} лет</span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <Link to={`/personnel/${person.id}`}>
                          <Button variant="outline" className="w-full">
                            Полное досье
                          </Button>
                        </Link>
                      </div>
                    </div>
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

export default PersonnelPage;