function Header(){
    return (
        <header> 
        <nav className = "nav">
            <img src="./react logo.jpeg" className="nav-logo" alt="logo"/>
            <ul className="nav-items" >
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                    <li>Contact</li>
                    </ul>
                </nav>
    </header>

    );
}
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
        <footer> <small>@ 20xx Okode development. All the rights reserved</small></footer>
    </div>

    );
};
ReactDOM.render(<Page />, document.getElementById("root"));