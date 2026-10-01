import{BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Departments from "./components/Departments";
import Services from "./components/Services";
import Contact from "./components/Contact";
import PatientRegistration from "./pages/PatientRegistration";
import Appointment from "./pages/Appointment";
function App(){
  return(
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Hero />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/doctors" element={<Doctors />}/>
      <Route path="/departments" element={<Departments />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/appointment" element={<Appointment/>} />
      <Route path="/patient-registration" element={<PatientRegistration />} />
          </Routes>
          <Footer />
    </BrowserRouter>
  );
}
export default App;