import Maps from "./components/Maps/Maps"
import './App.css';
import './index.css';
import Attendance from "./components/Attendance/Attendance";
import Employee from "./components/Employee/Employee";

function App() {
  return (
    <div className="App flex">
      <Maps/>
      <div className="left-side">
      <Attendance/>
      <Employee/>
      </div>
    </div>
  );
}

export default App;
