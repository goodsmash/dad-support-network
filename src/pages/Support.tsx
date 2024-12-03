import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Heart, Phone, Users, Calendar, BookOpen, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Support = () => {
  const { toast } = useToast();

  const handleContactSupport = () => {
    toast({
      title: "Support Request Sent",
      description: "Our team will contact you shortly at 1-800-LEGAL-HELP",
    });
  };

  const handleGuideDownload = () => {
    toast({
      title: "Guide Downloaded",
      description: "Check your downloads folder for the complete holiday guide.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Emotional Support for Fathers</h1>
          <p className="text-xl text-gray-600">Guidance and support through your journey</p>
        </div>

        {/* Holiday Guide Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-3xl">
              <Calendar className="text-primary h-8 w-8" />
              Coping with Divorce During the Holidays
            </CardTitle>
            <CardDescription className="text-lg">
              A comprehensive guide to help you navigate the holiday season
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Understanding the Emotional Impact</h3>
              <p className="text-gray-600 mb-4">
                The holiday season can intensify feelings of loneliness, grief, and frustration. 
                Common challenges include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Loneliness and isolation from former traditions</li>
                <li>Grief over changes in family structure</li>
                <li>Frustration with limited time with children</li>
                <li>Anxiety about new social situations</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Practical Strategies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Planning Ahead</h4>
                  <ul className="list-disc pl-6 text-gray-600">
                    <li>Create detailed visitation schedules</li>
                    <li>Plan meaningful activities</li>
                    <li>Arrange travel early</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Self-Care Tips</h4>
                  <ul className="list-disc pl-6 text-gray-600">
                    <li>Maintain regular exercise</li>
                    <li>Practice mindfulness</li>
                    <li>Seek support when needed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button 
                onClick={handleGuideDownload}
                className="flex items-center gap-2"
              >
                <BookOpen className="h-4 w-4" />
                Download Complete Guide
              </Button>
              <Button 
                variant="outline" 
                onClick={handleContactSupport}
                className="flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Contact Support Team
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Support Resources */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-primary" />
                Support Groups
              </CardTitle>
              <CardDescription>Connect with others who understand</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Join our weekly support groups led by experienced counselors.
                Share experiences and learn from others in similar situations.
              </p>
              <Button 
                onClick={() => toast({
                  title: "Group Registration",
                  description: "You'll receive details about the next meeting via email.",
                })}
                className="w-full"
              >
                Join Support Group
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="text-primary" />
                24/7 Support Line
              </CardTitle>
              <CardDescription>We're here when you need us</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our trained counselors are available 24/7 to provide emotional support
                and guidance when you need it most.
              </p>
              <Button 
                variant="outline"
                onClick={handleContactSupport}
                className="w-full"
              >
                Call 1-800-SUPPORT
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;