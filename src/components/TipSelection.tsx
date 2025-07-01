import React from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import TipButton from "./TipButton";

interface Props {
  selectedTip: number | null;
  onSelectTip: (tip: number | null) => void;
  customTip: string;
  setCustomTip: (val: string) => void;
}

const predefined = [5, 10, 15, 25, 50];

const TipSelection: React.FC<Props> = ({
  selectedTip,
  onSelectTip,
  customTip,
  setCustomTip,
}) => (
  <Box sx={{ my: 2 }}>
    <Typography
      variant="subtitle1"
      sx={{ mb: 1, color: "#7f9c9f", fontWeight: 700 }}
    >
      Select Tip %
    </Typography>

    <Grid container spacing={2}>
      {predefined.map((num) => (
      <Grid size={{ xs: 6, sm: 6, md:4}}>

          <TipButton
            key={num}
            label={`${num}%`}
            selected={selectedTip === num}
            onClick={() => onSelectTip(num)}
          />
        </Grid>
      ))}

      <Grid size={{ xs: 6, sm: 6, md:4 }}>

        <Box
          sx={{
            height: "100%",
            overflow: "hidden",
          }}
        >
        <TextField
            placeholder="Custom"
            value={customTip}
            onChange={(e) => {
                setCustomTip(e.target.value);
                onSelectTip(null);
              }}
            inputMode="decimal"
            fullWidth
            variant="outlined"
            sx={{
              "& input": {
                textAlign: "center",
                fontWeight: 700,
                fontSize: "1.2rem",
                padding: "0.2rem",
              },
              "& fieldset": { border: "none" },
              bgcolor: "#f4fafa",
              height: "100%",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default TipSelection;
