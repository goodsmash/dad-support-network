import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Guide, downloadGuide } from "@/utils/guides";
import { useToast } from "@/hooks/use-toast";

interface GuideCardProps {
  guide: Guide;
}

const GuideCard = ({ guide }: GuideCardProps) => {
  const { toast } = useToast();

  const handleDownload = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    downloadGuide(guide);
    toast({
      title: `${guide.title} Downloaded`,
      description: "The guide has been downloaded to your device.",
    });
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {guide.title}
        </CardTitle>
        <CardDescription>
          {guide.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={handleDownload}
          className="w-full"
        >
          <Download className="mr-2 h-4 w-4" /> Download Guide
        </Button>
      </CardContent>
    </Card>
  );
};

export default GuideCard;