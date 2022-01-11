import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import './App.css';
import Detail from "./components/Detail";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" exact={true} element={<Login/>}/>
          <Route path="/home" exact={true} element={<Home/>}/>
          <Route path="/detail/:id" exact={true} element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
