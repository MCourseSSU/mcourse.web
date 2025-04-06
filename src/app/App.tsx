import { BrowserRouter } from 'react-router-dom';
import NavigationMenu from '@/widgets/NavigationMenu/ui/NavigationMenu';
import '../index.css';
import './global.css'

const App = () => {
  return (
    <BrowserRouter>
      <NavigationMenu />
    </BrowserRouter>
  );
};

export default App;