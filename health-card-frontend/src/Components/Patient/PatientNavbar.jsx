import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import UserContext from '../UserContext'

const TopNavbar = () => {
    let navigate = useNavigate()
    const [menuAnchor, setMenuAnchor] = useState(null)
    const open = Boolean(menuAnchor)
    const {logout} = useContext(UserContext)

    const handleAvatarClick = (e) => {
        setMenuAnchor(e.currentTarget)
    }

    const handleMenuClose = () => {
        setMenuAnchor(null)
    }

    const handleClickHome = () => {
        console.log("Home")
        navigate('/patient/home')
    }

    const handleClickProfile = () => {
        console.log("Profile")
        navigate('/patient/profile')
    }

    const handleLogout = () => {
        console.log('Logout')
        logout()
        navigate('/')
    }

    return (
        <AppBar>
            <Box
                width={1}
                display={'flex'}
                flexDirection={'row'}
                sx={{
                    borderBottom: '0.5px solid black', py: 0.5
                }}>

                {/* Kartikeya please make this pretty i give upppp */}
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

                <Tooltip
                    title='Account Settings'
                    sx={{ ml: 'auto', mr: 1 }}>
                    <IconButton
                        size='small'
                        onClick={handleAvatarClick}
                        aria-controls={open ? 'account-menu' : undefined}>
                        <Avatar>S</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>

            <Menu
                anchorEl={menuAnchor}
                open={open}
                onClick={handleMenuClose}
                onClose={handleMenuClose}>
                <MenuItem
                    onClick={handleClickProfile}>
                    <ListItemIcon>
                        <AccountCircleIcon fontSize='small' />
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem
                    onClick={handleClickHome}>
                    <ListItemIcon>
                        <HomeIcon fontSize='small' />
                    </ListItemIcon>
                    Home
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout
                            fontSize='small' />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </AppBar>
    )
}

export default TopNavbar