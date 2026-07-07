import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { CTAFooter } from "./components/Footer";
import { Hero } from "./components/Hero";
import { IntegrationsBanner } from "./components/IntegrationsBanner";
import { DeploymentModels } from "./components/DeploymentModels";
import { CoreFeatures } from "./components/CoreFeatures";
import { AuditEvidence } from "./components/AuditEvidence";
import { DiscoveryCallPage } from "./components/ui/DiscoveryCallPage";
import { CareersPage } from './components/pages/CareersPage';
import { Pricing } from "./components/Pricing";
import { PrivacyPolicyPage } from "./components/pages/PrivacyPolicyPage";
import { TermsAndConditionsPage } from "./components/pages/TermsAndConditionsPage";
import {TheProblem} from "./components/TheProblem";
// 1. Головна сторінка
function LandingLayout() {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/book-call');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookCall={handleBookCall} />
      <main>
        <Hero onBookCall={handleBookCall}/>
        <IntegrationsBanner/>
              <TheProblem/>
        <CoreFeatures/>
  
        <DeploymentModels onBookCall={handleBookCall}/>
        <Pricing/>
        <AuditEvidence/>
      </main>
      <CTAFooter 
        onBookCall={handleBookCall} 
        onPrivacyClick={() => navigate('/privacy-policy')}  
        onTermsClick={() => navigate('/terms')}
      />
    </div>
  );
}

// 2. Обгортки для сторінок
function DiscoveryRoute() {
  const navigate = useNavigate();
  return <DiscoveryCallPage onBack={() => navigate('/')} />;
}

function PrivacyRoute() {
  const navigate = useNavigate();
  return <PrivacyPolicyPage onBack={() => navigate('/')} />;
}

function TermsRoute() {
  const navigate = useNavigate();
  return <TermsAndConditionsPage onBack={() => navigate('/')} />;
}

// 3. Головний компонент App з маршрутизацією
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingLayout />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/book-call" element={<DiscoveryRoute />} />
        <Route path="/privacy-policy" element={<PrivacyRoute />} />
        <Route path="/terms" element={<TermsRoute />} />
      </Routes>
    </BrowserRouter>
  );
}