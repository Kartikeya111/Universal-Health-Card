import * as React from 'react'
import { Box, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import knowMoreBGImage from '../assets/images/knowMoreBG.jpg'
import doctorImage from '../assets/images/doctor.png'
import patientImage from '../assets/images/patient.jpg'
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

const LandingPage = () => {
  let navigation = useNavigate()

  const handlePatientClick = () => {
    navigation('/patient/home')
  }

  const handleDoctorClick = () => {
    navigation('/doctor/home')
  }

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      height={1}
      width={1}>

      <Box
        width={1}
        height={0.4}
        alignContent={'center'}
        sx={{
          backgroundImage: `url(${knowMoreBGImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />

      <Box
        height={0.6}
        width={1}
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-evenly'}
        alignContent={'center'}
        flexWrap={'wrap'}>

        <ImageButton
          onClick={handleDoctorClick}
          style={{ backgroundImage: `url(${doctorImage})`, fontWeight: 'bold' }}>
          <span
            style={{
            }}>Doctor</span>
        </ImageButton>

        <ImageButton
          onClick={handlePatientClick}
          style={{ backgroundImage: `url(${patientImage})`, fontWeight: 'bold' }}>
          <span
            style={{
            }}>Patient</span>
        </ImageButton>
      </Box>

    </Box>
  )
}

export default LandingPage
