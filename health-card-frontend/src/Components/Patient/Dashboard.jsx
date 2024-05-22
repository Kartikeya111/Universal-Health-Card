import { Avatar, Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import Records from './Records'
import { useNavigate } from 'react-router'

// TODO: @Shreya-Jathar: Add Patient NavBar

const Dashboard = () => {
  let navigate = useNavigate() 

  const onClickProfile = () => {
    navigate('/patient/profile')
  }

  return (
    <Box
      width={1}
      height={1}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-evenly'}>

      <Box
        width={0.8}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-evenly'}
        sx={{ mt: 3, mx: 'auto', border: '1px solid grey', borderRadius: '15px' }}>

        <Avatar
          alt='profile picture'
          sx={{
            my: 2,
            mx: 'auto',
            height: '5em',
            width: '5em'
          }} />


        <Button
          variant='text'
          onClick={onClickProfile}
          sx={{ mt: 2, mb: 5, mx: 'auto', fontSize: '1.3em' }}>
          Shreya Jathar
        </Button>
      </Box>

      <Divider orientation='horizontal' sx={{ mt: 7, mb: 1, borderColor: 'black', width: '10em', mx: 'auto' }} />
      <Typography sx={{ mb: 2, color: 'black', fontSize: '1.5em' }}>Records</Typography>

      <Records />

    </Box>
  )
}

export default Dashboard
