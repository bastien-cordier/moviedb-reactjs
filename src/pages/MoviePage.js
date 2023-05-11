import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../ApiMovie.js";

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { month: "long", year: "numeric" };
  const monthYear = date.toLocaleDateString("fr-FR", options);
  return monthYear;
}

export default function MoviePage() {
  const [movie, setMovie] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=fr-FR`
        );
        setMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <>
      {movie ? (
        <section
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          }}
          className="h-screen bg-cover flex justify-center"
        >
          <div className="h-5/6 md:h-3/5 bg-slate-800 flex flex-col md:flex-row w-11/12 md:w-3/4 overflow-hidden px-10 rounded-xl mx-auto my-auto">
            <div className="md:w-1/3 flex items-center justify-center p-1 mt-3 md:mt-0">
              <img
                className="object-cover rounded-lg w-56 md:w-80"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
              />
            </div>
            <div className="md:w-2/3 ml-0 md:ml-10 flex flex-col justify-center">
              <h3 className="mb-2 text-3xl md:text-5xl mt-5 md:mt-0 font-bold text-white">
                {movie.title}
              </h3>
              <div className="text-md sm:text-lg font-bold mt-4 text-white">
                <div className="flex mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgb(74 222 128 / var(--tw-text-opacity))"
                    class="w-6 h-6 mr-1"
                  >
                    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                  </svg>
                  <span className="text-green-400">
                    {movie.vote_average.toFixed(2)}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 ml-6 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="capitalize">
                    {formatDate(movie.release_date)}.
                  </span>
                </div>
              </div>
              <p className="mt-4 md:mt-5 font-normal text-white line-clamp-6 block-orientation-vertical">
                {movie.overview}
              </p>
              <div className="mt-4 text-md sm:text-xl text-gray-200">
                <span className="font-bold">Genres&nbsp;:</span>{" "}
                {movie.genres.map((genre) => genre.name).join(", ")}.
              </div>
              <div className="mt-4 text-md sm:text-xl text-gray-200 flex">
                <span className="font-bold mr-3">Production&nbsp;:</span>{" "}
                {movie.production_companies.map((prod) => (
                  <div key={prod.id} className="flex items-center">
                    {prod.logo_path && (
                      <img
                        className="w-24 mr-2"
                        src={`https://image.tmdb.org/t/p/original${prod.logo_path}`}
                        alt={`${prod.name} logo`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
