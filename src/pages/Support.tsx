import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "../components/Navigation";

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Emotional Support</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Coping with Divorce</CardTitle>
              <CardDescription>Essential strategies and resources for emotional healing</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Divorce can be one of life's most challenging experiences. Here you'll find resources,
                support, and guidance to help you navigate this difficult transition.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Holiday Support</CardTitle>
              <CardDescription>Managing emotions during special occasions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                The holiday season can be particularly challenging. Learn strategies for coping
                with emotions and creating new traditions during these times.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;