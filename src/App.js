import React, { useState } from "react";
import "./styles.css";
import { sciFi, superhero, mystery } from "./genre";

export default function App() {
  const [genre, setGenre] = useState(sciFi);

  return (
    <div className="App">
      <div className="header pt-6 pb-6 mb-6">
        <h1 className="is-size-1 is-size-2-mobile ">Must Watch</h1>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column">
            <button className="btn" onClick={() => setGenre(sciFi)}>
              Fiction
            </button>
          </div>
          <div className="column">
            {" "}
            <button className="btn" onClick={() => setGenre(superhero)}>
              Superhero
            </button>
          </div>
          <div className="column">
            <button className="btn" onClick={() => setGenre(mystery)}>
              Mystery
            </button>
          </div>
        </div>
      </div>
      <div className="container is-max-desktop mt-6">
        <div className="columns">
          {genre.map(function (movie) {
            return (
              <div className="column is-one-third">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={movie.poster} alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{movie.title}</p>
                        <p className="subtitle is-6">{movie.director}</p>
                      </div>
                    </div>

                    <div className="content">
                      {movie.plot}
                      <br />
                      <p className="has-text-left mt-3">
                        <i className="fab fa-imdb"></i>
                        &nbsp;IMDB: {movie.rating[0]} <br />
                        <i className="fas fa-camera-retro"></i>
                        &nbsp;Metacritic: {movie.rating[1]} <br />
                        <i class="fas fa-apple-alt"></i>
                        &nbsp;Rotten Tomatoes: {movie.rating[2]} <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div class="about has-text-centered  pt-6 pb-6 mt-6">
        <p className="is-size-3-desktop is-size-4-mobile">About</p>
        <p>
          Some of the movies that I have Watched and Would recommend others to
          watchh.
        </p>
      </div>
    </div>
  );
}
