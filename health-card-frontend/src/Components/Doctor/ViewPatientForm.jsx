import { Button } from '@mui/material'
import { Box, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import UserContext from '../UserContext'
import PleaseSignIn from '../PleaseSignIn'

// TODO: @Shreya-Jathar: Add Doctor NavBAr
// TODO: @Shreya-Jathar: Use Same Conditional Rendering on all other Pages

const ViewPatient = () => {
    const [patientNo, setPatientNo] = useState("")
    const [OTP, setOTP] = useState("")
    const isOTPButtonEnabled = patientNo.length === 10
    const {cookies} = useContext(UserContext)

    const onSubmit = (e) => {
        e.preventDefault()
        setPatientNo("")
        setOTP("")
        console.log("Submitted")
    }

    const sendOTP = (e) => {
        e.preventDefault()
        console.log("OTP Sent")
    }

    return (
        <Box
            width={1}
            height={1}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-evenly'}>

            { (cookies.userID && (cookies.userRole === 'doctor')) ?
                <form
                onSubmit={onSubmit} >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-evenly'}
                    sx={{ p: 3, border: '2px solid grey', width: '50vw', height: '30vh', m: 'auto' }}>

                    <TextField
                        required
                        variant='outlined'
                        label='Patient Contact Number'
                        value={patientNo}
                        onChange={(e) => setPatientNo(e.target.value)} />

                    <Button
                        variant='text'
                        disabled={!isOTPButtonEnabled}
                        onClick={sendOTP}
                    >
                        Send OTP
                    </Button>

                    <TextField
                        required
                        variant='outlined'
                        label='OTP'
                        value={OTP}
                        onChange={(e) => setOTP(e.target.value)} />

                    <Button
                        variant='outlined'
                        type='submit'>
                        SUBMIT
                    </Button>

                </Box>
            </form> : <PleaseSignIn />
            }
        </Box>
    )
}

export default ViewPatient
