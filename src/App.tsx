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
import { DPAPage } from "./components/pages/DPAPage";
import {SecurityStatementPage} from "./components/pages/SecurityStatementPageProps";
import {SubprocessorRegisterPage} from "./components/pages/SubprocessorRegisterPage";
import {ResponsibleAIStatementPage} from "./components/pages/ResponsibleAIStatementPage";
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
          <AuditEvidence/>
        <Pricing/>
      
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

function DPAPageRoute() {
  const navigate = useNavigate();
  return <DPAPage onBack={() => navigate('/')} />;
}

function SecurityStatementRoute(){
  const navigate = useNavigate();
  return <SecurityStatementPage onBack={() => navigate('/')} />;  
}

function SubprocessorRegisterPageRoute(){
  const navigate = useNavigate();
  return <SubprocessorRegisterPage onBack={() => navigate('/')} />;  
}

function ResponsibleAiStatementRoute(){
  const navigate = useNavigate();
  return <ResponsibleAIStatementPage   onBack={() => navigate('/')} />;  
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
        <Route path="/dpa" element={<DPAPageRoute />} />
        <Route path="/security" element={<SecurityStatementRoute />} />
        <Route path="/subprocessors" element={<SubprocessorRegisterPageRoute />} />
        <Route path="/responsible-ai" element={<ResponsibleAiStatementRoute />} />
      </Routes>
    </BrowserRouter>
  );
}