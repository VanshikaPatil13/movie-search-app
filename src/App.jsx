import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import MovieCard from "./assets/MovieCard";

const API_URL = "https://www.omdbapi.com/?apikey=38dd83e1";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    if (!title.trim()) return;

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search || []);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center">

      <div className="w-full max-w-md mt-6">
        <div className="border border-gray-700 bg-gray-800 rounded-lg shadow-md flex items-center gap-3 px-3 py-2 hover:ring hover:ring-blue-500 transition">

          <input
            className="w-full bg-transparent outline-none"
            type="text"
            value={searchText}
            placeholder="Search Movie..."
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") searchMovies(searchText);
            }}
          />

          <FaSearch
            className="cursor-pointer text-gray-300 hover:text-white"
            onClick={() => searchMovies(searchText)}
          />
        </div>
      </div>

      {/* 🎬 Movies */}
      <div className="flex justify-center gap-6 flex-wrap mt-8 px-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p className="text-gray-400">No Movies Found</p>
        )}
      </div>

    </div>
  );
};

export default App;