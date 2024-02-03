import React from "react";
import { MovieCard } from "./MovieCard";

export const Movies = ({ movies, onRentingMovie, onUnRentingMovie }) => {
  return (
    <>
      <div className="">Catalog :</div>

      <div className="catalog">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onRentingMovie={onRentingMovie}
            onUnRentingMovie={onUnRentingMovie}
          />
        ))}
      </div>
    </>
  );
};