import { Link } from "react-router-dom";
import Header from "../../componentes/header";
import GithubIcon from "../../componentes/icons/github/github";
import PreviewIcon from "../../componentes/icons/preview/preview";
import PreviewSite from "./assets/preview_1.png";
import PreviewFilters from "./assets/preview_2.png";
import PreviewSearch from "./assets/preview_3.png";
import PreviewUrl from "./assets/preview_4.png";
import Footer from "../../componentes/footer";

const FootballTableProject = () => {
    return (
        <main className="my-0 mx-auto max-w-[650px] py-12">
            <Header />
            <section className="mb-4">
                <h2 className="text-5xl mb-2 leading-[140%] font-bold text-primary-light dark:text-[#EEEEEE] ">
                    Footbal Table
                </h2>
                <div className="flex flex-wrap justify-start pt-[1em] px-0 pb-0 mb-6">
                    <Link
                        to={"https://github.com/brdionel/football"}
                        target="_blank"
                    >
                        <span className="min-h-[40px] py-2 px-3 mt-0 mr-2 mb-[.3rem] ml-0 text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618] flex items-center justify-center gap-x-1">
                            <GithubIcon />
                            Code
                        </span>
                    </Link>
                    <Link to={"https://brfootball.netlify.app/"} target="_blank">
                        <span className="min-h-[40px] py-2 px-3 mt-0 mr-2 mb-[.3rem] ml-0 text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618] flex items-center justify-center gap-x-1">
                            <PreviewIcon />
                            Preview
                        </span>
                    </Link>
                </div>
                <div>
                    <div>
                        <p>The goal of this project is to display a list of football teams from different countries in an interactive table. The idea is that you can filter and search for teams, with filters synchronized with the URL. This means that if you land on the project with a URL that already has filters (such as country, league, or team name), those filters are automatically applied.</p>
                        <img src={PreviewSite} />
                    </div>

                    <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div className="flex flex-col justify-start items-start p-4 order-1 md:order-none">
                            <h2 className="text-2xl font-semibold">Apply Filters</h2>
                            <p>
                                Filter teams by various criteria such as country, league, titles won, team colors, or foundation year. This allows users to quickly narrow down their search and find exactly what they're looking for.
                            </p>
                        </div>
                        <div className="flex justify-center items-center p-4 order-2  md:order-none">
                            <img
                                src={PreviewFilters}
                                alt="Imagen"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>

                        <div className="flex justify-center items-center p-4 order-4 md:order-none">
                            <img
                                src={PreviewSearch}
                                alt="Imagen"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                        <div className="flex flex-col justify-start items-start p-4 order-3 md:order-none">
                            <h2 className="text-2xl font-semibold">Search for a Team</h2>
                            <p>
                                Enter the name of a team to quickly find it. The search is synchronized with the active filters
                            </p>
                        </div>

                        <div className="flex flex-col justify-start items-start p-4 order-5 md:order-none">
                            <h2 className="text-2xl font-semibold">View Team Location</h2>
                            <p>
                                Click on the location icon to view the team's exact location on a map. Using the react-leaflet, the map will pop up in a modal and display the team's geographic position.
                            </p>
                        </div>
                        <div className="flex justify-center items-center p-4 order-6 md:order-none">
                            <img
                                src={PreviewUrl}
                                alt="Imagen"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                    <div className="mb-7">
                        <p>Plus, when you apply filters and/or perform a search in the app, they are automatically synchronized with the URL as search parameters. This means that the selected filters are reflected in the URL, and if you copy and paste that same URL into another browser or tab, the page will load with the same filters applied dynamically. This not only allows you to share a URL with pre-set filters but also ensures that anyone accessing that URL will see the same filtered results.</p>
                        
                        <p className="break-words">For example: <a className="underline" href="https://brfootball.netlify.app/?country=Argentina&league=Liga+Profesional&titles=1&colors=%23FDE100%2C%231D428A%2C%236CABDD%2C%23FFFFFF&minFoundationYear=1883" target="_blank">https://brfootball.netlify.app/?country=Argentina&league=Liga+Profesional&titles=1&colors=%23FDE100%2C%231D428A%2C%236CABDD%2C%23FFFFFF&minFoundationYear=1883</a></p>
                    </div>
                    <div>
                        <p>Finally, tests are performed using the React Testing Library, validating that all components and functionalities are working correctly. You can run the tests locally by executing the <code>npm run test</code> command.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default FootballTableProject;
