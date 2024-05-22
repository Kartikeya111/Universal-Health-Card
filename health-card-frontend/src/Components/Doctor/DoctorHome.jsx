import React from 'react'
import DoctorNavbar from './DoctorNavbar'
import { Box, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
// TODO: @Kartikeya111: Replace these images with more suitable ones
import doctorImage from 'C:/Users/shrey/MajorProject/Universal-Health-Card/health-card-frontend/src/assets/images/doctor.png'
import patientImage from 'C:/Users/shrey/MajorProject/Universal-Health-Card/health-card-frontend/src/assets/images/patient.jpg'
import { useNavigate } from 'react-router'

const ImageButton = styled(Button)(() => ({

  width: '25%',
  height: '70%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'brightness(0.8)',

  '&:hover': {
    filter: 'brightness(1)',
    '& span': {
      border: '4px solid white'
    }
  },

  '& span': {
    filter: 'brightness(1)',
    color: 'white',
    padding: '8px 16px'
  },
}))

const Home = () => {
  let navigate = useNavigate()

  const handleAddClick = (e) => {
    e.preventDefault()
    navigate('/patient/register')
  }

  const handleViewClick = (e) => {
    e.preventDefault()
    navigate('/doctor/view-patient-form')
  }

  return (
    <Box
      display={'flex'}
      width={1}
      height={1}
      flexDirection={'column'}
    >
      <DoctorNavbar />

      <Box
        height={'-webkit-fill-available'}
        width={1}
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-evenly'}
        alignContent={'center'}
        flexWrap={'wrap'}
      >

        <ImageButton
          onClick={handleAddClick}
          style={{ backgroundImage: `url(${doctorImage})`, fontWeight: 'bold', height: '30%' }}>
          <span
            style={{
            }}>Add Patient</span>
        </ImageButton>

        <ImageButton
          onClick={handleViewClick}
          style={{ backgroundImage: `url(${patientImage})`, fontWeight: 'bold', height: '30%' }}>
          <span
            style={{
            }}>View Patient</span>
        </ImageButton>
      </Box>
    </Box>
  )
}

export default Home
