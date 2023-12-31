import './App.css';
import { Outlet } from 'react-router-dom';
import { TimeoutProvider } from './components/providers/timeout-provider';

function App() {
  return (
    <TimeoutProvider>
      <Outlet />
    </TimeoutProvider>
  );
}

export default App;

