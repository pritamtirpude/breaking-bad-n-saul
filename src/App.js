import HomePage from "../src/pages/homepage/HomePage";
import GlobalStyles from "./components/GlobalStyles";
import { Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/navbar/NavbarComponent";
import QuotesPage from "./pages/quotespage/QuotesPage";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <NavbarComponent />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/quotes">
          <QuotesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
