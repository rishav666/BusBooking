const React = require('react')
const Header = require('./pages/Header');
const Bookticket = require('./pages/Bookticket');
const Information = require('./pages/Information');
const Payment = require('./pages/Payment');
const Ticket = require('./pages/Ticket');


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch

} from "react-router-dom";




const index = (props) => {


  // let match = useRouteMatch();

    return (
  <html>
    <head>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

    <link rel="stylesheet" href="stylesheets/bootstrap.css" />




    </head>
    <body >
   <Header/>
   <Router>
   <div class="row">
   <span class="col col-lg-3 mx-auto">  <button class="btn btn-lg btn-danger  " type="button" name="button"><Link to="/Bookticket">Book ticket</Link></button>
   </span>
   <span class="col col-lg-3">  <button class="btn btn-lg btn-danger" type="button" name="button"><Link to="/Information">Information</Link></button>
   </span>
   <span class="col col-lg-3">  <button class="btn btn-lg btn-danger" type="button" name="button"><Link to="/Payment">Payment</Link></button>
   </span>
   <span class="col col-lg-3"> <button class="btn btn-lg btn-danger" type="button" name="button"><Link to="/Ticket">Ticket</Link></button>
   </span>
   </div>


    <Switch>
        <Route path="/Bookticket">
        <Bookticket/>
        </Route>

       <Route path="/Information">
       <Information/>
       </Route>

       <Route path="/Payment">
       <Payment/>
       </Route>

       <Route path="/Ticket">
       <Ticket/>
       </Route>

   </Switch>
  </Router>
    </body>
  </html>

    );
};

module.exports = index
