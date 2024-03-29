import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import NowScreen from "./screens/NowScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/now" element={<NowScreen />} />
      </Routes>
    </div>
  );
}

export default App;
