import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import TipButton from './TipButton';

interface Props {
  selectedTip: number | null;
  onSelectTip: (tip: number | null) => void;
  customTip: number | null;
  onCustomTipChange: (value: string) => void;
}

const predefined = [5, 10, 15, 25, 50];

const TipSelector: React.FC<Props> = ({
  selectedTip,
  onSelectTip,
  customTip,
  onCustomTipChange,
}) => (
  <Box my={2}>
    <Typography mb={1} color="text.secondary" fontWeight={700}>
      Select Tip %
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'space-between',
      }}
    >
      {predefined.map((number) => (
        <Box key={number}>
          <TipButton
            label={`${number}%`}
            selected={selectedTip === number}
            onClick={() => onSelectTip(number)}
          />
        </Box>
      ))}

      <Box>
        <TextField
          label="Custom"
          variant="outlined"
          type="number"
          value={customTip === null ? '' : customTip}
          onChange={(e) => onCustomTipChange(e.target.value)}
          size="small"
          sx={{
            width: { xs: '125px', md: '95px' },
            '& .MuiOutlinedInput-root': {
              height: '48px',
              fontSize: '1.2rem',
              fontWeight: 700,
            },
          }}
        />
      </Box>
    </Box>
  </Box>
);

export default TipSelector;
