import ReactDOM from "react-dom/client";
import Link from "react-router-dom"

function AppHeader() {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Pizza Pals</a>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default AppHeader