import Navigation from "../components/Navigation";
import { guides } from "@/utils/guides";
import GuideCard from "@/components/GuideCard";
import SupportHeader from "@/components/SupportHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Legal = () => {
  const { toast } = useToast();
  const legalGuides = guides.filter(guide => guide.category === 'legal');

  const handleConsultation = () => {
    toast({
      title: "Consultation Request Received",
      description: "A legal advisor will contact you shortly to schedule your consultation.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SupportHeader 
          title="Legal Resources & Support"
          description="Access comprehensive legal resources and professional support to understand and protect your rights as a father."
        />

        {/* Legal Resource Guides */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {legalGuides.map(guide => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>

        {/* Legal Consultation Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Need Legal Assistance?</CardTitle>
            <CardDescription>
              Connect with experienced family law attorneys who understand fathers' rights
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Free Initial Consultation</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Review your case details</li>
                <li>Understand your options</li>
                <li>Get professional advice</li>
                <li>Plan next steps</li>
              </ul>
              <Button onClick={handleConsultation} className="w-full">
                Schedule Consultation
              </Button>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal Support Network</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Experienced attorneys</li>
                <li>Mediation services</li>
                <li>Document preparation</li>
                <li>Court representation</li>
              </ul>
              <Button variant="outline" onClick={handleConsultation} className="w-full">
                Download Directory
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Legal;