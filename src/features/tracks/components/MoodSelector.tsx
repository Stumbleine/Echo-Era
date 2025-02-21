import React, { useState } from "react";
import { Stack, Chip, Typography } from "@mui/material";

interface MoodSelectorProps {
  onMoodChange: (mood: string) => void;
}

const moods = [
  { label: "Feliz", value: "happy" },
  { label: "Triste", value: "sad" },
  { label: "Relajado", value: "chill" },
  // Agrega más estados de ánimo según sea necesario
];

const MoodSelector: React.FC<MoodSelectorProps> = ({ onMoodChange }) => {
  const [selectedMood, setSelectedMood] = useState<string>("");

  const handleMoodClick = (mood: string) => {
    const newMood = mood === selectedMood ? "" : mood;
    setSelectedMood(newMood);
    onMoodChange(newMood);
  };

  return (
    <>
      <Typography variant="body1" fontWeight="bold" gutterBottom>
        Selecciona un Estado de Ánimo
      </Typography>
      <Stack direction="row" spacing={1}>
        {moods.map((mood) => (
          <Chip
            key={mood.value}
            label={mood.label}
            clickable
            color={selectedMood === mood.value ? "primary" : "default"}
            onClick={() => handleMoodClick(mood.value)}
          />
        ))}
      </Stack>
    </>
  );
};

export default MoodSelector;
