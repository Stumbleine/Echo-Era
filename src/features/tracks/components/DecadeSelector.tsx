import { Box, Slider, Typography } from "@mui/material";
import { FC, useState } from "react";

const decades = [
  { value: 0, label: "Todos" },
  { value: 1950, label: "1950s" },
  { value: 1960, label: "1960s" },
  { value: 1970, label: "1970s" },
  { value: 1980, label: "1980s" },
  { value: 1990, label: "1990s" },
  { value: 2000, label: "2000s" },
  { value: 2010, label: "2010s" },
  { value: 2020, label: "2020s" },
];

// Crear marks normalizados (0 a 8 para 9 décadas)
const normalizedMarks = decades.map((decade, index) => ({
  value: index,
  label: decade.label,
}));

const DecadeSelector: FC<{ onDecadeChange: (decade: number) => void }> = ({
  onDecadeChange,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    const index = Array.isArray(newValue) ? newValue[0] : newValue;
    setSelectedIndex(index);
    // Convertir el índice normalizado al valor real de la década
    onDecadeChange(decades[index].value);
  };

  return (
    <Box>
      <Typography fontWeight="bold" gutterBottom>
        Selecciona una Década
      </Typography>
      <Slider
        value={selectedIndex}
        onChange={handleChange}
        marks={normalizedMarks}
        min={0}
        max={decades.length - 1}
        step={null}
        valueLabelDisplay="auto"
        valueLabelFormat={(index) => decades[index].label}
        sx={{
          mx: 2,
          "& .MuiSlider-mark": {
            height: "10px",
            width: "2px",
            marginTop: "-3px",
          },
          "& .MuiSlider-markLabel": {
            marginTop: "8px",
          },
          // Mejorar la visibilidad de las marcas y etiquetas
          "& .MuiSlider-rail": {
            opacity: 0.5,
          },
          "& .MuiSlider-track": {
            height: 4,
          },
          "& .MuiSlider-thumb": {
            height: 20,
            width: 20,
          },
        }}
      />
    </Box>
  );
};

export default DecadeSelector;
