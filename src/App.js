import './App.css';
import { StopwatchDisplay } from './components/StopwatchDisplay';
import { StopwatchNav } from './components/StopwatchNav';

function App() {
  return (
    <div className="App">
      <h1>Stopwatch</h1>

      <div className="stopwatch">
        <StopwatchDisplay />
        <StopwatchNav />
      </div>
    </div>
  );
}

export default App;
