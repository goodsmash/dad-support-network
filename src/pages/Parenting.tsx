import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Heart, Book, Calendar, Users, Download, BookOpen, MessageSquare, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Parenting = () => {
  const { toast } = useToast();

  const handleDownloadGuide = (guideName: string) => {
    toast({
      title: `${guideName} Downloaded`,
      description: "The guide has been downloaded to your device.",
    });
  };

  const handleWorkshopSignup = () => {
    toast({
      title: "Workshop Registration",
      description: "Thank you for registering. We'll send you the workshop details shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Parenting Resources & Guides</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover practical strategies, expert advice, and supportive resources to help you be the best parent you can be.
          </p>
        </div>
        
        {/* Featured Parenting Guides */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="text-primary h-6 w-6" />
                Connection Guide
              </CardTitle>
              <CardDescription>Building stronger bonds</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Quality time activities</li>
                <li>Communication tips</li>
                <li>Age-appropriate bonding</li>
                <li>Creating traditions</li>
              </ul>
              <Button 
                onClick={() => handleDownloadGuide("Parent-Child Connection Guide")}
                className="w-full"
              >
                <Download className="mr-2 h-4 w-4" /> Download Guide
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="text-primary h-6 w-6" />
                Age-Specific Activities
              </CardTitle>
              <CardDescription>Tailored engagement strategies</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Toddler activities</li>
                <li>School-age projects</li>
                <li>Teen engagement</li>
                <li>Family adventures</li>
              </ul>
              <Button 
                onClick={() => handleDownloadGuide("Activities Guide")}
                className="w-full"
              >
                <Download className="mr-2 h-4 w-4" /> Download Guide
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="text-primary h-6 w-6" />
                Communication Tools
              </CardTitle>
              <CardDescription>Effective parent-child dialogue</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Active listening</li>
                <li>Emotional support</li>
                <li>Conflict resolution</li>
                <li>Building trust</li>
              </ul>
              <Button 
                onClick={() => handleDownloadGuide("Communication Guide")}
                className="w-full"
              >
                <Download className="mr-2 h-4 w-4" /> Download Guide
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Workshops Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Interactive Workshops</CardTitle>
            <CardDescription>
              Join our expert-led sessions designed to enhance your parenting skills
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Upcoming Workshops</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Co-parenting strategies</li>
                <li>Managing transitions</li>
                <li>Building resilience</li>
                <li>Creating routines</li>
              </ul>
              <Button onClick={handleWorkshopSignup} className="w-full">
                Register for Workshops
              </Button>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resource Library</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Workshop recordings</li>
                <li>Expert interviews</li>
                <li>Practical exercises</li>
                <li>Discussion guides</li>
              </ul>
              <Button 
                variant="outline" 
                onClick={() => handleDownloadGuide("Workshop Materials")}
                className="w-full"
              >
                Access Library
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Support Network */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Parent Support Network</CardTitle>
            <CardDescription>
              Connect with other parents facing similar challenges
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Join Our Community</h3>
              <p className="text-gray-600 mb-4">
                Share experiences, get advice, and build supportive relationships with other parents.
              </p>
              <Button onClick={handleWorkshopSignup} className="w-full">
                Join Support Group
              </Button>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Monthly Meetups</h3>
              <p className="text-gray-600 mb-4">
                Regular in-person and virtual gatherings for parents to connect and share.
              </p>
              <Button 
                variant="outline" 
                onClick={() => handleDownloadGuide("Meetup Schedule")}
                className="w-full"
              >
                View Schedule
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Parenting;