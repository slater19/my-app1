import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function SelectVariants(p) {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    p.check(event.target.value)
  };
  return (
    <div>
      <FormControl variant={p.variant} sx={{ minWidth: p.width, marginTop:p.marginTop}}>
        <InputLabel id="demo-simple-select-standard-label">{p.label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            p.data.map((el, i) => {
              return (
                <MenuItem key={i} value={el}>{el}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
    </div>
  );
}
