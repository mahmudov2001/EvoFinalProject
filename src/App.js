import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Home/Home";
import Services from "./Services/Services";
import About  from "./About/About";

function App() {
  return (
    <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/services'}  element={<Services />} />
          <Route path={'/about'}  element={<About />} />
          {/* <Route path={'/contacts'} element={<Contacts />}  /> */}
    </Routes>
  );
}

export default App;
