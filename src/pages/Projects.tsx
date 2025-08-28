import Layout from "../components/PageLayout"
import Footer from "../components/Footer"

// // note to self...
// {/* gap is for elements within a container. 
// space is between the children of a container. */}

function Projects() {
  return (
    <Layout>
      
      {/* header */}
      <header className="relative mx-auto w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5 flex items-center justify-center">
        <a
          href="/"
          className="absolute left-4 sm:left-6 md:left-8 flex items-center"
          aria-label="Return to Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="4"
            stroke="currentColor"
            className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-11 lg:w-11 hover:text-blue-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </a>
        <h1 className="text-center font-semibold text-4xl md:text-5xl lg:text-6xl">
          Projects
        </h1>
      </header>

      <hr className="border-1 mx-auto w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5" />
      
      {/* projects will go here */}

      <hr className="border-1 mx-auto w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5" />

      <Footer />

    </Layout>
  )
}

export default Projects