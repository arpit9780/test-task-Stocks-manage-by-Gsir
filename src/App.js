import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { IndexRoute } from './Routes/IndexRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
      <IndexRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
