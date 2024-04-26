import { Avatar, Box, Button, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TopNavbar = () => {
    let navigate = useNavigate()
    const [menuAnchor, setMenuAnchor] = useState(null)
    const open = Boolean(menuAnchor)

    const handleAvatarClick = (e) => {
        setMenuAnchor(e.currentTarget)
    }

    const handleMenuClose = () => {
        setMenuAnchor(null)
    }

    const handleClickHome = () => {
        {/* If account is patient then go to patient home
            Else, go to doctor home */}
        navigate('/patient/home')
    }

    const handleClickProfile = () => {
        navigate('/patient/profile')
    }

    const handleLogout = () => {
        console.log('Logout')
    }

    return (
        <>
            <Box
                width={1}
                display={'flex'}
                flexDirection={'row'}
                sx={{
                    borderBottom: '0.5px solid black'
                }}>

                {/* Kartikeya please make this pretty i give upppp */}
                <Button
                    type='text'
                    sx={{
                        color: 'black',
                        fontSize: '12px'
                    }}
                    onClick={handleClickHome}>
                    Universal Health Card
                </Button>

                <Tooltip
                    title='Account Settings'
                    sx={{ ml: 'auto', mr: '2px' }}>
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
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout
                            fontSize='small' />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    )
}

export default TopNavbar