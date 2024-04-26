import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const DoctorRegister = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [registrationID, setRegistrationID] = useState()
  const [contactNo, setContactNo] = useState()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleRegister = (e) => {
    e.preventDefault()
    {/* Registration API call */ }
    setFirstName("")
    setLastName("")
    setRegistrationID(null)
    setContactNo(null)
    setPassword("")
    setConfirmPassword("")
    setSpeciality("")
  }

  return (
    <Box
      width={0.7}
      height={0.8}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-evenly'}
      alignContent={'space-evenly'}
      sx={{ m: 'auto', border: '1px solid grey', px: '15px' }}>

      <form
        onSubmit={handleRegister}>

        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-evenly'}
          sx={{ mb: '20px' }}>

          <TextField
            label='First Name'
            placeholder='First Name'
            value={firstName}
            onChange={(e) => { setFirstName(e.target.value) }}
            required
            sx={{ width: '-webkit-fill-available', mx: '10px' }} />

          <TextField
            width='-webkit-fill-available'
            label='Last Name'
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => { setLastName(e.target.value) }}
            required
            sx={{ width: '-webkit-fill-available', mx: '10px' }} />

        </Box>

        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-evenly'}
          sx={{ my: '20px' }}>

          <TextField
            label='Registration Number'
            placeholder='Registration Number'
            value={registrationID}
            onChange={(e) => { setRegistrationID(e.target.value) }}
            required
            sx={{ width: '-webkit-fill-available', mx: '10px' }} />

          <TextField
            label='Contact Number'
            placeholder='Contact Number'
            value={contactNo}
            onChange={(e) => { setContactNo(e.target.value) }}
            required
            sx={{ width: '-webkit-fill-available', mx: '10px' }} />

        </Box>

        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-evenly'}
          sx={{ my: '20px' }}>

          <TextField
            label='Password'
            placeholder='Password'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            required
            sx={{ width: '-webkit-fill-available', mx: '10px' }} />

          <TextField
            label='Confirm Password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => { setConfirmPassword(e.target.value) }}
            required
            sx={{ width: '-webkit-fill-available', mx: '10px' }} />

        </Box>

        <Button
          type='submit'
          variant='outlined'
          sx={{ width: '60%', py: '10px', mx: '5px', borderRadius: '10px' }}>
          Register
        </Button>

        <Typography
          sx={{ color: 'grey', my: '2px' }}>
          Already have an account?
          <Button
            variant='text'> Login Here</Button>
        </Typography>
      </form>
    </Box>
  )
}

export default DoctorRegister
