import { FC } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";

interface MTFCardProps {
  id: string;
  name: string;
  codeName: string;
  description: string;
  specialization: string;
}

const MTFCard: FC<MTFCardProps> = ({ id, name, codeName, description, specialization }) => {
  return (
    <Card className="h-full hover:shadow-md transition-shadow border-l-4 border-l-sce-accent">
      <CardHeader className="pb-2">
        <div className="flex items-center mb-2">
          <Shield className="h-5 w-5 text-sce-accent mr-2" />
          <span className="text-sm font-medium text-muted-foreground">{id}</span>
        </div>
        <CardTitle className="text-lg">
          <Link to={`/mtf/${id}`} className="hover:text-sce-accent transition-colors">
            {name}
          </Link>
        </CardTitle>
        <CardDescription className="font-semibold">"{codeName}"</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{description}</p>
        <div className="text-xs font-medium text-muted-foreground">
          <span className="block">Специализация:</span>
          <span className="block mt-1">{specialization}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link 
          to={`/mtf/${id}`} 
          className="text-sm font-medium text-sce-accent hover:text-sce-secondary flex items-center"
        >
          <FileText className="h-4 w-4 mr-1" />
          Подробнее
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MTFCard;
