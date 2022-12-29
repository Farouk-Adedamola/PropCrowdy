import React, { Fragment } from "react";
import Header from "../../Components/Header/Header";
import PeoplePlay from "../../Components/PeoplePlay/PeoplePlay";
import AsInvestor from "../../Components/AsInvestor/AsInvestor";
import InvestorCards from "../../Components/InvestorCards/InvestorCards";
import FormSection from "../../Components/FormSection/FormSection";
import ChooseProp from "../../Components/ChooseProp.js/ChooseProp";
import Blog from "../../Components/BlogSection/Blog";
import FundedCompanies from "../../Components/FundedCompanies/FundedCompanies";
import Contact from "../../Components/ContactSupport/Contact";
import Footer from "../../pages/Footer/Footer";
import AsDeveloper from "../../Components/AsInvestor/AsDeveloper";
const Home = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Home;
