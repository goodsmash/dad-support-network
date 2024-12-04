import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Heart, Phone, Users, Calendar, BookOpen, ArrowRight, Download, Mail, FileText } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Support = () => {
  const { toast } = useToast();

  const handleDownloadGuide = () => {
    toast({
      title: "Guide Downloaded",
      description: "The holiday coping guide has been downloaded to your device.",
    });
    // In a real app, this would trigger an actual download
  };

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

        {/* Planning Ahead Section */}
        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Calendar className="text-primary h-6 w-6" />
              Planning Ahead for the Holidays
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Preparation is key to managing holiday stress and creating positive experiences.
              Download our comprehensive guide for detailed planning strategies.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Holiday Planning Guide Includes:</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Custody arrangement templates</li>
                  <li>Activity planning worksheets</li>
                  <li>Communication guidelines</li>
                  <li>Self-care checklists</li>
                </ul>
                <Button 
                  onClick={handleDownloadGuide}
                  className="mt-4 w-full"
                >
                  <FileText className="mr-2" />
                  Download Complete Guide
                </Button>
              </div>
              <div>
                <h3 className="font-semibold mb-2">24/7 Support Available</h3>
                <p className="text-gray-600 mb-4">
                  Our support team is here to help you navigate difficult moments
                  during the holiday season.
                </p>
                <Button 
                  variant="outline"
                  onClick={handleContactSupport}
                  className="w-full"
                >
                  <Phone className="mr-2" />
                  Contact Support Team
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources Section */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BookOpen className="text-primary h-6 w-6" />
              Additional Resources
            </CardTitle>
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