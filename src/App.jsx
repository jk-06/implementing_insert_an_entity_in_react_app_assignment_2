
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddMovie from './components/AddMovie';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="AddMovie" element={<AddMovie />} />
      </Routes>
    </Router>
  );
};

export default App;
