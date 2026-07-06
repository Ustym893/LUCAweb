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

// 1. Головна сторінка
function LandingLayout() {
  const navigate = useNavigate();

  // Замість зміни стану, ми змінюємо URL
  const handleBookCall = () => {
    navigate('/book-call');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookCall={handleBookCall} />
      <main>
        <Hero onBookCall={handleBookCall}/>
        <IntegrationsBanner/>
        <CoreFeatures/>
        <DeploymentModels onBookCall={handleBookCall}/>
           <Pricing/>
        <AuditEvidence/>
     
      </main>
      <CTAFooter onBookCall={handleBookCall} />
    </div>
  );
}

// 2. Обгортка для сторінки Discovery, щоб обробити кнопку "Назад на сайт"
function DiscoveryRoute() {
  const navigate = useNavigate();
  
  // Коли користувач натискає логотип або "back to site", повертаємо на головну
  return <DiscoveryCallPage onBack={() => navigate('/')} />;
}

// 3. Головний компонент App з маршрутизацією
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Головна сторінка */}
        <Route path="/" element={<LandingLayout />} />
        
        {/* Сторінка кар'єри */}
        <Route path="/careers" element={<CareersPage />} />
        
        {/* Сторінка Discovery Call */}
        <Route path="/book-call" element={<DiscoveryRoute />} />
      </Routes>
    </BrowserRouter>
  );
}