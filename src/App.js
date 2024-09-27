import { BrowserRouter , Navigate , Route , Routes } from 'react-router-dom';
import './assets/fomantic/dist/semantic.css';
import {routes} from './route';
// require('dotenv').config()

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {routes.map((route, index) =>
        <Route
          key={"route-" + index}
          path={route.path}
          element={route.element}
        />
      )}
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
