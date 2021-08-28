import logo from "./ad.gif";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="" alt="logo" />
        <p>
          Welcome to the Azure DevOps Era
         {/* Edit <code> src / App.js 
         </code> and save to reload. React is Running{" "}
         */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          text-decoration="none"
        >
          Start with React Framework{""}
        </a>{" "}
      </header>{" "}
    </div>
  );
}

export default App;
