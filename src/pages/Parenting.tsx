import Navigation from "../components/Navigation";
import { guides } from "@/utils/guides";
import GuideCard from "@/components/GuideCard";
import SupportHeader from "@/components/SupportHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Star, BookOpen, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Parenting = () => {
  const { toast } = useToast();
  const parentingGuides = guides.filter(guide => guide.category === 'parenting');

  const handleWorkshopSignup = () => {
    toast({
      title: "Workshop Registration",
      description: "Thank you for registering. We'll send you the workshop details shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SupportHeader 
          title="Parenting Resources & Guides"
          description="Discover practical strategies, expert advice, and supportive resources to help you be the best parent you can be."
        />
        
        {/* Featured Parenting Guides */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {parentingGuides.map(guide => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>

        {/* Workshops Section */}
        <Card className="mb-12 hover:shadow-lg transition-all duration-300 border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <Calendar className="h-6 w-6" />
              Interactive Workshops
            </CardTitle>
            <CardDescription className="text-lg">
              Join our expert-led sessions designed to enhance your parenting skills
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 p-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">Upcoming Workshops</h3>
              <ul className="space-y-4">
                {['Co-parenting strategies', 'Managing transitions', 'Building resilience', 'Creating routines'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={handleWorkshopSignup} className="w-full">
                Register for Workshops
              </Button>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">Resource Library</h3>
              <ul className="space-y-4">
                {['Workshop recordings', 'Expert interviews', 'Practical exercises', 'Discussion guides'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant="outline" 
                onClick={handleWorkshopSignup}
                className="w-full border-primary/50 hover:bg-primary/5"
              >
                Access Library
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Support Network */}
        <Card className="animate-fade-in hover:shadow-lg transition-all duration-300 border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <Users className="h-6 w-6" />
              Parent Support Network
            </CardTitle>
            <CardDescription className="text-lg">
              Connect with other parents facing similar challenges
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 p-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Join Our Community</h3>
              <p className="text-gray-600">
                Share experiences, get advice, and build supportive relationships with other parents.
              </p>
              <Button onClick={handleWorkshopSignup} className="w-full">
                Join Support Group
              </Button>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Monthly Meetups</h3>
              <p className="text-gray-600">
                Regular in-person and virtual gatherings for parents to connect and share.
              </p>
              <Button 
                variant="outline" 
                onClick={handleWorkshopSignup}
                className="w-full border-primary/50 hover:bg-primary/5"
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