import './App.css';
import Forms from './Forms'
import FormsDetail from './FormsDetail'
import { Routes, Route} from 'react-router-dom';

function App() {
   
  return (
    <div className="App">
    <Routes>
      <Route path="*" element={<Forms/>} />
      <Route path="/:formID" element={<FormsDetail/>} />
      </Routes>
    </div>
  );
}

export default App;