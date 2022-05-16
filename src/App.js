import './App.css';
import NavigationBar from './Shared/NavigationBar';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Reviews from './Pages/Reviews/Reviews';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Users from './Pages/Dashboard/Users';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className='max-w-7xl mx-auto px-12'>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path="/appointment" element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          } />
          <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route index element={<MyAppointments></MyAppointments>}></Route>
            <Route path="review" element={<MyReview></MyReview>}></Route>
            <Route path="history" element={<MyHistory></MyHistory>}></Route>
            <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
            <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
            <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
          </Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
