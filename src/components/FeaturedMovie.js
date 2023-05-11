import React from "react";
import "./FeaturedMovie.scss";

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { month: "long", year: "numeric" };
  const monthYear = date.toLocaleDateString("fr-FR", options);
  return monthYear;
}

function FeaturedMovie({ films }) {
  let genres = [];
  for (let genre of films.genres) {
    genres.push(genre.name);
  }
  console.log(films);

  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${films.backdrop_path})`,
      }}
    >
      <div className="w-full h-full bg-gradient-to-t from-slate-700 to-transparent">
        <div className="w-full h-full flex flex-col justify-end pl-8 pb-24 pt-16 bg-gradient-to-r from-slate-700 to-transparent">
          <div className="text-4xl sm:text-6xl text-white font-bold">
            {films.title}
          </div>
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
                {films.vote_average.toFixed(2)}
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
                {formatDate(films.release_date)}.
              </span>
            </div>
          </div>
          <div
            className="text-md sm:text-xl mt-4 text-gray-200 overflow-hidden block line-clamp-3 block-orientation-vertical"
            style={{ maxWidth: "70%" }}
          >
            {films.overview}
          </div>
          <div className="mt-4 text-md sm:text-xl text-gray-200">
            <span className="font-bold">Genres&nbsp;:</span> {genres.join(", ")}
            .
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovie;
