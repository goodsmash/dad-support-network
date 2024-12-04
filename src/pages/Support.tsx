import Navigation from "../components/Navigation";
import { guides } from "@/utils/guides";
import GuideCard from "@/components/GuideCard";
import SupportHeader from "@/components/SupportHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Phone, Users, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const { toast } = useToast();
  const supportGuides = guides.filter(guide => guide.category === 'support');

  const handleJoinGroup = () => {
    toast({
      title: "Support Group Registration",
      description: "Thank you for your interest. We'll send you details about the next meeting.",
    });
  };

  const handleContactSupport = () => {
    toast({
      title: "Support Request Received",
      description: "Our team will contact you shortly at the provided number.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SupportHeader 
          title="Support Resources & Guides"
          description="Access our comprehensive collection of guides, resources, and support materials designed to help you navigate your journey."
        />

        {/* Featured Guides Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {supportGuides.map(guide => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>

        {/* Understanding Emotional Impact Section */}
        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Heart className="text-primary h-6 w-6" />
              Understanding the Emotional Impact
            </CardTitle>
            <CardDescription className="text-lg">
              Common challenges and how to address them
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Common Emotional Challenges</h4>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Loneliness and isolation from former traditions</li>
                  <li>Grief over changes in family structure</li>
                  <li>Frustration with limited time with children</li>
                  <li>Anxiety about new social situations</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Coping Strategies</h4>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Acknowledge and accept your feelings</li>
                  <li>Practice self-compassion</li>
                  <li>Seek professional support when needed</li>
                  <li>Connect with others who understand</li>
                </ul>
                <Button 
                  onClick={handleJoinGroup}
                  className="mt-4 w-full"
                  variant="secondary"
                >
                  <Users className="mr-2" />
                  Join Support Group
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources Section */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl">Additional Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <Phone className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold mb-2">24/7 Hotline</h3>
                <p className="text-gray-600">1-800-SUPPORT</p>
              </div>
              <div className="text-center p-4">
                <Mail className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600">help@dadsupport.com</p>
              </div>
              <div className="text-center p-4">
                <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold mb-2">Local Groups</h3>
                <Button 
                  variant="secondary"
                  onClick={handleJoinGroup}
                  className="mt-2"
                >
                  Find Nearby Groups
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Support;