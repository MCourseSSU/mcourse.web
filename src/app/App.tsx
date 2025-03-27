import { BrowserRouter } from 'react-router-dom';
import { RouterProvider } from '../app/providers/RouterProvider';
import NavigationMenu from '../widgets/NavigationMenu/ui/NavigationMenu';
import '../index.css';
const App = () => {
  return (
    <BrowserRouter>
      <NavigationMenu />
      <RouterProvider />
    </BrowserRouter>
  );
};

export default App;