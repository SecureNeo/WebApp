import gif from './devo.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Welcome to the new Era of Azure DevOps Integration and Releases!
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kick Starting with REACT Framework
        </a>

        <img src={gif} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
