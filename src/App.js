import React, { Fragment } from "react";
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
function App() {
  return (
    <Fragment>
      <Header />
      {/* <PeoplePlay /> */}
      <AsInvestor />
      <InvestorCards />
      <FormSection />
      <ChooseProp />
      <Blog />
      <FundedCompanies />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
