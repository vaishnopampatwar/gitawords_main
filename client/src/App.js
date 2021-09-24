import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Emotion from './Emotion';
import Footer from './Footer';
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
import Angry from './Angry';
import NVG from './nvg';
import Header from './Header'
import confusion from './confusion';
import envy from './envy';
import Death from './Death';
import Depression from './Depression';
import Fear from './Fear';
import Greed from './Greed';
import Discriminated from './Discriminated';
import Lazy from './Lazy';
import Sin from './Sin';
import { Contact } from './Contact';
import Whtgita from './Whtgita';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NVG />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/emotion" component={Emotion} />
          <Route exact path="/angry" component={Angry} />
          <Route exact path="/confusion" component={confusion} />
          <Route exact path="/envy" component={envy} />
          <Route exact path="/death" component={Death} />
          <Route exact path="/depression" component={Depression} />
          <Route exact path="/fear" component={Fear} />
          <Route exact path="/greed" component={Greed} />
          <Route exact path="/discriminated" component={Discriminated} />
          <Route exact path="/lazy" component={Lazy} />
          <Route exact path="/sin" component={Sin} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/togita" component={Whtgita} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
