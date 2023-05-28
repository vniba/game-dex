import useGenres from "../hooks/useGenres.ts";

function GenreList() {
  const { genres, isLoading, error } = useGenres();
  return (
    <ul>
      {genres.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
