
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Alfas from "./pages/Alfas";
import Equipo from "./pages/Equipo";
import Cuenta from "./pages/Cuenta";
import { BottomNavBar } from "./components/BottomNavBar";
import { EquipoTransicion } from "./components/EquipoTransicion";
import { Alfa } from './pages/Alfa';

function App() {
  return (
    <div style={{marginBottom: "85px"}}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alfas" element={<Alfas />} />
      <Route path="/alfas/gestion/equipo" element={<EquipoTransicion type="gestion" percent={68}  />} />  
      <Route path="/equipo" element={<Equipo />} />
      <Route path="/cuenta" element={<Cuenta />} />

    </Routes>
    <BottomNavBar  />

    </div>
  );
}

export default App;
