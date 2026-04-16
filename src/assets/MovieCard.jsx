import React from 'react';


const MovieCard = ({ movie }) => {
  return (
    <div className="w-3xs bg-gray-800 text-white p-4 rounded-lg shadow-md flex flex-col items-center gap-2 hover:-translate-y-2 transition-transfrom duration-300">
      <img 
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"} 
        alt={movie.Title}
        className="w-full h-64 object-cover rounded"
      />

      <h3 className="text-lg font-semibold text-center">
        {movie.Title}
      </h3>

      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
        {movie.Year}
      </span>

      <span className="text-gray-400 text-sm">
        {movie.Type}
      </span>
    
    </div>
  );
};

export default MovieCard;