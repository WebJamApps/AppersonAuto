/* eslint-disable react/destructuring-assignment */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { Dispatch, PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AutoMaint from '../containers/AutoMaintenance';
import GeneralAutoRepair from '../containers/GeneralAutoRepair';
import MajorAutoRepair from '../containers/MajorAutoRepair';
import DefaultContact from '../containers/Contact';
import AppFourOhFour from './404';
import AppTemplateDefault from './AppTemplate';
import DefaultHome from '../containers/Homepage';

export interface AppProps {
  dispatch: Dispatch<unknown>;
}

export class App extends PureComponent<AppProps> {
  static defaultProps = {
    dispatch: /* istanbul ignore next */(): void => { },
    auth: {
      isAuthenticated: false, token: '', error: '', email: '', user: { userType: '' },
    },
  };

  render(): JSX.Element {
    return (
      <React.StrictMode>
        <div id="App" className="App">
          <Router>
            <AppTemplateDefault dispatch={this.props.dispatch}>
              <Switch>
                <Route exact path="/" component={DefaultHome} />
                <Route path="/auto-maintenance" component={AutoMaint} />
                <Route path="/general-auto-repair" component={GeneralAutoRepair} />
                <Route path="/major-auto-repair" component={MajorAutoRepair} />
                <Route path="/contact" component={DefaultContact} />
                <Route component={AppFourOhFour} />
              </Switch>
            </AppTemplateDefault>
          </Router>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
