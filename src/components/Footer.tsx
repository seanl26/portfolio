import resume from "/Sean_Liu_Resume_2027.pdf"

function Footer() {
  return (
    <>
      <footer className="mx-auto w-11/12 sm:w-3/4 md:w-7/12 lg:w-5/12 xl:w-2/6 text-center text-base sm:text-lg md:text-xl mt-4">
        <nav className="flex justify-center font-bold tracking-medium">
          <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-2">
            <a href="mailto:seanl26@uw.edu" className="hover:text-blue-300">Email</a>
            <a href="https://www.linkedin.com/in/sohyliu" className="hover:text-blue-300" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/seanl26" className="hover:text-blue-300" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={resume} className="hover:text-blue-300" target="_blank" rel="noopener noreferrer">Résumé</a>
            <a href="https://www.instagram.com/liuserpx/" className="hover:text-blue-300" target="_blank" rel="noopener noreferrer">Photos</a>
          </div>
        </nav>
      </footer>
    </>
  )
}

export default Footer