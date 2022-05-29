import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'


function Home() {
  return (
    <div>
      <div class="section no-pad-bot" id="index-banner">
        <div class="container">
          <br /><br />
          <h1 class="header center orange-text">Pizza Pals</h1>
          <div class="row center">
            <h5 class="header col s12 light">A modern solution to all of your pizza woes.</h5>
          </div>
          <div class="row center">
            <Link to="/create" class="btn-large waves-effect waves-light orange">Get Started</Link>
          </div>
          <br /><br />
        </div>
      </div>
      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center light-blue-text"><i class="material-icons">assessment</i></h2>
                <h5 class="center">Rank Your Toppings</h5>

                <p class="light">Placeholder text</p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
                <h5 class="center">Add Friends</h5>

                <p class="light">Placeholder text</p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center light-blue-text"><i class="material-icons">pie_chart</i></h2>
                <h5 class="center">Get Your Perfect Pizza</h5>

                <p class="light">Placeholder text</p>
              </div>
            </div>
          </div>

        </div>
        <br /><br />
      </div>
    </div>
  )
}
export default Home