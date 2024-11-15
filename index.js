import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";

function Page() {
    return (
        <div>
            <Header />
            <h1>These are the things I like</h1>
            <ul>
                <li>Coding in the morning</li>
                <li>Coffee at night before I code more</li>
                <li>I like cooked cabbage while coding through my projects</li>
            </ul>
            <p>These are the things that I love doing</p>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
