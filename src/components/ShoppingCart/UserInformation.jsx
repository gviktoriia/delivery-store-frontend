import { Box, Grid, TextField } from '@mui/material'
import React from 'react'

function UserInformation({onChange}) {

    const handleFieldChange = (fieldName, event) => {
        onChange(fieldName, event.target.value);
    };

  return (
    <Box paddingLeft='60px'>
        <Grid container rowSpacing={4}>
            <Grid item >
                <TextField label="Name" type="text" sx={{
                    width: { xs: 210, sm: 390, md: 420, xl: 450 },
                    "& .MuiInputBase-root": {height: 50}, 
                    justifyContent: 'center'}} 
                    onChange={(event) => handleFieldChange('name', event)}>
                </TextField>
            </Grid>
            <Grid item>
                <TextField label="Email" type="email" sx={{
                        width: { xs: 210, sm: 390, md: 420, xl: 450 },
                        "& .MuiInputBase-root": {height: 50}, 
                        justifyContent: 'center'}}
                        onChange={(event) => handleFieldChange('email', event)}>
                </TextField>
            </Grid>
            <Grid item>
                <TextField label="Phone" type="number" sx={{
                        width: { xs: 210, sm: 390, md: 420, xl: 450 },
                        "& .MuiInputBase-root": {height: 50}, 
                        justifyContent: 'center'}} 
                        onChange={(event) => handleFieldChange('phone', event)} >
                </TextField>
            </Grid>
            <Grid item>
                <TextField label="Address" type="text" sx={{
                        width: { xs: 210, sm: 390, md: 420, xl: 450 },
                        "& .MuiInputBase-root": {height: 50}, 
                        justifyContent: 'center'}} 
                        onChange={(event) => handleFieldChange('address', event)}>
                </TextField>
            </Grid>
        </Grid>
    </Box>
  )
}

export default UserInformation