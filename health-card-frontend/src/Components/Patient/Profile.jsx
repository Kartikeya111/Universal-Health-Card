import { Avatar, Badge, Box, Button, Fab, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Profile = () => {
    let navigate = useNavigate()
    const [profileData, setProfileData] = useState(null)

    const onClickEdit = () => {
        navigate('/patient/edit-profile')
    }

    useEffect(() => {
        // In here, set the profile data
        // It should be an object with the properties to display
    }, [])

    return (

        <Box
            width={0.5}
            height={0.35}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            sx={{
                m: 'auto',
                px: 5,
                pt: 5,
                border: '2px solid grey'
            }}>


            <Avatar
                alt='profile picture'
                sx={{
                    my: 2,
                    mx: 'auto',
                    height: '8em',
                    width: '8em'
                }} />

            <Box
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'center'}
                sx={{ my: 2 }}>

                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    sx={{ mx: 6 }}
                >
                    <Typography sx={{ color: 'black', fontSize: '1.2em' }}>F</Typography>
                    <Typography sx={{ color: 'black', fontSize: '0.7em' }}>Gender</Typography>
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    sx={{ mx: 6 }}
                >
                    <Typography sx={{ color: 'black', fontSize: '1.2em' }}>22</Typography>
                    <Typography sx={{ color: 'black', fontSize: '0.7em' }}>Age</Typography>
                </Box>

            </Box>

            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                sx={{ my: 2 }}>
                <Typography sx={{ color: 'black', fontSize: '0.8em' }}>shreyajathar808@gmail.com</Typography>
                <Typography sx={{ color: 'black', fontSize: '0.8em' }}>8296889716</Typography>
            </Box>

            <Fab
                onClick={onClickEdit}
                sx={{ p: 4, ml: 'auto' }}>
                <EditIcon sx={{ color: 'black' }} />
            </Fab>

        </Box>
    )
}

export default Profile
