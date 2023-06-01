import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from '@mui/material/Button';
import SideNav from './SideNav';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CreateIncident from './pages/CreateIncident';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <SideNav />
        <Routes>
          <Route path="/" exact element={<Dashboard />}></Route>
          <Route path="/create" exact element={<CreateIncident />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
