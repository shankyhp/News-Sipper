import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

const App = () => {

  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  console.log("API Key:", apiKey);


  const [progress, setProgress] = useState(0)




  return (
    <>
      <BrowserRouter>
        <Navbar />


        <LoadingBar height={3} color="#f11946" progress={progress} />


        <Routes>

          <Route path="/" element={<Navigate to="/general" />} />
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country="us" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="business" country="us" category="business" />} />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="health" country="us" category="health" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="entertainment" country="us" category="entertainment" />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="science" country="us" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="technology" country="us" category="technology" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App







