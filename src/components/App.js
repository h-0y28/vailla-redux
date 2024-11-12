import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "./../routes/Detail";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" exact component={Home}></Route>
        <Route path="/:id" exact component={Detail}></Route> */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:id" element={<Detail></Detail>}></Route>
      </Routes>
    </Router>
  );
}
