import { DatePicker } from '@mui/x-date-pickers'
import { Box, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// TODO: @Shreya-Jathar: Add NavBar

const AddPatientData = () => {
    const [apptDate, setApptDate] = useState(null)
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(null)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted")
        console.log('Date: ' + apptDate.toISOString())
        console.log('Title: ' + description)
        console.log(image)
        setApptDate(null)
        setDescription("")
        setImage(null)
    }

    return (
        <Box
            width={1}
            height={1}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-evenly'}>

            <form
                onSubmit={onSubmit}>

                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-evenly'}
                    sx={{ p: 3, border: '2px solid grey', width: '50vw', height: '40vh', m: 'auto' }}>

                    <DatePicker
                        label='Appointment Date'
                        value={apptDate}
                        onChange={(e) => setApptDate(e)}
                        slotProps={{
                            textField: {
                                required: true,
                            },
                        }}
                    />

                    <TextField
                        required
                        variant='outlined'
                        label='Title'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />

                    <Button
                        component='label'
                        variant='contained'
                        sx={{ height: '3em' }}
                        startIcon={image === null ? <CloudUploadIcon /> : <CheckCircleIcon />}
                    >
                        Upload PDF

                        <TextField
                            type='file'
                            onChange={(e) => { setImage(e.target.files[0]) }}
                            inputProps={{ accept: 'image/*, application/pdf' }}
                            sx={{ visibility: 'hidden', width: '1px', height: '1px' }} />
                    </Button>


                    <Button
                        variant='outlined'
                        type='submit'>
                        SUBMIT
                    </Button>

                </Box>
            </form>

        </Box>
    )
}

export default AddPatientData
