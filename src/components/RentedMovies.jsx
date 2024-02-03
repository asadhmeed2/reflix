import React from "react";
import { MovieCard } from "./MovieCard";

export const RentedMovies = ({ movies, onUnRentingMovie }) => {
  return (
    <div>
      <div className="">Rented Movies :</div>

      <div className="ranted-movies-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onUnRentingMovie={onUnRentingMovie}
          />
        ))}
      </div>
    </div>
  );
};
