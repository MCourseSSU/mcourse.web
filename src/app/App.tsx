import { BrowserRouter } from 'react-router-dom';
import AppLayout from './layouts/layout';
import './styles/global.css'

const App = () => {
  return (
    <BrowserRouter>
  <AppLayout />
    </BrowserRouter>
  );
};

export default App;