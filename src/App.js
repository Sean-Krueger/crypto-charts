import React from "react";
import ReactDOM from "react-dom"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import Header from "./components/Header";
import "./App.css";
// import { WatchListContextProvider } from "./context/watchListContext";

const App = () => {
  return (
    <Router>
    <div className="container">
        <Header />
        <Routes>
          <Route exact path="/" component={CoinSummaryPage} />
          <Route path="/coins/:id" component={CoinDetailPage} />
        </Routes>
    </div>
    </Router>
  );
};

export default App;