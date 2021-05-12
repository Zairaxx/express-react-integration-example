import logo from './logo.svg';
import './App.css';
import Students from './components/Students';
import StudentForm from './components/StudentForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Students />
        <StudentForm />
      </header>
    </div>
  );
}

export default App;
