import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface TipButtonProps {
  label: string;
  onClick: () => void;
  selected: boolean;
}

const TipButton: React.FC<TipButtonProps> = ({ label, onClick, selected }) => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      onClick={onClick}
      fullWidth
      sx={{
        backgroundColor: selected
          ? theme.palette.primary.main
          : theme.palette.background.paper,
        color: selected
          ? theme.palette.background.paper
          : theme.palette.background.default,
      }}
    >
      {label}
    </Button>
  );
};

export default TipButton;
