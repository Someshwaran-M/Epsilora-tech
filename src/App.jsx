import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/common/Loader";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

/* =========================================================
   HARDWARE PAGES
========================================================= */

import Datastorage from "./technology/hardware/Datastorage";
import PcServer from "./technology/hardware/PcServer";
import ServerServer from "./technology/hardware/ServerServer";

/* =========================================================
   SERVICES PAGES
========================================================= */

import ConsultingProfessional from "./technology/services/ConsultingProfessional";

/* =========================================================
   SOLUTIONS PAGES
========================================================= */

import Cloud from "./technology/solutions/Cloud";
import DataCenter from "./technology/solutions/DataCenter";
import Emerging from "./technology/solutions/Emerging";
import InformationCyber from "./technology/solutions/InformationCyber";

/* =========================================================
   PARTNERS PAGE
========================================================= */

import Partners from "./technology/partners/Partners";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  /* =========================================================
     LOADER
  ========================================================= */

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          ROUTES
      ===================================================== */}

      <Routes>

        {/* ===================================================
            HOME
        =================================================== */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ===================================================
            CONTACT
        =================================================== */}

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* ===================================================
            HARDWARE
        =================================================== */}

        {/* Data Storage */}

        <Route
          path="/technology/hardware/datastorage"
          element={<Datastorage />}
        />


        {/* PC & Server */}

        <Route
          path="/technology/hardware/pc-server"
          element={<PcServer />}
        />


        {/* Server & Server Management */}

        <Route
          path="/technology/hardware/server-server-management"
          element={<ServerServer />}
        />


        {/* ===================================================
            SERVICES
        =================================================== */}

        {/* Consulting & Professional Services */}

        <Route
          path="/technology/services/consulting-professional"
          element={<ConsultingProfessional />}
        />


        {/* ===================================================
            SOLUTIONS
        =================================================== */}

        {/* Cloud */}

        <Route
          path="/technology/solutions/cloud"
          element={<Cloud />}
        />


        {/* Data Center */}

        <Route
          path="/technology/solutions/datacenter"
          element={<DataCenter />}
        />


        {/* Emerging Technology */}

        <Route
          path="/technology/solutions/emerging"
          element={<Emerging />}
        />


        {/* Information & Cyber Security */}

        <Route
          path="/technology/solutions/information-cyber"
          element={<InformationCyber />}
        />


        {/* ===================================================
            BRAND PARTNERS
        =================================================== */}

        <Route
          path="/technology/partners"
          element={<Partners />}
        />

      </Routes>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </>
  );
}

export default App;