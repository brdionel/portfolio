import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../componentes/scrollToTop";
import Header from "../../componentes/header";
import { Link } from "react-router-dom";
import GithubIcon from "../../componentes/icons/github/github";
import PreviewIcon from "../../componentes/icons/preview/preview";

import PreviewSite from "./assets/preview_1.png"
import PreviewBoard from "./assets/preview_2.png"
import PreviewLogin from "./assets/preview_3.png"
import PreviewCloseService from "./assets/preview_4.png"
import Footer from "../../componentes/footer";

const SalesServicesDNDProjectProject = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Sales Service Project - Bruno's Portfolio</title>
            </Helmet>
            <ScrollToTop />
            <main className="my-0 mx-auto max-w-[650px] py-12">
                <Header />
                <section className="mb-4">
                    <h2 className="text-5xl mb-2 leading-[140%] font-bold text-primary-light dark:text-[#EEEEEE] ">
                        Sales Service DND
                    </h2>
                    <div className="flex flex-wrap justify-start pt-[1em] px-0 pb-0 mb-6">
                        <Link to={"https://github.com/brdionel/seller_attendance"} target="_blank">
                            <span className="min-h-[40px] py-2 px-3 mt-0 mr-2 mb-[.3rem] ml-0 text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618] flex items-center justify-center gap-x-1">
                                <GithubIcon />
                                Code
                            </span>
                        </Link>
                        <Link to={"https://salesservicesdnd.netlify.app/"} target="_blank">
                            <span className="min-h-[40px] py-2 px-3 mt-0 mr-2 mb-[.3rem] ml-0 text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618] flex items-center justify-center gap-x-1">
                                <PreviewIcon />
                                Preview
                            </span>
                        </Link>
                    </div>
                    <div>
                        <div>
                            <p>
                                An app to simulate the seller service process with a dynamic board.
                                Built with React and react-beautiful-dnd, sellers can be dragged and dropped between columns.


                            </p>
                            <img src={PreviewSite} />
                        </div>

                        <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="flex flex-col justify-start items-start p-4 order-1 md:order-none">
                                <h2 className="text-2xl font-semibold">Board</h2>
                                <p>The board is divided into three columns:
                                    "Sellers" (listing available sellers), "Turn List" (active sellers waiting for a customer), and "In Service" (sellers currently assisting customers).</p>
                            </div>
                            <div className="flex justify-center items-center p-4 order-2  md:order-none">
                                <img
                                    src={PreviewBoard}
                                    alt="Imagen"
                                    className="w-full h-auto rounded-lg shadow-md"
                                />
                            </div>

                            <div className="flex justify-center items-center p-4 order-4 md:order-none">
                                <img
                                    src={PreviewLogin}
                                    alt="Imagen"
                                    className="w-full h-auto rounded-lg shadow-md"
                                />
                            </div>
                            <div className="flex flex-col justify-start items-start p-4 order-3 md:order-none">
                                <h2 className="text-2xl font-semibold">Log In</h2>
                                <p>When a seller moves to the "Turn List," they log in by entering a password.</p>
                            </div>

                            <div className="flex flex-col justify-start items-start p-4 order-5 md:order-none">
                                <h2 className="text-2xl font-semibold">End Service</h2>
                                <p>
                                    In the "In Service" column, a modal appears at the end of the service, allowing the seller to mark the sale as successful or provide reasons if it wasn’t completed.
                                </p>
                            </div>
                            <div className="flex justify-center items-center p-4 order-6 md:order-none">
                                <img
                                    src={PreviewCloseService}
                                    alt="Imagen"
                                    className="w-full h-auto rounded-lg shadow-md"
                                />
                            </div>
                        </div>

                        <div>
                            <p>
                                *The app is not yet responsive. Please view it on desktop.
                            </p>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </Fragment>
    );
};

export default SalesServicesDNDProjectProject;
