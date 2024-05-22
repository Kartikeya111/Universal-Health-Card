import { AppBar, Avatar, Box, Button, CardHeader, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import MenuIcon from '@mui/icons-material/Menu';
import UserContext from '../UserContext'
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import AddCardIcon from '@mui/icons-material/AddCard';

const DoctorNavbar = () => {
    let navigate = useNavigate()
    const { logout } = useContext(UserContext)
    const [open, setOpen] = useState(false)

    const handleClickDrawer = () => {
        setOpen(!open)
    }

    const handleClickHome = (e) => {
        e.preventDefault()
        console.log("Home")
        navigate('/doctor/home')
    }

    const handleClickAdd = (e) => {
        e.preventDefault()
        navigate('/patient/register')
    }

    const handleClickView = (e) => {
        e.preventDefault()
        navigate('/doctor/view-patient-form')
    }

    const handleClickProfile = (e) => {
        e.preventDefault()
        navigate('/doctor/profile')
    }

    const handleLogout = () => {
        console.log('Logout')
        logout()
        navigate('/')
    }

    return (
        <>
            <AppBar>
                <Box
                    width={1}
                    height={'max-content'}
                    display='flex'
                    flexDirection='row'
                    flexWrap={'wrap'}>

                    <Button
                        type='text'
                        sx={{
                            color: 'black',
                            fontSize: '12px',
                            m: 1
                        }}
                        onClick={handleClickHome}>
                        Universal Health Card
                    </Button>

                    <IconButton
                        aria-label='open menu'
                        edge='start'
                        onClick={handleClickDrawer}
                        sx={{ alignSelf: 'center', ml: 'auto' }}>
                        <MenuIcon />
                    </IconButton>
                </Box>
            </AppBar>

            <nav>
                <Drawer
                    anchor='right'
                    variant='temporary'
                    open={open}
                    onClose={handleClickDrawer}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '20%', mt: 5 },
                        zIndex: (theme) => theme.zIndex.appBar - 1
                    }}>

                    <Box
                        height={0.95}
                        onClick={handleClickDrawer}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}>

                        <Box>
                            <CardHeader
                                avatar={<Avatar />}
                                title='Doctor Name'
                                subheader='Reg ID'
                                action={
                                    <IconButton
                                        aria-label='profile'
                                        sx={{ alignSelf: 'center' }}
                                        onClick={handleClickProfile}>
                                        <SettingsIcon />
                                    </IconButton>

                                }
                                sx={{
                                    mt: 1,
                                    '& .MuiCardHeader-action': { alignSelf: 'center' },
                                    '& .MuiCardHeader-title': { textAlign: 'left', fontSize: 'medium' },
                                    '& .MuiCardHeader-subheader': { textAlign: 'left', fontSize: 'medium' },
                                    '& .MuiCardHeader-avatar': { mr: 2 }
                                }}
                            />

                            <Divider sx={{ borderWidth: '1.2px' }} />

                            <List>
                                <ListItem key='home' disablePadding>
                                    <ListItemButton
                                        onClick={handleClickHome}>
                                        <DashboardIcon sx={{ mr: 2 }} />
                                        <ListItemText primary='Home' />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem key='add-patient' disablePadding>
                                    <ListItemButton
                                        onClick={handleClickAdd}>
                                        <AddCardIcon sx={{ mr: 2 }} />
                                        <ListItemText primary='Add Patient' />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem key='view-patient' disablePadding>
                                    <ListItemButton
                                        onClick={handleClickView}>
                                        <MedicalInformationIcon sx={{ mr: 2 }} />
                                        <ListItemText primary='View Patient' />
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        </Box>

                        <Box>
                            <Divider sx={{ borderWidth: '1.2px' }} />
                            <List>
                                <ListItem key='logout' disablePadding>
                                    <ListItemButton
                                        onClick={handleLogout}>
                                        <LogoutIcon sx={{ mr: 2 }} />
                                        <ListItemText primary='Logout' />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                </Drawer>
            </nav>
        </>
    )
}

export default DoctorNavbar
