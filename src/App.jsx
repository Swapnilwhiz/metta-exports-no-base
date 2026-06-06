import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import TextilesHandicrafts from './pages/TextilesHandicrafts';
import SpicesExport from './pages/SpicesExport';
import NaturalProducts from './pages/NaturalProducts';
import CocoaBeansPowder from './pages/CocoaBeansPowder';
import IndiaDomesticSourcing from './pages/IndiaDomesticSourcing';
import ExportProcessCompliance from './pages/ExportProcessCompliance';
import Contact from './pages/Contact';
import ScrollToTop from './components/shared/ScrollToTop';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-border border-t-accent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/textiles-handicrafts-home-decor" element={<TextilesHandicrafts />} />
          <Route path="/spices-export" element={<SpicesExport />} />
          <Route path="/natural-products" element={<NaturalProducts />} />
          <Route path="/cocoa-beans-powder" element={<CocoaBeansPowder />} />
          <Route path="/india-domestic-sourcing" element={<IndiaDomesticSourcing />} />
          <Route path="/export-process-compliance" element={<ExportProcessCompliance />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App