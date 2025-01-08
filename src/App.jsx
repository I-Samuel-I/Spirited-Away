import React, { useState, useEffect } from "react";
import Display from "./assets/components/display"; 
import { GlobalStyle } from "./assets/global/style"; 
import Loading from "./assets/components/pages/loading"; 

function App() {
  const [loading, setLoading] = useState(true); 
  const [data, setData] = useState(null); 

  useEffect(() => {
    setTimeout(() => {
      setData({
        home: {
          logo: "",

        }
      });

      setLoading(false); 
    }, 1500); 
  }, []);

  if (loading) return <Loading />;
  const { home } = data;

  return (
    <>
      <GlobalStyle />
      <Display data={home} /> 
    </>
  );
}
export default App;
