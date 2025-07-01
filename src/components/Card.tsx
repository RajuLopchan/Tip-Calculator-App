import { Typography, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Card({
  tipPerPerson,
  totalPerPerson,
  onReset,
}: {
  tipPerPerson: number;
  totalPerPerson: number;
  onReset: () => void;
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderRadius: 2,
        p: 2,
        minHeight:'xs:aut0, md: 200px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Box>
          <Typography sx={{ color: theme.palette.common.white }}>
            Tip Amount
          </Typography>
          <Typography variant="caption" sx={{ color: theme.palette.grey[400] }}>
            / person
          </Typography>
        </Box>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 700,
          }}
        >
          ${tipPerPerson.toFixed(2)}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography sx={{ color: theme.palette.common.white }}>
            Total
          </Typography>
          <Typography variant="caption" sx={{ color: theme.palette.grey[400] }}>
            / person
          </Typography>
        </Box>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 700,
          }}
        >
          ${totalPerPerson.toFixed(2)}
        </Typography>
      </Box>

      <Button
        fullWidth
        variant="contained"
        onClick={onReset}
        sx={{
          py: 1.5,
          mt:{xs: 4, md: 21},
          textTransform: 'uppercase',
          fontSize: '1rem',
          fontWeight: 700,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.background.paper,
        }}
      >
        RESET
      </Button>
    </Box>
  );
}

export default Card;