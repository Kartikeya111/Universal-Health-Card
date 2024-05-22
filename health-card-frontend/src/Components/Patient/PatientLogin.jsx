import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import UserContext from '../UserContext'
import { useNavigate } from 'react-router'

// TODO: @Shreya-Jathar: Add Common NavBar

const PatientLogin = () => {
  const [adharNumber, setAdharNumber] = useState()
  const [password, setPassword] = useState("")

  const { login } = useContext(UserContext)
  let navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    {/* API Call to Login */ }
    login(adharNumber, 'patient')
    setRegistrationID()
    setPassword("")
    navigate('/patient/home')
  }

  const handleClickRegister = (e) => {
    e.preventDefault()
    navigate('/patient/register')
  }

  return (
    <Box
      width={0.7}
      height={'max-content'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-evenly'}
      alignContent={'space-evenly'}
      sx={{ m: 'auto', border: '1px solid grey', px: '15px', py: '60px' }}>

      <form
        onSubmit={handleLogin}>

        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-evenly'}
          sx={{ mb: '20px' }}>

          <TextField
            label='Adhar Number'
            placeholder='Adhar Number'
            value={adharNumber}
            onChange={(e) => { setAdharNumber(e.target.value) }}
            required
            sx={{ width: '-webkit-fill-available', mx: '10px' }} />

          <TextField
            width='-webkit-fill-available'
            label='Password'
            placeholder='Password'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            required
            sx={{ width: '-webkit-fill-available', mx: '10px' }} />

        </Box>

        <Button
          type='submit'
          variant='outlined'
          sx={{ width: '50%', py: '10px', mx: '5px', borderRadius: '10px' }}>
          Login
        </Button>

        <Typography
          sx={{ color: 'grey', my: '2px' }}>
          Don't have an account?
          <Button
            variant='text'
            onClick={handleClickRegister}>
            Register Here
          </Button>
        </Typography>
      </form>
    </Box>
  )
}

export default PatientLogin
