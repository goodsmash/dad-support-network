import Navigation from "../components/Navigation";
import FeatureCard from "../components/FeatureCard";
import { Heart, Scale, Users, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Support for Divorced Fathers
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Find resources, community, and guidance to navigate life's challenges
            and stay connected with your children.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          How We Can Help
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Heart size={32} />}
            title="Emotional Support"
            description="Access resources and connect with others who understand your journey."
          />
          <FeatureCard
            icon={<Scale size={32} />}
            title="Legal Resources"
            description="Find guidance on custody, visitation, and your legal rights."
          />
          <FeatureCard
            icon={<Users size={32} />}
            title="Parenting Tips"
            description="Learn strategies for effective co-parenting and maintaining strong relationships."
          />
          <FeatureCard
            icon={<Calendar size={32} />}
            title="Holiday Planning"
            description="Get help navigating special occasions and creating meaningful moments."
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            You're Not Alone
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Join our community of fathers supporting each other through similar experiences.
          </p>
          <button className="bg-white text-accent hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;