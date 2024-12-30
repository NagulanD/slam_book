// import { Component } from "react"
// import Form from './Form.jsx'
// import './App.css'
// import Slambook from "./Slambook.jsx"

// class App extends Component{

//   render(){
//     return(
//       <> 
//          <Slambook></Slambook>
//       </>
//     )
//   }
// }

// export default App

// 
// import Form from './Form.jsx'
// function App() { 

//   return (
//     <>
        
//        <Form></Form>
       
//     </>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <table className="layout-table">
        <thead>
          <tr>
            <td className="logo-cell"><Link to="/home">O ABC</Link></td>
            <td colSpan="3" className="nav-cell">
              <nav>
                <ul className="nav-links">
                  <li><Link to="/home">HOME</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" className="content-cell">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="footer-cell">copyright</td>
          </tr>
        </tfoot>
      </table>
    </Router>
  );
}

export default App;
