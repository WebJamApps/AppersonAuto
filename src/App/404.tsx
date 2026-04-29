import { Navigate } from 'react-router-dom';

const FourOhFour = (): JSX.Element => (
  <div className="page-content">
    <div className="fof">
      404 - Page not available
    </div>
    <Navigate to="/" replace />
  </div>
);
export default FourOhFour;
