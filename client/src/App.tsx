import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import HowICanHelp from "./pages/HowICanHelp";
import AboutMe from "./pages/AboutMe";
import AppointmentsAndFAQs from "./pages/AppointmentsAndFAQs";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Extract hash from location (e.g., "/appointments-faqs#contact" -> "#contact")
    const hash = location.split('#')[1];
    
    if (hash) {
      // If there's a hash, scroll to top immediately, then to the hash element
      window.scrollTo(0, 0);
      
      // Wait a moment for the page to render, then scroll to hash element
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // No hash, just scroll to top immediately
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/how-i-can-help"} component={HowICanHelp} />
        <Route path={"/about-me"} component={AboutMe} />
        <Route path={"/appointments-faqs"} component={AppointmentsAndFAQs} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
