import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Heart, Book, Calendar, Users } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Parenting = () => {
  const { toast } = useToast();

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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Parenting Tips</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="text-primary" />
                Co-Parenting Strategies
              </CardTitle>
              <CardDescription>Building effective relationships for your children</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Learn effective co-parenting strategies:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Communication techniques</li>
                <li>Conflict resolution</li>
                <li>Setting boundaries</li>
                <li>Shared decision making</li>
              </ul>
              <Button onClick={handleWorkshopSignup} className="w-full">
                Join Co-Parenting Workshop
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="text-primary" />
                Quality Time
              </CardTitle>
              <CardDescription>Making the most of your time together</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Discover ways to create meaningful experiences:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Age-appropriate activities</li>
                <li>Building traditions</li>
                <li>Long-distance parenting</li>
                <li>Special occasions</li>
              </ul>
              <Button 
                variant="outline" 
                onClick={() => window.open('/documents/activity-guide.pdf')}
                className="w-full"
              >
                Download Activity Guide
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="text-primary" />
              Parenting Resources
            </CardTitle>
            <CardDescription>Tools and guidance for successful parenting</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Online Workshops</h3>
                <p className="text-gray-600 mb-4">
                  Join our interactive online workshops led by parenting experts.
                </p>
                <Button onClick={handleWorkshopSignup} variant="secondary" className="w-full">
                  View Workshop Schedule
                </Button>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Parent Support Group</h3>
                <p className="text-gray-600 mb-4">
                  Connect with other parents facing similar challenges.
                </p>
                <Button onClick={handleWorkshopSignup} variant="outline" className="w-full">
                  Join Support Group
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Parenting;