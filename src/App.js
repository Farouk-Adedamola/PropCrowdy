import React, { Fragment, useState, useEffect } from "react";
import DotLoader from "react-spinners/ClipLoader";
import Header from "./Components/Header/Header";
import PeoplePlay from "./Components/PeoplePlay/PeoplePlay";
import AsInvestor from "./Components/AsInvestor/AsInvestor";
import InvestorCards from "./Components/InvestorCards/InvestorCards";
import FormSection from "./Components/FormSection/FormSection";
import ChooseProp from "./Components/ChooseProp.js/ChooseProp";
import Blog from "./Components/BlogSection/Blog";
import FundedCompanies from "./Components/FundedCompanies/FundedCompanies";
import Contact from "./Components/ContactSupport/Contact";
import "./App.css";
import Footer from "./Pagination/Footer/Footer";
import AsDeveloper from "./Components/AsInvestor/AsDeveloper";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <DotLoader
          color={"#FF0000"}
          loading={loading}
          size={40}
          cssOverride={{
            display: "block",
            margin: "40vh auto",
            // transform: "translateY(50vh)",
          }}
        />
      ) : (
        <div>
          <Header />
          <PeoplePlay />
          <AsInvestor />
          <InvestorCards />
          <AsDeveloper />
          <FormSection />
          <ChooseProp />
          <Blog />
          <FundedCompanies />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
