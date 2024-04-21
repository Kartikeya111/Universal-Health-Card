import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ViewPatientForm from './Components/Doctor/ViewPatientForm'
import { Box } from '@mui/material'
import AddPatientData from './Components/Doctor/AddPatientData'
import Profile from './Components/Patient/Profile'
import Dashboard from './Components/Patient/Dashboard'
import EditProfile from './Components/Patient/EditProfile'
import LandingPage from './Components/LandingPage'

function App() {

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      height={1}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={LandingPage} />
          <Route exact path='/doctor/add-patient-data' Component={AddPatientData} />
          <Route exact path='/doctor/view-patient-form' Component={ViewPatientForm} />
          <Route exact path='/patient/profile' Component={Profile} />
          <Route exact path='/patient/home' Component={Dashboard} />
          <Route exact path='/patient/edit-profile' Component={EditProfile} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
