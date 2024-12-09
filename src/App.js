import { useRef } from "react";
import "./App.css";
import Category from "./Components/Category";
import Foods from "./Components/Foods";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";
import { GoogleMap } from "@react-google-maps/api";


function App() {
  const headerRef = useRef(null);

  const handleScrollToTop = () => {

    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App"  ref={headerRef}>
       <BrowserRouter>
      <Header headerRef={headerRef} />
      {/* <GoogleMap/> */}
      <Category />
      <Foods />
      <Footer onScrollToTop={handleScrollToTop} />
       </BrowserRouter>
    </div>
  );
}

export default App;
