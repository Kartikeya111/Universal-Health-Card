import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, FormControlLabel, Switch, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React, { useState } from 'react'

const RecordCard = ({ record }) => {
  const [checked, setChecked] = useState(record.display)

  const handleChangedisplay = (e => {
    setChecked(e.target.checked)
    // Change record.display to e.target.checked
  })

  return (
    <Accordion
      sx={{
        my: 1,
        width: '-webkit-fill-available',
      }}>

      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}>

        <Box
          width={1}
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}>

          <Avatar sx={{ p: 1, my: 1, mx: 3 }} />

          <Box
            display={'flex'}
            flexDirection={'column'}
            sx={{ mx: 2 }}>
            <Typography sx={{ color: 'black', fontSize: '1em', my: 1 }}>{record.doctorName}</Typography>
            <Typography sx={{ color: 'black', fontSize: '0.7em' }}>{record.doctorID}</Typography>
          </Box>

        </Box>
      </AccordionSummary>

      <AccordionDetails>

        <Box
          width={'-webkit-fill-available'}
          display={'flex'}
          flexDirection={'column'}>

          <Typography
            alignSelf={'flex-start'}
            sx={{ color: 'black', ml: 5 }}>
            Title: {record.title}
          </Typography>

          <Typography
            alignSelf={'flex-start'}
            sx={{ color: 'black', mx: 5 }}>
            Details:
          </Typography>

          <FormControlLabel
            sx={{ alignSelf: 'flex-end' }}
            label={'Display this record? '}
            labelPlacement='start'
            control={
              <Switch
                checked={checked}
                onChange={handleChangedisplay} />} />
        </Box>

      </AccordionDetails>

    </Accordion>
  )
}

export default RecordCard
