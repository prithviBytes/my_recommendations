import React, { useState } from "react";
import "./styles.css";
import { sciFi, superhero, mystery } from "./genre";
import "./index.css";
export default function App() {
  const [genre, setGenre] = useState(sciFi);

  return (
    <div className="App">
      <div className="header">
        <h1>Must Watch</h1>
      </div>
      <div className="container buttons">
        <div className="row">
          <div className="col-1-of-3">
            <button className="btn" onClick={() => setGenre(sciFi)}>
              Fiction
            </button>
          </div>
          <div className="col-1-of-3">
            {" "}
            <button className="btn" onClick={() => setGenre(superhero)}>
              Superhero
            </button>
          </div>
          <div className="col-1-of-3">
            <button className="btn" onClick={() => setGenre(mystery)}>
              Mystery
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {genre.map(function (movie) {
            return (
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card-image">
                      <img src={movie.poster} alt="Placeholder" />
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div>
                        <h1>{movie.title}</h1>
                        <h3>{movie.director}</h3>
                      </div>
                    </div>

                    <div className="content">
                      {movie.plot}
                      <br />
                      <p>
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
      <div className="about">
        <h2>About</h2>
        <p>
          Some of the movies that I have Watched and Would recommend others to
          watchh.
        </p>
      </div>
    </div>
  );
}
