import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";



function Question1() {

    const [checked1, setChecked1] = useState({
        1: false,
        2: false,
        3: false,
    });
    
    const error = !checked1[1] && !checked1[2] && !checked1[3];

    const handleChange11 = () => {
        setChecked1({
            1: !checked1[1]
        })
        return
    }

    const handleChange12 = () => {
        setChecked1({
            2: !checked1[2]
        })
        return
    }
    const handleChange13 = () => {
        setChecked1({
            3: !checked1[3]
        })
        return
    }

    return (

        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" required error={ error } >
                <FormGroup>
                    <FormControlLabel
                    control={
                      <Checkbox checked={checked1[1]} onChange={handleChange11} name="1" style={{color: "#194D33"}} />
                    }
                    label="Get out and explore"
                    />
                    <FormControlLabel
                    control={
                      <Checkbox checked={checked1[2]} onChange={handleChange12} name="2" style={{color: "#194D33"}} />
                    }
                    label="Tap into my creative side"
                    />
                    <FormControlLabel
                    control={
                      <Checkbox checked={checked1[3]} onChange={handleChange13} name="3" style={{color: "#194D33"}} />
                    }
                    label="Be more mindful"
                    />
                </FormGroup>
                <FormHelperText>Please pick an answer</FormHelperText>
            </FormControl>
        </Box>

  );
}

export default Question1;

