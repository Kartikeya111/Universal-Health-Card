import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import RecordCard from './RecordCard'

const Records = () => {
  const [records, setRecords] = useState([])

  useEffect(() => {
    // Call getter method to get all patient records
    setRecords([
      {
        recordID: '1',
        createdAt: '2024-02-02T17:00:00.010+02:00',
        doctorName: 'doc A',
        doctorID: '1',
        title: 'report 1',
        body: 'somePDF',
        display: true,
      },
      {
        recordID: '2',
        createdAt: '2024-02-02T17:00:00.010+02:00',
        doctorName: 'doc B',
        doctorID: '3',
        title: 'report 2',
        body: 'somePDF',
        display: true,
      },
    ])
  }, [])

  return (
    <Box
      width={1}
      height={1}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}>

      <Box
        sx={{ overflow: 'auto' }}>

        {records.map(
          (record) =>
            <RecordCard
              key={record.recordID}
              record={record} />
        )}

      </Box>
    </Box>
  )
}

export default Records
