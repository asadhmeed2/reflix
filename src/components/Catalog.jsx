import React, { useState } from "react";
import { Layout } from "./Layout";
import { Search } from "./Search";
import { Budget } from "./Budget";
import { RentedMovies } from "./RentedMovies";
import { Movies } from "./Movies";

const RANTING_COST = 3;

export const Catalog = ({ moviesData }) => {
  const [budget, setBudget] = useState(100);
  const [movies] = useState(moviesData);
  const [viewMovies, setViewMovies] = useState(moviesData);
  const [rentedMovies, setRentedMovies] = useState([]);

  const onSearch = (e) => {
    if (!e.target.value) {
      return;
    }

    setViewMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const onRentingMovie = (id) => {
    const movieIdx = viewMovies.findIndex((movie) => movie.id === id);

    let cloneMovies = [...viewMovies];

    const movieUpdated = { ...viewMovies[movieIdx], isRented: true };

    cloneMovies.splice(movieIdx, 1, movieUpdated);

    setViewMovies(cloneMovies);

    setRentedMovies((prev) => [...prev, movieUpdated]);

    setBudget((prev) => prev - RANTING_COST);
  };

  const onUnRentingMovie = (id) => {
    const ratedMovieIdx = rentedMovies.findIndex((movie) => movie.id === id);

    const movieIdx = viewMovies.findIndex((movie) => movie.id === id);

    let cloneViewMovies = [...viewMovies];

    let cloneRantedMovies = [...rentedMovies];

    cloneRantedMovies.splice(ratedMovieIdx, 1);

    cloneViewMovies.splice(movieIdx, 1, {
      ...viewMovies[movieIdx],
      isRented: false,
    });

    setRentedMovies(cloneRantedMovies);

    setViewMovies(cloneViewMovies);

    setBudget((prev) => prev + RANTING_COST);
  };

  return (
    <Layout>
      <div className="first-section">
        <Search onSearch={onSearch} />
        <Budget budget={budget} />
      </div>

      {!!rentedMovies.length && (
        <RentedMovies
          movies={rentedMovies}
          onUnRentingMovie={onUnRentingMovie}
        />
      )}

      <Movies
        movies={viewMovies}
        onRentingMovie={onRentingMovie}
        onUnRentingMovie={onUnRentingMovie}
      />
    </Layout>
  );
};
