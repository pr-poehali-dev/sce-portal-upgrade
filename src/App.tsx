import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import DocumentsPage from "@/pages/DocumentsPage";
import DocumentDetail from "@/pages/DocumentDetail";
import NotFound from "@/pages/NotFound";
import AccessDenied from "@/pages/AccessDenied";
import SecureRoute from "@/components/SecureRoute";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/access-denied" element={<AccessDenied />} />
          
          {/* Защищенные маршруты */}
          <Route path="/documents" element={
            <SecureRoute requiredClearance={3}>
              <DocumentsPage />
            </SecureRoute>
          } />
          
          <Route path="/documents/:id" element={
            <SecureRoute requiredClearance={4}>
              <DocumentDetail />
            </SecureRoute>
          } />
          
          <Route path="/personnel" element={
            <SecureRoute requiredClearance={3}>
              <DocumentsPage />
            </SecureRoute>
          } />
          
          <Route path="/operations" element={
            <SecureRoute requiredClearance={4}>
              <DocumentsPage />
            </SecureRoute>
          } />
          
          <Route path="/anomalies" element={
            <SecureRoute requiredClearance={3}>
              <DocumentsPage />
            </SecureRoute>
          } />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;