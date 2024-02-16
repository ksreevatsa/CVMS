import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contactus from './components/Contactus';
import Appointment from './components/Appointment';
import Login from './components/Login';
import Logout from './components/Logout';
import Parents from './components/Parents';
import Students from './components/Students';
import Faculty from './components/Faculty';
import Reports from './components/Reports';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Visitor from './components/Visitor';
import Councellors from './components/Councellors';
import Filter from './components/Filter';
import Gitapi from './components/Gitapi';
import View from './components/View';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
   
      <Routes>
        <Route path='/student' element={<Students />} />
        <Route path='/counsellor' element={<Councellors/>} />
        <Route path='/parent' element={<Parents />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/contactus' element={<Contactus/>} />
        <Route path='/filter' element={<Filter/>} />
        <Route path='/gitapi' element={<Gitapi/>} />
        <Route path='/view' element={<View/>} />
        <Route path='/visitor' element={<Visitor name='deva' phone='22122023' relation='brother' time='1:00am' id='6987' />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  </BrowserRouter>
  //   <div className="App">
  //       <Navbar/>
  //       <Login></Login>
  //      <Header></Header>
  // <Students></Students>
  //     <Parents></Parents>
  //     <Visitor name='deva' phone='22122023' relation='brother' time='1:00am' id='6987' ></Visitor>
  //    <Councellors></Councellors>
  //     <Contactus ></Contactus>
  //     <Footer></Footer>
  //   </div>
  );
}

export default App;
