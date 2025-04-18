import { FC } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Lock } from "lucide-react";

interface DocumentCardProps {
  id: string;
  title: string;
  classification: "Безопасный" | "Евклид" | "Кетер" | "Таумиэль" | "Нейтрализованный";
  summary: string;
  clearanceLevel: 1 | 2 | 3 | 4 | 5;
}

const classificationColors = {
  "Безопасный": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Евклид": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "Кетер": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  "Таумиэль": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Нейтрализованный": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
};

const DocumentCard: FC<DocumentCardProps> = ({ id, title, classification, summary, clearanceLevel }) => {
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className={classificationColors[classification]}>
            {classification}
          </Badge>
          <Badge variant="outline" className="flex items-center">
            <Lock className="h-3 w-3 mr-1" />
            Уровень {clearanceLevel}
          </Badge>
        </div>
        <CardTitle className="text-lg mt-2">
          <Link to={`/document/${id}`} className="hover:text-sce-accent transition-colors">
            SCE-{id}
          </Link>
        </CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{summary}</p>
      </CardContent>
      <CardFooter>
        <Link 
          to={`/document/${id}`} 
          className="text-sm font-medium text-sce-accent hover:text-sce-secondary flex items-center"
        >
          <FileText className="h-4 w-4 mr-1" />
          Открыть документ
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DocumentCard;
