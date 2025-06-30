import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import Card from './components/Card';
import BillInput from './components/BillInput';
import PeopleCountInput from './components/PeopleCountInput';
import TipSelection from './components/TipSelection';
import theme from './components/Theme';

const App = () => {
  const [billAmount, setBillAmount] = useState<number>(0);
  const [selectedTip, setSelectedTip] = useState<number | null>(null);
  const [customTip, setCustomTip] = useState<number | null>(null);
  const [peopleCount, setPeopleCount] = useState<number>(0);

  const handleTipSelect = (tip: number | null) => {
    setSelectedTip(tip);
    setCustomTip(null);
  };

  const handleCustomTipChange = (value: string) => {
    const num = Number(value);
    setCustomTip(isNaN(num) ? null : num);
    setSelectedTip(null);
  };

  const handleBillChange = (value: string) => {
    const num = Number(value);
    setBillAmount(isNaN(num) ? 0 : num);
  };

  const handlePeopleChange = (value: string) => {
    const num = Number(value);
    setPeopleCount(isNaN(num) || num < 0 ? 0 : num);
  };

  const tipPercentage = customTip !== null ? customTip : selectedTip || 0;
  const tipAmount = billAmount * (tipPercentage / 100);

  const totalPerPerson =
    peopleCount > 0 ? (billAmount + tipAmount) / peopleCount : 0;
  const tipPerPerson = peopleCount > 0 ? tipAmount / peopleCount : 0;

  const resetAll = () => {
    setBillAmount(0);
    setSelectedTip(null);
    setCustomTip(null);
    setPeopleCount(0);
  };

  return (
    <>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        letterSpacing={5}
        marginY={4}
      >
        SPLI
        <br />
        TTER
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: { xs: '100%', md: '1700px' },
        }}
      >
        <Box
          sx={{
            p: 2,
            backgroundColor: theme.palette.background.default,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 0, md: 4 },
            maxWidth: { xs: '100%', md: '700px' },
            borderRadius: { xs: 0, md: 7 },
          }}
        >
          <Box>
            <Box mb={2}>
              <BillInput value={billAmount} onChange={handleBillChange} />
            </Box>

            <TipSelection
              selectedTip={selectedTip}
              onSelectTip={handleTipSelect}
              customTip={customTip}
              onCustomTipChange={handleCustomTipChange}
            />

            <PeopleCountInput
              value={peopleCount}
              onChange={handlePeopleChange}
            />
          </Box>

          <Box
            sx={{
              minWidth: { xs: '100%', md: '350px' },
            }}
          >
            <Card
              tipPerPerson={Number.isFinite(tipPerPerson) ? tipPerPerson : 0}
              totalPerPerson={
                Number.isFinite(totalPerPerson) ? totalPerPerson : 0
              }
              onReset={resetAll}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default App;
