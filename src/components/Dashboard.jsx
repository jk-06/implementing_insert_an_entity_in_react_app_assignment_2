// src/components/Dashboard.jsx

import  { useState } from 'react';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Optional: Import CSS for styling

const Dashboard = () => {
  const navigate = useNavigate();
  

  // Sample movie data. In a real application, this might come from an API or global state.
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      director: 'Christopher Nolan',
      genre: 'Science Fiction',
      releaseYear: 2010,
      synopsis: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
      posterUrl: 'https://image.tmdb.org/t/p/original/xymM5aW6MDcH5AR9I3CamSegJd6.jpgg',
    },
    {
      id: 2,
      title: 'The Matrix',
      director: 'The Wachowskis',
      genre: 'Action',
      releaseYear: 1999,
      synopsis: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
      posterUrl: 'https://image.tmdb.org/t/p/original/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg',
    },
    // Add more movie objects as needed
    {
      id: 3,
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      genre: 'Crime',
      releaseYear: 1994,
      synopsis: 'The lives of two mob hitmen, a boxer, a gangster’s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      posterUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYrE_7SJ6rbdM0fzwozp2hg9LryZkjLxTAQ&s',
    },
    {
      id: 4,
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      genre: 'Drama',
      releaseYear: 1994,
      synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterUrl: 'https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    },
    {
      id: 5,
      title: 'Fight Club',
      director: 'David Fincher',
      genre: 'Drama',
      releaseYear: 1999,
      synopsis: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much more.',
      posterUrl: 'https://image.tmdb.org/t/p/original/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
    },
    
  ]);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Movie Collection</h1>
        <button onClick={() => navigate('/AddMovie')}>Add Movie</button>
      </header>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
