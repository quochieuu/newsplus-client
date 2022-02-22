import "./App.scss";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './config/Routes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
