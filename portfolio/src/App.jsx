import Nav from "./components/nav/Nav"

import "./app.scss"
import Main from "./components/sections/main/Main";

function App() {
  return (
    <div className="app">
      <header class="header" id="header">
        <Nav />
      </header>
      <Main />
    </div>
  );
}

export default App;
