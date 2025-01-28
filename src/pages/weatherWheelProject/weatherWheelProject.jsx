import { Link } from "react-router-dom";
import Header from "../../componentes/header";
import GithubIcon from "../../componentes/icons/github/github";
import PreviewIcon from "../../componentes/icons/preview/preview";
import PreviewSite from "./assets/preview_1.png";
import Footer from "../../componentes/footer";
import { Fragment } from "react";
import ScrollToTop from "../../componentes/scrollToTop";
import { Helmet } from "react-helmet-async";

const WeatherWheelProject = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Weather Wheel Project | Bruno's Portfolio</title>
      </Helmet>
      <ScrollToTop />
      <main className="my-0 mx-auto max-w-[650px] py-12">
        <Header />
        <section className="mb-4">
          <h2 className="text-5xl mb-2 leading-[140%] font-bold text-primary-light dark:text-[#EEEEEE] ">
            Weather Wheel
          </h2>
          <div className="flex flex-wrap justify-start pt-[1em] px-0 pb-0 mb-6">
            <Link
              to={"https://github.com/brdionel/wheater-wheel"}
              target="_blank"
            >
              <span className="min-h-[40px] py-2 px-3 mt-0 mr-2 mb-[.3rem] ml-0 text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618] flex items-center justify-center gap-x-1">
                <GithubIcon />
                Code
              </span>
            </Link>
            <Link to={"https://brweatherwheel.netlify.app/"} target="_blank">
              <span className="min-h-[40px] py-2 px-3 mt-0 mr-2 mb-[.3rem] ml-0 text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618] flex items-center justify-center gap-x-1">
                <PreviewIcon />
                Preview
              </span>
            </Link>
          </div>
          <div>
            <div>
              <p>Choose your favorite options, and enjoy the view.</p>
              <img src={PreviewSite} />
            </div>

            <div>
              <p>
                It is built with React Mobile Picker for a smooth and interactive
                selection experience, and styled using TailwindCSS for a
                responsive design.
              </p>
              <p>*Interact with the mouse or touch screens.</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </Fragment>
  );
};

export default WeatherWheelProject;
