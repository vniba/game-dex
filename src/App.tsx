import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import { useState } from "react";
import { Genres } from "./hooks/useGenres.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";

function App() {
  const [selectedGenre, setSelectedGenres] = useState<Genres | null>(null);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={2}>
            <GenreList
              onSelectGenre={(genre) => setSelectedGenres(genre)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector />
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
