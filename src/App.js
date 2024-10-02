import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Myuser from "./user";
import MyBook from "./book";
import MyProduct from "./product";
import MyApi from "./api";
import Mydashboard from "./dashboard";

function App() {
  return (
    <HashRouter>
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-4 text-danger"> <h3> React, Redux, React-Redux </h3> </div>
                <div className="col-lg-8 text-end">
                    <div className="btn-group">
                      <Link className="btn btn-primary" to="/"> Dashboard </Link>
                      <Link className="btn btn-info" to="/book"> Manage Book </Link>
                      <Link className="btn btn-success" to="/product"> Manage Product </Link>
                      <Link className="btn btn-warning" to="/api"> Manage Api </Link>
                      <Link className="btn btn-secondary" to="/user"> Manage User </Link>
                    </div>
                </div>
            </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Mydashboard/>}/>
          <Route exact path="/user" element={<Myuser/>}/>
          <Route exact path="/book" element={<MyBook/>}/>
          <Route exact path="/product" element={<MyProduct/>}/>
          <Route exact path="/api" element={<MyApi/>}/>
        </Routes>
    </HashRouter>
  );
}

export default App;
