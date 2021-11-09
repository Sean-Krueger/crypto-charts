import React from "react";
import ReactDOM from "react-dom"
import { Route, BrowserRouter, Routes, Redirect} from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import Header from "./components/Header";
import "./App.css";
import { WatchListContextProvider } from "./context/watchListContext";

const App = () => {
  return (
    <WatchListContextProvider>
    <BrowserRouter>
    <div className="container">
     <CoinSummaryPage/>
        <Routes>
          <Route exact path="/" component={CoinSummaryPage} />
          <Route path="/coins/:id" component={CoinDetailPage} />
        </Routes>

    </div>
    </BrowserRouter>
    </WatchListContextProvider>
  );
};

export default App;