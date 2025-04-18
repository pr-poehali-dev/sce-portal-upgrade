import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { Toaster } from "@/components/ui/toaster";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import ObjectsPage from "@/pages/ObjectsPage";
import ObjectDetail from "@/pages/ObjectDetail";
import PersonnelPage from "@/pages/PersonnelPage";
import OperationsPage from "@/pages/OperationsPage";
import AnomaliesPage from "@/pages/AnomaliesPage";
import NotFound from "@/pages/NotFound";
import AccessDenied from "@/pages/AccessDenied";
import SecureRoute from "@/components/SecureRoute";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Публичные маршруты */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/access-denied" element={<AccessDenied />} />
          
          {/* Защищенные маршруты */}
          <Route path="/objects" element={
            <SecureRoute requiredClearance={2}>
              <ObjectsPage />
            </SecureRoute>
          } />
          
          <Route path="/objects/:id" element={
            <SecureRoute requiredClearance={3}>
              <ObjectDetail />
            </SecureRoute>
          } />
          
          <Route path="/personnel" element={
            <SecureRoute requiredClearance={2}>
              <PersonnelPage />
            </SecureRoute>
          } />
          
          <Route path="/operations" element={
            <SecureRoute requiredClearance={3}>
              <OperationsPage />
            </SecureRoute>
          } />
          
          <Route path="/anomalies" element={
            <SecureRoute requiredClearance={2}>
              <AnomaliesPage />
            </SecureRoute>
          } />
          
          {/* Маршрут для отсутствующих страниц */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;