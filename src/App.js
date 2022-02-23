import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './Checkout';
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment"; 
import Footer from "./Footer";
// import Orders from "./Orders";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Confirm from "./Confirm";


const promise = loadStripe('pk_test_51KVrYXSHOrbPbL79dXcpEJrIq6mz1CoY26f03xM8rg0kNSW2JEpAWDzFKM0OLmAXtTuk7HU61haC1tT28sRAFqbZ00sl6teQhp')
function App() {
  const [{}, dispatch] = useStateValue();
  // runs when the app loads only once
  //listener
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={[<Login />]}/>
          <Route path="/" element={[<Header />, <Home />, <Footer/>]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/payment" element={[<Header />, <Elements stripe={promise}><Payment /></Elements>]} />
          <Route path="/confirm" element={ [<Header />,<Confirm/>]} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

