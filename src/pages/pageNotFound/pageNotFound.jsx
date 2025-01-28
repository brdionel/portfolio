import { Link } from "react-router-dom";
import Header from "../../componentes/header";
import Footer from "../../componentes/footer";
import { Fragment } from "react";

const PageNotFound = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Page Not Found - Bruno's Portfolio</title>
                <meta name="description" content="The page you're looking for doesn't exist." />
            </Helmet>
            <main className="my-0 mx-auto max-w-[650px] py-12">
                <Header />
                <section className="mb-4">
                    <h2 className="text-4xl mb-8 leading-[140%]">404 Page not found</h2>
                    <p>Oops! this page dosen’t exists, head back to <Link to="/" className="underline">Homepage</Link></p>
                </section>
                <Footer />
            </main>

        </Fragment>
    );
};

export default PageNotFound;
