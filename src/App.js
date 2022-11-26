import React, { Fragment } from "react";
import Header from "./Components/Header/Header";
import PeoplePlay from "./Components/PeoplePlay/PeoplePlay";
import AsInvestor from "./Components/AsInvestor/AsInvestor";
import InvestorCards from "./Components/InvestorCards/InvestorCards";
import FormSection from "./Components/FormSection/FormSection";
import ChooseProp from "./Components/ChooseProp.js/ChooseProp";
import Blog from "./Components/BlogSection/Blog";
import "./App.css";
function App() {
  return (
    <Fragment>
      <Header />
      <PeoplePlay />
      <AsInvestor />
      <InvestorCards />
      <FormSection />
      <ChooseProp />
      <Blog />
    </Fragment>
  );
}

export default App;
