import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "../../hooks/useDarkMode";
import DarkModeIcon from "../icons/darkmode/darkMode";
import LightModeIcon from "../icons/lightMode/lightMode";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  // Determinamos si estamos en la página de inicio
  const isHomePage = location.pathname === "/";

  // Ajustamos las clases según la ruta
  const titleClass = isHomePage
    ? "text-[3rem] custom-sm:text-[4rem]"
    : "text-[1.6rem] custom-sm:text-[2rem]";
  const subtitleClass = isHomePage ? "text-base" : "text-sm";

  return (
    <header
      className={`pt-8 px-0 pb-16 flex flex-col items-start justify-between gap-12 custom-sm:flex-row custom-sm:gap-4 transition-all duration-500 ease-in-out`}
    >
      <div>
        <Link to={`/`}>
          <h1
            className={`font-bold leading-[110%] text-primary-light text-start dark:text-[#EEEEEE] transition-all duration-500 ${titleClass}`}
          >
            Learning & Growing with React
          </h1>
        </Link>
        <p
          className={`italic text-start dark:text-[#A9ABB3] leading-[32px] ${subtitleClass} transition-all duration-500`}
        >
          Building with heart and purpose, one line at a time
        </p>
      </div>
      <button
        onClick={toggleDarkMode}
        className="cursor-pointer"
        id="dark-mode-toggle"
      >
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </header>
  );
};

export default Header;
