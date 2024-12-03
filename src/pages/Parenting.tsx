import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "../components/Navigation";

const Parenting = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Parenting Tips</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Co-Parenting Strategies</CardTitle>
              <CardDescription>Building effective relationships for your children</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Discover practical strategies for successful co-parenting, communication
                tips, and ways to maintain healthy boundaries.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quality Time</CardTitle>
              <CardDescription>Making the most of your time together</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Learn how to create meaningful experiences and strengthen your bond
                with your children, even with limited time together.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Parenting;