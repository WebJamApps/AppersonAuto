import PropTypes from 'prop-types';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AutoMaintenance from '../containers/AutoMaintenance';
import GeneralAutoRepair from '../containers/GeneralAutoRepair';
import MajorAutoRepair from '../containers/MajorAutoRepair';
import Contact from '../containers/Contact';
import AppFourOhFour from './404';
import AppTemplateDefault from './AppTemplate';
import DefaultHome from '../containers/Homepage';
import mapStoreToProps from '../redux/mapStoreToProps';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="App" className="App">
        <Router>
          <AppTemplateDefault id="homepage">
            <Switch>
              <Route exact path="/" component={DefaultHome} />
              <Route path="/auto-maintenance" component={AutoMaintenance} />
              <Route path="/general-auto-repair" component={GeneralAutoRepair} />
              <Route path="/major-auto-repair" component={MajorAutoRepair} />
              <Route path="/contact" component={Contact} />
              <Route component={AppFourOhFour} />
            </Switch>
          </AppTemplateDefault>
        </Router>
      </div>

    );
  }
}
App.propTypes = {
  auth: PropTypes.shape({ user: PropTypes.shape({ userType: PropTypes.string }), isAuthenticated: PropTypes.bool }),
};
App.defaultProps = { auth: { isAuthenticated: false, user: { userType: '' } } };

export default connect(mapStoreToProps, null)(App);
