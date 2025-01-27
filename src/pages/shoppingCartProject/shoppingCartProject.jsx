import { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../componentes/header";
import GithubIcon from "../../componentes/icons/github/github";
import PreviewIcon from "../../componentes/icons/preview/preview";
import PreviewSite from "./assets/preview_1.png";
import PreviewCart from "./assets/preview_2.png";
import PreviewUser from "./assets/preview_3.png";
import PreviewFavorite from "./assets/preview_4.png";
import Footer from "../../componentes/footer";
import ScrollToTop from "../../componentes/scrollToTop";

const ShoppingCartProject = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <main className="my-0 mx-auto max-w-[650px] py-12">
        <Header />
        <section className="mb-4">
          <h2 className="text-5xl mb-2 leading-[140%] font-bold text-primary-light dark:text-[#EEEEEE] ">
            Shopping Cart
          </h2>
          <div className="flex flex-wrap justify-start pt-[1em] px-0 pb-0 mb-6">
            <Link to={"https://github.com/brdionel/cart-react"} target="_blank">
              <span className="min-h-[40px] py-2 px-3 mt-0 mr-2 mb-[.3rem] ml-0 text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618] flex items-center justify-center gap-x-1">
                <GithubIcon />
                Code
              </span>
            </Link>
            <Link to={"https://brdionel.netlify.app/"} target="_blank">
              <span className="min-h-[40px] py-2 px-3 mt-0 mr-2 mb-[.3rem] ml-0 text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618] flex items-center justify-center gap-x-1">
                <PreviewIcon />
                Preview
              </span>
            </Link>
          </div>
          <div>
            <div>
              <p>
                A shopping cart management application that lets you browse a
                product catalog, filter by category, sort items, and add them to
                your cart. From the cart, you can adjust quantities, remove items,
                and view a real-time summary of your selection.
              </p>
              <img src={PreviewSite} />
            </div>

            <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col justify-start items-start p-4 order-1 md:order-none">
                <h2 className="text-2xl font-semibold">Cart management</h2>
                <p>
                  Allows users to add, remove, and adjust item quantities in the
                  shopping cart, with real-time updates.
                </p>
              </div>
              <div className="flex justify-center items-center p-4 order-2  md:order-none">
                <img
                  src={PreviewCart}
                  alt="Imagen"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              <div className="flex justify-center items-center p-4 order-4 md:order-none">
                <img
                  src={PreviewUser}
                  alt="Imagen"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="flex flex-col justify-start items-start p-4 order-3 md:order-none">
                <h2 className="text-2xl font-semibold">User Management</h2>
                <p>
                  Allows users to create an account by entering their details or
                  through Google. This way, the shopping cart and favorite
                  products are linked to their profile, providing a personalized
                  and persistent experience.
                </p>
              </div>

              <div className="flex flex-col justify-start items-start p-4 order-5 md:order-none">
                <h2 className="text-2xl font-semibold">Favorites Management</h2>
                <p>
                  Allows users to add and store their favorite products, making it
                  easy to revisit and purchase them later.
                </p>
              </div>
              <div className="flex justify-center items-center p-4 order-6 md:order-none">
                <img
                  src={PreviewFavorite}
                  alt="Imagen"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            <div>
              <p>
                The application also includes features such as category filters,
                sorting options, internationalization, a product image carousel,
                and lazy load to optimize performance.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </Fragment>
  );
};

export default ShoppingCartProject;
