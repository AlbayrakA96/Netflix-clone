import React, { useState, useEffect } from "react";
import "../style.css";

import axios from "../axios";
import requests from "../Requests";
import ReactPlayer from "react-player/youtube";
import { AiFillCloseCircle, AiOutlineCheck } from "react-icons/ai";
import { VscThumbsdown, VscThumbsup, VscUnmute, VscMute } from "react-icons/vsc";
import { BsPlayFill, BsFillPauseFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { selectMovieId, setMovieIdRedux } from "../feature/userSlice";
import Test from "./Test";

const Banner = () => {
  const dispatch = useDispatch();

  const API_KEY = "d4e2448287553d83842f860fea84e802";
  const API_KEY2 = "cf5a5588d2c948d27561ab0d35fbfd29";

  const [movie, setMovie] = useState([]);
  const [active, setActive] = useState(false);
  const [details, setDetails] = useState(false);
  const [title, setTitle] = useState("");
  const [movieId, setMovieId] = useState(null);
  const [genre, setGenre] = useState("");
  const [company, setCompany] = useState("");
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(true);

  // tijdelijke API call
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchActionMovies);
      setMovie(request.data.results[1]);
    }

    fetchData();
  }, []);

  // console.log(movie);

  useEffect(() => {
    async function fetchGenre() {
      const genre = await axios.get(`/movie/399566?api_key=${API_KEY}&language=en-US
      `);
      setGenre(genre.data.genres);
      setCompany(genre.data.production_companies[0].name);
      return genre;
    }
    fetchGenre();
  }, []);

  console.log(genre);

  useEffect(() => {
    async function fetchTitle() {
      const movieTitle = await axios.get(`http://webservice.fanart.tv/v3/movies/399566?api_key=${API_KEY2}`);
      setTitle(movieTitle.data?.hdmovielogo[1]);
      return movieTitle;
    }
    fetchTitle();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie[0]?.poster__path}")`,
        }}
      >
        {active ? (
          <div className="player-wrapper">
            <ReactPlayer playing={true} className="react-player" url="https://www.youtube.com/watch?v=odM92ap8_c0" width="100%" height="100%" />
            <button onClick={() => setActive(!active)} className="player__button">
              x
            </button>
          </div>
        ) : (
          <>
            <div className="banner__contents">
              {/* <h1 className="banner__contents__title">{movie.original_title}</h1> */}
              <img src={title?.url} alt="" />

              <div className="banner__contents__buttons">
                <button onClick={() => setActive(true)} className="banner__button">
                  Afspelen
                </button>
                <button onClick={() => setDetails(true)} className="banner__button">
                  Meer informatie
                </button>
              </div>
              <h1 className="banner__contents__description">{truncate(`${movie?.overview}`, 150)}</h1>
            </div>
            <div className="banner--fadeBottom" />
          </>
        )}

        {details ? (
          <div className="pop-up">
            <ReactPlayer
              playing={play}
              muted={mute}
              className="pop-up__react-player"
              url="https://www.youtube.com/watch?v=odM92ap8_c0"
              width="100%"
              height="100%"
            />
            <div className="pop-up__trailer"></div>
            <span className="pop-up__close">
              <AiFillCloseCircle onClick={() => setDetails(false)} />
            </span>
            <div className="pop-up__content">
              <img className="pop-up__content__title" src={title?.url} alt="" />
              <div className="pop-up__content__buttons">
                <div className="button-container">
                  <button onClick={() => setPlay(!play)}>
                    {play ? <BsFillPauseFill /> : <BsPlayFill />}
                    {play ? "Pauzeren" : "Afspelen"}
                  </button>
                  <AiOutlineCheck />
                  <VscThumbsup />
                  <VscThumbsdown />
                </div>
                <div className="button-mute">{mute ? <VscMute onClick={() => setMute(!mute)} /> : <VscUnmute onClick={() => setMute(!mute)} />} </div>
              </div>

              <div className="pop-up__content__description">
                <p className="release">
                  <span className="average">Cijfer {movie.vote_average}</span>
                  {` ${movie.release_date}`}
                </p>

                <img src="https://cdn.worldvectorlogo.com/logos/kijkwijzer.svg" alt="" />
                <img src="https://cdn.worldvectorlogo.com/logos/kijkwijzer-geweld.svg" alt="" />
                <img src="https://cdn.worldvectorlogo.com/logos/kijkwijzer-angst.svg" alt="" />
              </div>
              <div className="pop-up__content__container">
                <div className="description">
                  <p>{movie?.overview}</p>
                </div>
                <div className="genres">
                  <p className="gray">Genres: &nbsp;</p>
                  {genre.map((genre) => (
                    <p key={genre.id}>{`${genre.name},`}&nbsp; </p>
                  ))}
                  <p className="company">
                    <span className="gray">Company: </span> {company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </header>
      {/* <div className=""></div> */}
      <h2 className="banner__contents__type">Originals</h2>

      {/* <div className="banner__contents__slider">
        {movie.map((image) => (
          <Test imageUrl={`${image?.backdrop_path}`} />
        ))}
      </div> */}
    </div>
  );
};

export default Banner;

// Math.floor(Math.random() * request.data.results.length - 1)
