import Navigation from "../components/Navigation";
import FeatureCard from "../components/FeatureCard";
import { Heart, Scale, Users, Calendar, PhoneCall, BookOpen, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleContactSupport = () => {
    toast({
      title: "Support Request Received",
      description: "Our team will contact you shortly to provide assistance.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Support for Divorced Fathers
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
            Find resources, community, and guidance to navigate life's challenges
            and stay connected with your children.
          </p>
          <div className="space-x-4">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/support')}
              className="mr-4"
            >
              Get Support
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/legal')}
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Legal Resources
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Comprehensive Support Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Heart size={32} />}
            title="Emotional Support"
            description="Access counseling resources and connect with others who understand your journey."
          />
          <FeatureCard
            icon={<Scale size={32} />}
            title="Legal Resources"
            description="Expert guidance on custody, visitation rights, and legal proceedings."
          />
          <FeatureCard
            icon={<Users size={32} />}
            title="Parenting Tips"
            description="Learn effective co-parenting strategies and strengthen family bonds."
          />
          <FeatureCard
            icon={<Calendar size={32} />}
            title="Holiday Planning"
            description="Navigate special occasions and create meaningful moments with your children."
          />
        </div>
      </div>

      {/* Support Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Available Support Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <PhoneCall className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">24/7 Helpline</h3>
              <p className="text-gray-600 mb-4">Immediate support when you need it most</p>
              <Button variant="outline" onClick={handleContactSupport}>
                Call Now
              </Button>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Resource Library</h3>
              <p className="text-gray-600 mb-4">Access guides, articles, and educational materials</p>
              <Button variant="outline" onClick={() => navigate('/support')}>
                Browse Resources
              </Button>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Community Forum</h3>
              <p className="text-gray-600 mb-4">Connect with other fathers in similar situations</p>
              <Button variant="outline" onClick={() => navigate('/support')}>
                Join Discussion
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Take the First Step Today
          </h2>
          <p className="text-blue-800 text-xl mb-8 max-w-2xl mx-auto">
            Join our supportive community of fathers and access the resources you need to thrive.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/support')}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;