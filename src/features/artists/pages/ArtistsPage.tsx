import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import SearchBar from "../../../shared/SearchBar";
import InfiniteArtists from "../components/InfiniteArtists";
import { MARKETS } from "../../../constants/Market";

const ArtistsPage = () => {
  const [market, setMarket] = React.useState("");
  const [query, setQuery] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setMarket(event.target.value as string);
  };

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  return (
    <Container maxWidth="xl" sx={{ pt: 2 }}>
      <Stack direction={"column"} spacing={2}>
        <Box>
          <Stack sx={{ mb: 3 }} width={1} direction="row" spacing={2}>
            <Typography
              fontWeight="bold"
              variant="h4"
              sx={{ flexGrow: 1, display: "flex" }}
            >
              Discover artists
            </Typography>
            <Stack direction="row" spacing={2}>
              <FormControl fullWidth sx={{ minWidth: 200 }}>
                <InputLabel id="market-select">Market</InputLabel>
                <Select
                  id="market-select"
                  value={market}
                  label="Market"
                  onChange={handleChange}
                >
                  <MenuItem value={"All"}>All</MenuItem>
                  {MARKETS.map((market, index) => (
                    <MenuItem key={index} value={market}>
                      {market}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <SearchBar onSearch={handleSearch} />
            </Stack>
          </Stack>
          <InfiniteArtists query={query} market={market} />
        </Box>
      </Stack>
    </Container>
  );
};

export default ArtistsPage;
