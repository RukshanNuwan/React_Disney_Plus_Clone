import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" exact={true} element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
