import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ViewPatientForm from './Components/Doctor/ViewPatientForm'
import { Box } from '@mui/material'
import AddPatientData from './Components/Doctor/AddPatientData'
import Profile from './Components/Patient/Profile'
import Dashboard from './Components/Patient/Dashboard'
import EditProfile from './Components/Patient/EditProfile'
import LandingPage from './Components/LandingPage'
import DoctorHome from './Components/Doctor/DoctorHome'
import DoctorRegister from './Components/Doctor/DoctorRegister'
import PatientRegister from './Components/Patient/PatientRegister'
import DoctorLogin from './Components/Doctor/DoctorLogin'
import PatientLogin from './Components/Patient/PatientLogin'

function App() {

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      height={1}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={LandingPage} />
          <Route exact path='/doctor/register' Component={DoctorRegister} />
          <Route exact path='/doctor/login' Component={DoctorLogin} />
          <Route exact path='/doctor/home' Component={DoctorHome} />
          <Route exact path='/doctor/add-patient-data' Component={AddPatientData} />
          <Route exact path='/doctor/view-patient-form' Component={ViewPatientForm} />
          <Route exact path='/patient/register' Component={PatientRegister} />
          <Route exact path='/patient/login' Component={PatientLogin} />
          <Route exact path='/patient/profile' Component={Profile} />
          <Route exact path='/patient/home' Component={Dashboard} />
          <Route exact path='/patient/edit-profile' Component={EditProfile} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
