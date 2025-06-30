import { Box, Typography, OutlinedInput, InputAdornment } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

type InputBoxProps = {
  label: string;
  icon?: React.ElementType;
  value: number;
  onChange: (value: string) => void;
};

const InputBox: React.FC<InputBoxProps> = ({
  label,
  icon: IconComponent,
  value,
  onChange,
}) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography sx={{ color: theme.palette.grey[400], mb: 1 }}>
        {label}
      </Typography>

      <OutlinedInput
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={{ mb: 2 }}
        startAdornment={
          IconComponent && (
            <InputAdornment position="start">
              <IconComponent
                sx={{
                  color: theme.palette.grey[400],
                  fontSize: '1rem',
                  '& input': {
                    textAlign: 'right',
                  },
                }}
              />
            </InputAdornment>
          )
        }
      />
    </Box>
  );
};

export default InputBox;
