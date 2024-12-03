import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Heart, Phone, Users, Calendar, BookOpen, ArrowRight, Download, Mail } from "lucide-react";
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Coping with Divorce During the Holidays
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive guide to help fathers navigate the holiday season while dealing with divorce.
            Find support, resources, and practical strategies for creating meaningful experiences.
          </p>
        </div>

        {/* Understanding Emotional Impact Section */}
        <Card className="mb-8">
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
            <p className="text-gray-600">
              The holiday season can intensify feelings of loneliness, grief, and frustration.
              It's important to recognize these emotions and understand that they're normal reactions
              to significant life changes.
            </p>
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
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Planning Ahead Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Calendar className="text-primary h-6 w-6" />
              Planning Ahead for the Holidays
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Preparation is key to managing holiday stress and creating positive experiences.
              Consider these important aspects when planning:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Create a Detailed Plan</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Work out custody arrangements in advance</li>
                  <li>Plan meaningful activities with your children</li>
                  <li>Arrange travel and accommodations early</li>
                  <li>Create a budget for gifts and activities</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Support Resources</h3>
                <div className="space-y-4">
                  <Button 
                    onClick={handleGuideDownload}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download Holiday Planning Guide
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleContactSupport}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Contact Support Team
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Support Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="text-primary h-6 w-6" />
              Get Support Today
            </CardTitle>
            <CardDescription className="text-lg">
              Don't face this journey alone. Our support team is here to help 24/7.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <Phone className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">1-800-LEGAL-HELP</p>
              </div>
              <div className="text-center p-4">
                <Mail className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600">support@dadsupport.com</p>
              </div>
              <div className="text-center p-4">
                <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold mb-2">Support Groups</h3>
                <Button 
                  variant="secondary"
                  onClick={() => toast({
                    title: "Group Registration",
                    description: "You'll receive details about the next meeting via email.",
                  })}
                  className="mt-2"
                >
                  Join a Group
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