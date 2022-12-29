import React, { Fragment, useState, useEffect } from "react";
import DotLoader from "react-spinners/ClipLoader";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Discover from "./pages/Discover";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
import Resources from "./pages/Resources";
// import HowItpage from "./pages/HowItpage.Js";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Fragment style={{ width: "100%" }}>
      {loading ? (
        <DotLoader
          color={"#FF0000"}
          loading={loading}
          size={40}
          cssOverride={{
            display: "block",
            margin: "40vh auto",
          }}
        />
      ) : (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="discover" element={<Discover />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="Blog" element={<Blog />} />
                {/* <Route path="How" element={<HowItpage />} /> */}
                <Route path="resources" element={<Resources />} />

                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </Fragment>
  );
}

export default App;
