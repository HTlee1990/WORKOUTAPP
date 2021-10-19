import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import Callback from "./controller/Callback";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <LandingPage exact path="/" />
      {/* <Route path="/callback" component={Callback} /> */}
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
