import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";


function Question3() {

    const [checked, setChecked] = useState({
        1: false,
        2: false,
        3: false,
    });

    const handleChange1 = () => {
        if (checked[1]) {
            setChecked({
                1: false,
            })
        } else {
                setChecked({
                    1: true,
                })
            }
        return
    }

    const handleChange2 = () => {
        if (checked[2]) {
            setChecked({
                2: false,
            })
        } else {
                setChecked({
                    2: true,
                })
            }
        return
    }
    const handleChange3 = () => {
        if (checked[3]) {
            setChecked({
                3: false,
            })
        } else {
                setChecked({
                    3: true,
                })
            }
        return
    }

    return (

        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" required>
                <FormGroup>
                    <FormControlLabel
                    control={
                      <Checkbox checked={checked[1]} onChange={handleChange1} name="1" style={{color: "#194D33"}} />
                    }
                    label="Medium to low light"
                    />
                    <FormControlLabel
                    control={
                      <Checkbox checked={checked[2]} onChange={handleChange2} name="2" style={{color: "#194D33"}} />
                    }
                    label="Medium to bright light"
                    />
                    <FormControlLabel
                    control={
                      <Checkbox checked={checked[3]} onChange={handleChange3} name="3" style={{color: "#194D33"}} />
                    }
                    label="No light at all"
                    />
                </FormGroup>
            </FormControl>
        </Box>

  );
}

export default Question3;



