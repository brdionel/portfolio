import { Link } from "react-router-dom";
import Header from "../../componentes/header";
import GithubIcon from "../../componentes/icons/github/github";
import PreviewIcon from "../../componentes/icons/preview/preview";
import PreviewSite from "./assets/preview_1.png";
import Footer from "../../componentes/footer";
import { Fragment } from "react";
import ScrollToTop from "../../componentes/scrollToTop";

const MediaBoardProject = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <main className="my-0 mx-auto max-w-[650px] py-12">
        <Header />
        <section className="mb-4">
          <h2 className="text-5xl mb-2 leading-[140%] font-bold text-primary-light dark:text-[#EEEEEE] ">
            Media Board
          </h2>
          <div className="flex flex-wrap justify-start pt-[1em] px-0 pb-0 mb-6">
            <Link to={"https://github.com/brdionel/media_board"} target="_blank">
              <span className="min-h-[40px] py-2 px-3 mt-0 mr-2 mb-[.3rem] ml-0 text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618] flex items-center justify-center gap-x-1">
                <GithubIcon />
                Code
              </span>
            </Link>
            <Link to={"https://brmediaboard.netlify.app/"} target="_blank">
              <span className="min-h-[40px] py-2 px-3 mt-0 mr-2 mb-[.3rem] ml-0 text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618] flex items-center justify-center gap-x-1">
                <PreviewIcon />
                Preview
              </span>
            </Link>
          </div>
          <div>
            <div>
              <p>
                An app for movies and TV series, divided into three pages: Home,
                Series, and Movies. On the Home page, two blocks link to the
                Series and Movies sections. In both sections, data is fetched from
                a JSON file, filtered by release year and program type (series or
                movie), and displayed in cards with basic information. Clicking on
                a card opens a popup with more details. The app is
                mobile-friendly, handles loading and error states, and is built
                with React, Zustand, TypeScript, and MUI.
              </p>
              <img src={PreviewSite} />
            </div>

            <div>
              <p>
                The app also include pagination, allowing the user to select the
                number of results to display (5, 10, or 20) and navigate between
                result pages, with options to go to the next or previous page.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </Fragment>
  );
};

export default MediaBoardProject;
