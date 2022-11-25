import React, { Fragment } from "react";
import Header from "./Components/Header/Header";
import PeoplePlay from "./Components/PeoplePlay/PeoplePlay";
import AsInvestor from "./Components/AsInvestor/AsInvestor";
import InvestorCards from "./Components/InvestorCards/InvestorCards";
import "./App.css";
function App() {
  return (
    <Fragment>
      <Header />
      <PeoplePlay />
      <AsInvestor />
      <InvestorCards />
    </Fragment>
  );
}

export default App;
