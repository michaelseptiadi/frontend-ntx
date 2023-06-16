import Maps from "./components/Maps/Maps"
import './App.css';
import './index.css';
import Attendance from "./components/Attendance/Attendance";
import Employee from "./components/Employee/Employee";

function App() {
  return (
    <div className="App">
      <Maps/>
      <div className="left-side w-1/4">
      <Attendance/>
      <Employee/>
      </div>
    </div>
  );
}

export default App;
