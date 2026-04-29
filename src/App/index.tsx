import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Routes>
            <Route path="/" element={<DefaultHome />} />
            <Route path="/auto-maintenance" element={<AutoMaint />} />
            <Route path="/general-auto-repair" element={<GeneralAutoRepair />} />
            <Route path="/major-auto-repair" element={<MajorAutoRepair />} />
            <Route path="/contact" element={<DefaultContact />} />
            <Route path="*" element={<AppFourOhFour />} />
          </Routes>
        </AppTemplateDefault>
      </Router>
    </div>
  );
}
