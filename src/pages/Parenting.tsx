import Navigation from "../components/Navigation";
import { guides } from "@/utils/guides";
import GuideCard from "@/components/GuideCard";
import SupportHeader from "@/components/SupportHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Star } from "lucide-react";
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
    <div className="min-h-screen bg-gray-50">
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
                onClick={handleWorkshopSignup}
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
                onClick={handleWorkshopSignup}
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