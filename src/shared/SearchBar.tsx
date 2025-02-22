import { FC, useState } from "react";
import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar: FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search artists..."
        value={query}
        onChange={handleQueryChange}
        onKeyDown={handleKeyDown}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
