import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";


function Question2() {

    const [checked, setChecked] = useState({
        1: false,
        2: false,
        3: false,
    });

    const error = true;

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
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" required
            error={error}>
                <FormGroup>
                    <FormControlLabel
                    control={
                      <Checkbox checked={checked[1]} onChange={handleChange1} name="1" style={{color: "#194D33"}} />
                    }
                    label="I’m a novice"
                    />
                    <FormControlLabel
                    control={
                      <Checkbox checked={checked[2]} onChange={handleChange2} name="2" style={{color: "#194D33"}} />
                    }
                    label="I’m an enthusiast and an explorer"
                    />
                    <FormControlLabel
                    control={
                      <Checkbox checked={checked[3]} onChange={handleChange3} name="3" style={{color: "#194D33"}} />
                    }
                    label="I’m a plant expert"
                    />
                </FormGroup>
            </FormControl>
        </Box>

  );
}

export default Question2;



