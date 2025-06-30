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
      sx={{
        width: { xs: '125px', md: '95px' },
        fontSize: '1.2rem',
        fontWeight: 700,
        backgroundColor: selected
          ? theme.palette.primary.main
          : theme.palette.background.paper,
        color: selected
          ? theme.palette.background.paper
          : theme.palette.background.default,
      }}
      size="large"
    >
      {label}
    </Button>
  );
};

export default TipButton;
