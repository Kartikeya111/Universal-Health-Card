import { DatePicker } from '@mui/x-date-pickers'
import { Box, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

const AddPatientData = () => {
    const [apptDate, setApptDate] = useState(null)
    const [description, setDescription] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted")
        console.log(apptDate.toISOString())
        setApptDate(null)
        setDescription("")
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
                    sx={{ p: 3, border: '2px solid grey', width: '50vw', height: '20vh', m: 'auto' }}>

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
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload PDF
                        {/* Will add functionality in the next commit */}
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
