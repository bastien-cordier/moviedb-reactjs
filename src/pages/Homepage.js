import { useEffect, useState } from "react";

import ApiMovie from "../ApiMovie.js";
import FeaturedMovie from "../components/FeaturedMovie.js";
import MovieSection from "../components/MovieSection.js";

export default function Homepage() {
  const [moviesList, setMoviesList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAllMovies = async () => {
      let list = await ApiMovie.getHomeMovies();
      setMoviesList(list);

      let originals = list.filter((oneMovie) => oneMovie.slug === "top-rated");
      let chooseRandomMovie = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[chooseRandomMovie];
      let chosenInfo = await ApiMovie.getyMovieInfo(chosen.id, "movie");

      setFeaturedData(chosenInfo);
    };

    loadAllMovies();
  }, []);

  return (
    <div className="bg-slate-700" style={{ marginBottom: "-10px" }}>
      {featuredData && <FeaturedMovie films={featuredData} />}
      <section className="list">
        {moviesList.map((item, idx) => (
          <MovieSection key={idx} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}
