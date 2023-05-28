import Menu from "./components/Menu";
import './App.css'
import { createContext, useState } from "react";
import Quiz from "./components/Quiz";
import Score from "./components/Score";

export const DataContext = createContext();

function App() {
  const [appState, setAppState] = useState('menu');
  const [score, setScore] = useState(0);
  return (
    <DataContext.Provider value={{ appState, setAppState, score, setScore }}>
      <div className="app">
        <h1>Quiz Game</h1>
        <div className="container">
          {appState === 'menu' && <Menu />}
          {appState === 'quiz' && <Quiz />}
          {appState === 'score' && <Score />}
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
