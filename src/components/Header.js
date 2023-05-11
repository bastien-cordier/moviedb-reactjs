import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SiThemoviedatabase } from "react-icons/si";
import "./Header.scss";

const Navbar = () => {
  const lastScrollTop = useRef(0);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var { pageYOffset } = window;
        if (pageYOffset > lastScrollTop.current) {
          // downward scroll
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          // upward scroll
          setIsNavbarVisible(true);
        } // else was horizontal scroll
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);

  return (
    <nav
      className={`${
        isNavbarVisible
          ? "visible inset-0 fixed flex items-center justify-center gap-5 py-0 px-5 w-full bg-slate-800 z-10"
          : "inset-0 fixed flex items-center justify-center gap-5 py-0 px-5 w-full bg-slate-800"
      }`}
    >
      <Link to="/">
        <div className="nav-items text-xl text-white font-bold">
          <SiThemoviedatabase />
          MyMovieDB App
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
