import Login from "./components/Login"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={< Login />} />
      <Route path="/home" element={< Homepage />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
