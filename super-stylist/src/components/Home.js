import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./navbar/login";
import Contact from "./navbar/contact";
import About from "./navbar/about";
import MainPage from "./Main/mainpage";
import FashionTips from "./options/tips";
import SlideShow from "./home files/slideshow";
import MenCard from "./options/menCard";
import WomenCard from "./options/womenCard";
import LookBook from "./Main/lookbook";
import MenCollection from "./Men/men";
import WomenCollection from "./women/women";
import WomenSummer from "./women/WomenSummer";
import WomenWinter from "./women/WomenWinter";
import SingleProd from "./women/SingleProd";
import SummerMen from "./Men/menSummer";
import MenWinter from "./Men/menWinter";
class Home extends React.Component {
 

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <MainPage
              
              />
              <SlideShow />
             
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/FashionTips">
              <FashionTips />
            </Route>
            <Route exact path="/Men">
              <MenCollection />
            </Route>
            <Route exact path="/Women">
              <WomenCollection />
            </Route>
            <Route exact path="/LookBook">
              <LookBook />
            </Route>
            <Route exact path="/women_summer">
              <WomenSummer />
            </Route>
            <Route exact path="/women_winter">
              <WomenWinter />
            </Route>
            <Route exact path="/men_winter">
              <MenWinter />
            </Route>
            <Route exact path="/men_summer">
              <SummerMen />
            </Route>
            <Route exact path="/product/:id">
              <SingleProd />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Home;
