import logo from './logo.svg';
import './App.css';
import AppFooter from './AppFooter.js'
import Home from './pages/Home.js'
import Create from './pages/Create.js'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">Pizza Pals</a>
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/create" element={<Create/>}></Route>
        </Routes>
      </BrowserRouter>
      <AppFooter />
    </div>
  );
}

export default App;
