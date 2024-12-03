import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { Heart, Phone, Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Support = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleJoinGroup = () => {
    toast({
      title: "Support Group Request",
      description: "Thank you for your interest. We'll contact you about the next meeting.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Emotional Support</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="text-primary" />
                Coping with Divorce
              </CardTitle>
              <CardDescription>Essential strategies and resources for emotional healing</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Divorce can be one of life's most challenging experiences. Our support network provides:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Professional counseling referrals</li>
                <li>Peer support groups</li>
                <li>Coping strategies</li>
                <li>Stress management techniques</li>
              </ul>
              <Button onClick={handleJoinGroup} className="w-full">
                Join Support Group
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="text-primary" />
                Holiday Support
              </CardTitle>
              <CardDescription>Managing emotions during special occasions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                The holiday season can be particularly challenging. We offer guidance on:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Creating new traditions</li>
                <li>Planning meaningful celebrations</li>
                <li>Managing expectations</li>
                <li>Finding joy in different circumstances</li>
              </ul>
              <Button onClick={() => navigate('/parenting')} variant="outline" className="w-full">
                Holiday Planning Tips
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Phone className="text-primary" />
            24/7 Support Hotline
          </h2>
          <p className="text-gray-600 mb-4">
            Our trained counselors are available 24/7 to provide emotional support and guidance.
            Don't hesitate to reach out - you're not alone in this journey.
          </p>
          <Button 
            onClick={() => window.location.href = 'tel:1-800-SUPPORT'} 
            variant="secondary"
            className="w-full md:w-auto"
          >
            Call 1-800-SUPPORT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Support;