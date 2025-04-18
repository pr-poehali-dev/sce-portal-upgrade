import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SCENavbar from "@/components/SCENavbar";
import SCEFooter from "@/components/SCEFooter";
import DocumentCard from "@/components/DocumentCard";
import { Search } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

// Пример данных для документов
const documents = [
  {
    id: "1572",
    title: "Гравитационная аномалия",
    classification: "Евклид",
    summary: "Сфера диаметром 2 метра, внутри которой гравитация действует в случайных направлениях, меняясь каждые 24 часа.",
    clearanceLevel: 3
  },
  {
    id: "3084",
    title: "Когнитивный паразит",
    classification: "Кетер",
    summary: "Неосязаемая сущность, способная внедряться в сознание человека и изменять его воспоминания.",
    clearanceLevel: 4
  },
  {
    id: "682",
    title: "Неуничтожимый рептилоид",
    classification: "Кетер",
    summary: "Крупное земноводное существо с высокой агрессивностью и способностью адаптироваться к любому повреждению.",
    clearanceLevel: 5
  },
  {
    id: "914",
    title: "Механизм тонкой настройки",
    classification: "Безопасный",
    summary: "Устройство, способное преобразовывать предметы в более или менее совершенные версии оригинала.",
    clearanceLevel: 2
  },
  {
    id: "093",
    title: "Цивилизация в красном море",
    classification: "Евклид",
    summary: "Серия изображений, демонстрирующих альтернативную историю человечества после глобальной катастрофы.",
    clearanceLevel: 4
  },
  {
    id: "2000",
    title: "Измерительные часы",
    classification: "Безопасный",
    summary: "Карманные часы, показывающие время, оставшееся до смерти того, кто их держит.",
    clearanceLevel: 2
  },
  {
    id: "4999",
    title: "Одинокий странник",
    classification: "Таумиэль",
    summary: "Гуманоидная сущность, способная перемещаться между параллельными реальностями.",
    clearanceLevel: 5
  },
  {
    id: "2137",
    title: "Кофейная машина",
    classification: "Безопасный",
    summary: "Устройство, создающее любую жидкость, которую запросит пользователь.",
    clearanceLevel: 1
  },
  {
    id: "173",
    title: "Скульптура",
    classification: "Евклид",
    summary: "Бетонная статуя, способная двигаться с огромной скоростью, когда не находится под прямым наблюдением.",
    clearanceLevel: 3
  }
] as const;

const DocumentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [classFilter, setClassFilter] = useState<string>("all");
  const { user } = useAuth();
  
  // Если пользователь не авторизован, перенаправляем на страницу входа
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  // Прокрутка наверх при загрузке страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Фильтрация документов
  const filteredDocuments = documents.filter(doc => {
    // Фильтр по поиску
    const matchesSearch = 
      doc.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Фильтр по классификации
    const matchesClass = classFilter === "all" || doc.classification === classFilter;
    
    // У пользователя уровень доступа 5, поэтому он может видеть все документы
    return matchesSearch && matchesClass;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <SCENavbar />
      
      <main className="flex-grow py-8">
        <div className="sce-container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Архив документов SCE</h1>
            <p className="text-muted-foreground">
              Доступ к базе данных аномальных объектов и исследований.
              Уровень допуска: {user.clearanceLevel}.
            </p>
          </div>
          
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <Label htmlFor="search" className="mb-2 block">Поиск документов</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Поиск по ID, названию или описанию..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="classification" className="mb-2 block">Фильтр по классификации</Label>
              <Select value={classFilter} onValueChange={setClassFilter}>
                <SelectTrigger id="classification">
                  <SelectValue placeholder="Выберите классификацию" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все классификации</SelectItem>
                  <SelectItem value="Безопасный">Безопасный</SelectItem>
                  <SelectItem value="Евклид">Евклид</SelectItem>
                  <SelectItem value="Кетер">Кетер</SelectItem>
                  <SelectItem value="Таумиэль">Таумиэль</SelectItem>
                  <SelectItem value="Нейтрализованный">Нейтрализованный</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => (
                <DocumentCard
                  key={doc.id}
                  id={doc.id}
                  title={doc.title}
                  classification={doc.classification}
                  summary={doc.summary}
                  clearanceLevel={doc.clearanceLevel}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">Документов по заданным критериям не найдено.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <SCEFooter />
    </div>
  );
};

export default DocumentsPage;
