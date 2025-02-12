import { MovieCard } from '@/components/MovieCard';
import { movies } from '@/data/movies';
import '@/css/index.css';

function App() {
  return (
    <div className="App">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
