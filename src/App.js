import Mission from "./components/Mission/Mission";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Missions from "./containers/Missions/Missions";
import LaunchDetails from "./containers/LaunchDetails/LaunchDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route index element={<Missions />} />
          <Route path="/details/:flight_number" element={<LaunchDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
