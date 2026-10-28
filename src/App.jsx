import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/common/Loader";

// Main Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

// Hardware Pages
import Datastorage from "./technology/hardware/Datastorage";
import PcServer from "./technology/hardware/PcServer";
import ServerServer from "./technology/hardware/ServerServer";

// Services Pages
import ConsultingProfessional from "./technology/services/ConsultingProfessional";
import AccountingFinancial from "./technology/services/AccountingFinancial";
import ITManagement from "./technology/services/ITManagement";
import CyberSecurity from "./technology/services/CyberSecurity";

// Solutions Pages
import Cloud from "./technology/solutions/Cloud";
import DataCenter from "./technology/solutions/DataCenter";
import Emerging from "./technology/solutions/Emerging";
import InformationCyber from "./technology/solutions/InformationCyber";

// Partners Page
import Partners from "./technology/partners/Partners";
import Solutions from "./pages/Solutions";
import Hardware from "./technology/hardware/Hardware";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Display loader
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Application Routes */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Product Pages */}
        <Route path="/products/datastorage" element={<Datastorage />} />
        <Route path="/products/pc-server" element={<PcServer />} />
        <Route path="/products/server-server-management" element={<ServerServer />} />

        {/* Legacy product routes */}
        <Route path="/technology/hardware/datastorage" element={<Navigate to="/products/datastorage" replace />} />
        <Route path="/technology/hardware/pc-server" element={<Navigate to="/products/pc-server" replace />} />
        <Route path="/technology/hardware/server-server-management" element={<Navigate to="/products/server-server-management" replace />} />

        {/* Main Services Page */}
        <Route
          path="/technology/services"
          element={<Service />}
        />

        {/* Consulting & Professional Services */}
        <Route
          path="/technology/services/consulting-professional"
          element={<ConsultingProfessional />}
        />

        {/* Accounting & Financial Services */}
        <Route
          path="/technology/services/accounting-financial"
          element={<AccountingFinancial />}
        />

        {/* IT Management Services */}
        <Route
          path="/technology/services/it-management"
          element={<ITManagement />}
        />

        {/* Cyber Security Services */}
        <Route
          path="/technology/services/cyber-security"
          element={<CyberSecurity />}
        />

        {/* Solutions Pages */}
        <Route
          path="/technology/solutions/cloud"
          element={<Cloud />}
        />

        <Route
          path="/technology/solutions/datacenter"
          element={<DataCenter />}
        />

        <Route
          path="/technology/solutions/emerging"
          element={<Emerging />}
        />

        <Route
          path="/technology/solutions/information-cyber"
          element={<InformationCyber />}
        />

        {/* Technology Partners */}
        <Route
          path="/technology/partners"
          element={<Partners />}
        />

        <Route
          path="/pages/solutions"
          element={<Solutions />}
        />

        <Route
          path="/technology/solutions"
          element={<Solutions />}
        />

        <Route path="/products" element={<Hardware />} />

        {/* Legacy routes */}
        <Route
          path="/technology/hardware"
          element={<Navigate to="/products" replace />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
