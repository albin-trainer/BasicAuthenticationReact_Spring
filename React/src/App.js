import logo from './logo.svg';
import './App.css';
import Menu from './component/Menu';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
      </BrowserRouter>
    </div>
  );
}

export default App;
