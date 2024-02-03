import React from "react";
import { Layout } from "./Layout";
import { useParams } from "react-router-dom";

export const MovieDetail = ({ moviesData }) => {
  const { movieId } = useParams();

  const movie = moviesData.find((m) => m.id === +movieId);

  return (
    <Layout>
      <div className="movie-detail">
        <div>{movie?.title}</div>
        <img src={movie.img} alt="" className="movie-detail-image" />
        <div className="movie-detail-desc">{movie.descrShort}</div>
      </div>
    </Layout>
  );
};
