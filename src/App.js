import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Quiz from './Components/QuizItems/Quiz';
import Resources from './Components/Resources';


function App() {
  return (
    <div className="theApp">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
}

export default App;
