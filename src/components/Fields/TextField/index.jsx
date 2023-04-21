import React from 'react';
import TextField from '@mui/material/TextField';

export default function CustomTextField(props) {
    const config = {
        variant:"standard",
        required:true,
        fullWidth:true,
        ...props
    }

    return <TextField {...config}/>;
}