import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Scale, FileText, Users, Bookmark, Download, MessageSquare, Calendar } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Legal = () => {
  const { toast } = useToast();

  const handleDownloadResource = (resourceName: string) => {
    toast({
      title: `${resourceName} Downloaded`,
      description: "The resource has been downloaded to your device.",
    });
  };

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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Resources & Support</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive legal resources and professional support to understand and protect your rights as a father.
          </p>
        </div>

        {/* Legal Resource Guides */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="text-primary h-6 w-6" />
                Custody Rights Guide
              </CardTitle>
              <CardDescription>Understanding custody arrangements</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Types of custody explained</li>
                <li>Your rights as a father</li>
                <li>Documentation needed</li>
                <li>Court procedures</li>
              </ul>
              <Button 
                onClick={() => handleDownloadResource("Custody Rights Guide")}
                className="w-full"
              >
                <Download className="mr-2 h-4 w-4" /> Download Guide
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="text-primary h-6 w-6" />
                Visitation Planning
              </CardTitle>
              <CardDescription>Organizing time with your children</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Visitation schedules</li>
                <li>Holiday arrangements</li>
                <li>Travel considerations</li>
                <li>Schedule modifications</li>
              </ul>
              <Button 
                onClick={() => handleDownloadResource("Visitation Planning Guide")}
                className="w-full"
              >
                <Download className="mr-2 h-4 w-4" /> Download Template
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="text-primary h-6 w-6" />
                Mediation Guide
              </CardTitle>
              <CardDescription>Effective dispute resolution</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Mediation process</li>
                <li>Preparing for sessions</li>
                <li>Communication tips</li>
                <li>Agreement writing</li>
              </ul>
              <Button 
                onClick={() => handleDownloadResource("Mediation Guide")}
                className="w-full"
              >
                <Download className="mr-2 h-4 w-4" /> Download Guide
              </Button>
            </CardContent>
          </Card>
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
              <Button variant="outline" onClick={() => handleDownloadResource("Legal Network Directory")} className="w-full">
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