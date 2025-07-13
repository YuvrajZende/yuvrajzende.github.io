import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FloatingNavigation from "@/components/FloatingNavigation";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <FloatingNavigation />
      <div className="flex items-center justify-center min-h-[80vh] pt-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
          <a href="/" className="text-primary hover:text-primary/80 underline">
            Return to Home
          </a>
        </div>
      </div>
      {/* Bottom padding for comfortable scrolling */}
      <div className="h-20"></div>
    </div>
  );
};

export default NotFound;
