import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import RenovationsPage from './pages/renovations';
import BuildingPage from './pages/building';
import InsulationPage from './pages/insulation';
import CarpenterPage from './pages/carpenter';
import ContactPage from './pages/contact';
import ProjectsPage from './pages/projects';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/renovations' component={RenovationsPage}/>
        <Route exact path='/building' component={BuildingPage} />
        <Route exact path='/insulation' component={InsulationPage} />
        <Route exact path='/carpenter' component={CarpenterPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/projects' component={ProjectsPage} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
