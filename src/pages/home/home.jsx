import TailwindIcon from "../../componentes/icons/tailwind";
import ReactIcon from "../../componentes/icons/react";
import ZustandIcon from "../../componentes/icons/zustand";
import ReduxIcon from "../../componentes/icons/redux";
import MaterialIcon from "../../componentes/icons/materialUI";
import NodeIcon from "../../componentes/icons/node";
import MySQLIcon from "../../componentes/icons/mySQL";
import TypeScriptIcon from "../../componentes/icons/typescript";
import TanstackIcon from "../../componentes/icons/tanstack";
import { Link } from "react-router-dom";
import Header from "../../componentes/header";
import Footer from "../../componentes/footer";

const TAGS = {
  REACT: {
    name: "React",
    icon: ReactIcon,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  ZUSTAND: {
    name: "Zustand",
    icon: ZustandIcon,
  },
  REDUX: {
    name: "Redux",
    icon: ReduxIcon,
  },
  MATERIAL_UI: {
    name: "MUI",
    icon: MaterialIcon,
  },
  NODE: {
    name: "Node",
    icon: NodeIcon,
  },
  MYSQL: {
    name: "MySQL",
    icon: MySQLIcon,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    icon: TypeScriptIcon,
  },
  TANSTACK_QUERY: {
    name: "Tanstack Query",
    icon: TanstackIcon,
  },
};

const PROJECTS = [
  {
    title: "Shopping Cart",
    description: "React Project",
    link: "https://brdionel.netlify.app/",
    github: "https://github.com/brdionel/cart-react",
    image: "https://porfolio.dev/projects/svgl.webp",
    path: "shopping-cart",
    tags: [TAGS.REACT],
  },
  {
    title: "Media Board",
    description: "React Project",
    link: "https://brmediaboard.netlify.app/",
    github: "https://github.com/brdionel/media_board",
    image: "https://porfolio.dev/projects/svgl.webp",
    tags: [TAGS.REACT, TAGS.ZUSTAND, TAGS.TYPESCRIPT, TAGS.MATERIAL_UI],
  },
  {
    title: "Weather Wheel",
    description: "React Project",
    link: "https://brweatherwheel.netlify.app/",
    github: "https://github.com/brdionel/wheater-wheel",
    image: "https://porfolio.dev/projects/svgl.webp",
    tags: [TAGS.REACT, TAGS.TAILWIND],
  },
  {
    title: "Taking Notes",
    description: "Full Stack Project",
    link: "https://brtakingnotes.netlify.app/",
    github: "https://github.com/brdionel/takingnotes",
    image: "https://porfolio.dev/projects/svgl.webp",
    tags: [TAGS.REACT, TAGS.TANSTACK_QUERY, TAGS.NODE, TAGS.MYSQL],
  },
];

function Home() {
  return (
    <main className="my-0 mx-auto max-w-[650px] py-12">
      <Header />
      <section className="flex justify-start items-center">
        <section>
          <img
            src="https://res.cloudinary.com/dtnixnyfz/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736834224/20241129_132851_ajoasx.jpg"
            className="rounded-full max-w-[100%] w-[100px] h-[100px]"
          />
        </section>
        <section className="ml-4">
          <div className="leading-[1.2rem] dark:text-[#A9ABB3]">
            <b>Bruno Dionel Vicente</b>
          </div>
          <div className="leading-[1.2rem] font-light dark:text-[#A9ABB3]">
            <p>Aspiring Frontend Developer</p>
          </div>
          <div className="mt-4 flex gap-x-2">
            <a
              href="https://www.linkedin.com/in/brunodionelvicente/"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dtnixnyfz/image/upload/v1736862287/linkedin_mkl7ls.png"
                className="transition-all duration-200 ease-in-out w-[25px] h-[25px] mb-[0.3rem] hover:scale-125 dark:filter dark:invert"
              />
            </a>
            <a href="https://github.com/brdionel" target="_blank">
              <img
                className="transition-all duration-200 ease-in-out w-[25px] h-[25px] mb-[0.3rem] hover:scale-125 dark:filter dark:invert"
                src="https://res.cloudinary.com/dtnixnyfz/image/upload/v1736862224/github_l7oudx.png"
              />
            </a>
          </div>
        </section>
      </section>
      <section className="grid gap-y-8 mt-16 mx-0 mb-12">
        {/* <article className="p-8 bg-[#e8e8e8] rounded-[15px] transition-all duration-200 ease-in-out hover:scale-[1.05] dark:bg-[#25282C]">
          <div>
            <h2 className="text-primary-light font-thin italic text-[1.4rem] leading-[130%] w-full dark:text-[#A9ABB3]">
              React Cart: Product Listing, Favorites, and Shopping Cart
              Management
            </h2>
          </div>
          <div className="flex flex-wrap justify-start pt-[1em] px-0 pb-0">
            {}
            <span className="mt-0 mr-2 mb-[.3rem] ml-0 block text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] py-0 px-[0.8rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618]">
              Unreal Engine
            </span>
            <span className="mt-0 mr-2 mb-[.3rem] ml-0 block text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] py-0 px-[0.8rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618]">
              Animation
            </span>
            <span className="mt-0 mr-2 mb-[.3rem] ml-0 block text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] py-0 px-[0.8rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618]">
              Advanced Locomotion System
            </span>
          </div>
        </article>
        <article className="p-8 bg-[#e8e8e8] rounded-[15px] transition-all duration-200 ease-in-out hover:scale-[1.05] dark:bg-[#25282C] dark:text-[#A9ABB3]">
          <div>
            <h2 className="text-primary-light font-thin italic text-[1.4rem] leading-[130%] w-full dark:text-[#A9ABB3]">
              Media Explorer: Browse and Discover Series and Movies
            </h2>
            <small className="block text-[.8rem]">01/2025</small>
          </div>
          <div className="flex flex-wrap justify-start pt-[1em] px-0 pb-0">
            <span className="mt-0 mr-2 mb-[.3rem] ml-0 block text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] py-0 px-[0.8rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618]">
              Unreal Engine
            </span>
            <span className="mt-0 mr-2 mb-[.3rem] ml-0 block text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] py-0 px-[0.8rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618]">
              Animation
            </span>
            <span className="mt-0 mr-2 mb-[.3rem] ml-0 block text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] py-0 px-[0.8rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618]">
              Advanced Locomotion System
            </span>
          </div>
        </article>
        <article className="p-8 bg-[#e8e8e8] rounded-[15px] transition-all duration-200 ease-in-out hover:scale-[1.05] dark:bg-[#25282C] dark:text-[#A9ABB3]">
          <div>
            <h2 className="text-primary-light font-thin italic text-[1.4rem] leading-[130%] w-full dark:text-[#A9ABB3]">
              Advanced Locomotion Systems: Initial thoughts
            </h2>
            <small className="block text-[.8rem]"></small>
          </div>
          <div className="flex flex-wrap justify-start pt-[1em] px-0 pb-0">
            <span className="mt-0 mr-2 mb-[.3rem] ml-0 block text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] py-0 px-[0.8rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618]">
              Unreal Engine
            </span>
            <span className="mt-0 mr-2 mb-[.3rem] ml-0 block text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] py-0 px-[0.8rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618]">
              Animation
            </span>
            <span className="mt-0 mr-2 mb-[.3rem] ml-0 block text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] py-0 px-[0.8rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618]">
              Advanced Locomotion System
            </span>
          </div>
        </article>
        <article className="p-8 bg-[#e8e8e8] rounded-[15px] transition-all duration-200 ease-in-out hover:scale-[1.05] dark:bg-[#25282C] dark:text-[#A9ABB3]">
          <div>
            <h2 className="text-primary-light font-thin italic text-[1.4rem] leading-[130%] w-full dark:text-[#A9ABB3]">
              Advanced Locomotion Systems: Initial thoughts
            </h2>
            <small className="block text-[.8rem]"></small>
          </div>
          <div className="flex flex-wrap justify-start pt-[1em] px-0 pb-0">
            <span className="mt-0 mr-2 mb-[.3rem] ml-0 block text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] py-0 px-[0.8rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618]">
              Unreal Engine
            </span>
            <span className="mt-0 mr-2 mb-[.3rem] ml-0 block text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] py-0 px-[0.8rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618]">
              Animation
            </span>
            <span className="mt-0 mr-2 mb-[.3rem] ml-0 block text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] py-0 px-[0.8rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618]">
              Advanced Locomotion System
            </span>
          </div>
        </article> */}
        {PROJECTS.map((project) => (
          <Link to={`/project/${project.path}`} key={project.title}>
            <article className="p-8 bg-[#e8e8e8] rounded-[15px] transition-all duration-200 ease-in-out hover:scale-[1.05] dark:bg-[#25282C] dark:text-[#A9ABB3]">
              <div>
                <h2 className="text-primary-light font-thin italic text-[1.4rem] leading-[130%] w-full dark:text-[#A9ABB3]">
                  {project.title}
                </h2>
                <small className="block text-[.8rem]">
                  {project.description}
                </small>
              </div>
              <div className="flex flex-wrap justify-start pt-[1em] px-0 pb-0">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`mt-0 mr-2 mb-[.3rem] ml-0 block text-[#EEEEEE] bg-primary-light rounded-[15px] text-[.7rem] py-0 px-[0.8rem] leading-[1.3rem] cursor-pointer dark:bg-[#A9ABB3] dark:text-[#151618] flex items-center gap-x-2`}
                  >
                    <tag.icon className={"size-4"} />
                    {tag.name}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </section>
      <Footer />
    </main>
  );
}

export default Home;
