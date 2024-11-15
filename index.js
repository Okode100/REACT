import Header from "./Header";
import Footer from "./Footer";


function Page()  {
    return (        
    <div> 
       
        <h1>These are the think i like</h1>
        <ul> 
            <li>Coding in the morning </li>
            <li>Coffe at night before i go to code more</li>
            <li>I loike cooked cabbage when am coding through my projects</li>
        </ul>
        <p>This are the thing that i love doing</p>
       
    );
    </div>
};
ReactDOM.render(<Page />, document.getElementById("root"));