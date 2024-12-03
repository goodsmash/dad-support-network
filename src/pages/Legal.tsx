import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "../components/Navigation";

const Legal = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Legal Resources</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Custody Rights</CardTitle>
              <CardDescription>Understanding your legal rights as a father</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Learn about your custody rights, visitation schedules, and how to navigate
                the legal system effectively.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Legal Documentation</CardTitle>
              <CardDescription>Essential documents and processes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Find information about required legal documents, court procedures, and
                working with legal professionals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Legal;