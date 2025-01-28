import { Link } from "react-router-dom";
import Header from "../../componentes/header";
import GithubIcon from "../../componentes/icons/github/github";
import PreviewIcon from "../../componentes/icons/preview/preview";
import PreviewSite from "./assets/preview_1.png";
import PreviewNote from "./assets/preview_2.png";
import PreviewUArchivedNotes from "./assets/preview_3.png";
import PreviewAddCategories from "./assets/preview_4.png";
import Footer from "../../componentes/footer";
import { Fragment } from "react";
import ScrollToTop from "../../componentes/scrollToTop";
import { Helmet } from "react-helmet-async";

const TakingNotesProject = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Taking Notes Project | Bruno's Portfolio</title>
      </Helmet>
      <ScrollToTop />
      <main className="my-0 mx-auto max-w-[650px] py-12">
        <Header />
        <section className="mb-4">
          <h2 className="text-5xl mb-2 leading-[140%] font-bold text-primary-light dark:text-[#EEEEEE] ">
            Taking Notes
          </h2>
          <div className="flex flex-wrap justify-start pt-[1em] px-0 pb-0 mb-6">
            <Link to={"https://github.com/brdionel/takingnotes"} target="_blank">
              <span className="min-h-[40px] py-2 px-3 mt-0 mr-2 mb-[.3rem] ml-0 text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618] flex items-center justify-center gap-x-1">
                <GithubIcon />
                Code
              </span>
            </Link>
            <Link to={"https://brtakingnotes.netlify.app/"} target="_blank">
              <span className="min-h-[40px] py-2 px-3 mt-0 mr-2 mb-[.3rem] ml-0 text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618] flex items-center justify-center gap-x-1">
                <PreviewIcon />
                Preview
              </span>
            </Link>
          </div>
          <div>
            <div>
              <p>
                A simple web application that allows you to take notes, tag and
                filter them. I built the frontend with React, following the SPA
                approach, and used TanStack Query to manage global states and API
                requests. The backend was developed with Node.js and a MySQL
                database, adhering to a defined layered architecture.
              </p>
              <img src={PreviewSite} alt="preview site" />
            </div>

            <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col justify-start items-start p-4 order-1 md:order-none">
                <h2 className="text-2xl font-semibold">Notes management</h2>
                <p>As a user, you can create, edit, and delete notes.</p>
              </div>
              <div className="flex justify-center items-center p-4 order-2  md:order-none">
                <img
                  src={PreviewNote}
                  alt="Imagen"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              <div className="flex justify-center items-center p-4 order-4 md:order-none">
                <img
                  src={PreviewUArchivedNotes}
                  alt="Imagen"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="flex flex-col justify-start items-start p-4 order-3 md:order-none">
                <p>Also, you can archive/unarchive notes and list them</p>
              </div>

              <div className="flex flex-col justify-start items-start p-4 order-5 md:order-none">
                <p>
                  {`You can add/remove categories to notes. If the listed categories
                don't fit, you can create a new category. Then, you can filter notes by them.`}
                </p>
              </div>
              <div className="flex justify-center items-center p-4 order-6 md:order-none">
                <img
                  src={PreviewAddCategories}
                  alt="Imagen"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            <div>
              <p>
                The application also includes features such as user management,
                infinite scroll, and pagination.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </Fragment>
  );
};

export default TakingNotesProject;
