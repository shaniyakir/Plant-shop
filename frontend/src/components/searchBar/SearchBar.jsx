import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';

export function SearchAppBar({data , fullData, onChange}) {
    
  return (
      <Autocomplete
        freeSolo
        id="search-bar"
        size='small'
        disableClearable
        options={data}
        sx={{ width: 300}}
        onChange={ onChange }
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
  );
}