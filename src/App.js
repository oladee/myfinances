import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing page/Landing';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </div>
  );
}

export default App;
