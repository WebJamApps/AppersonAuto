import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AutoMaint from '../containers/AutoMaintenance';
import GeneralAutoRepair from '../containers/GeneralAutoRepair';
import MajorAutoRepair from '../containers/MajorAutoRepair';
import DefaultContact from '../containers/Contact';
import AppFourOhFour from './404';
import AppTemplateDefault from './AppTemplate';
import DefaultHome from '../containers/Homepage';

export function App(): JSX.Element {
  return (
        <div id="App" className="App">
          <Router>
            <AppTemplateDefault>
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
  );
}

