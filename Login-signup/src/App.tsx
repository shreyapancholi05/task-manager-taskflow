// import { BrowserRouter, NavLink } from "react-router"
import { HashRouter } from "react-router";
import Routes from "./routes/Routes.js";
function App() {
  return (
      <>
        <HashRouter>
          <Routes></Routes>
        </HashRouter>
          
          
        
      </>
  );
}

export default App;