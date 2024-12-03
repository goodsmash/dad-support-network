import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Scale, FileText, Users, Bookmark } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Legal = () => {
  const { toast } = useToast();

  const handleConsultation = () => {
    toast({
      title: "Consultation Request",
      description: "Thank you for your interest. A legal advisor will contact you shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Legal Resources</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="text-primary" />
                Custody Rights
              </CardTitle>
              <CardDescription>Understanding your legal rights as a father</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Learn about your custody rights and legal options:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Types of custody arrangements</li>
                <li>Visitation schedules</li>
                <li>Father's rights</li>
                <li>Court procedures</li>
              </ul>
              <Button onClick={handleConsultation} className="w-full">
                Free Legal Consultation
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="text-primary" />
                Legal Documentation
              </CardTitle>
              <CardDescription>Essential documents and processes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Access important legal resources and documents:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Custody agreement templates</li>
                <li>Court filing procedures</li>
                <li>Mediation information</li>
                <li>Legal terminology guide</li>
              </ul>
              <Button 
                variant="outline" 
                onClick={() => window.open('/documents/legal-guide.pdf')}
                className="w-full"
              >
                Download Legal Guide
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-primary" />
              Legal Support Network
            </CardTitle>
            <CardDescription>Connect with legal professionals and support services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Find an Attorney</h3>
                <p className="text-gray-600 mb-4">
                  Connect with experienced family law attorneys who understand fathers' rights.
                </p>
                <Button onClick={handleConsultation} variant="secondary" className="w-full">
                  Find an Attorney
                </Button>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Mediation Services</h3>
                <p className="text-gray-600 mb-4">
                  Explore mediation as an alternative to court proceedings.
                </p>
                <Button onClick={handleConsultation} variant="outline" className="w-full">
                  Learn About Mediation
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Legal;