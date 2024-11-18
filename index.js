import React from "react";
import ReactDOM from "react-dom/client";
import mainContent from "./mainContent";
import Footer from "./Footer";
import Head from "./Header";



function Page() {
    return (
        <div>
          <Head />
          <mainContent />
          <Footer />
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);

