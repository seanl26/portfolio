import resume from "/Sean_Liu_Resume_2027.pdf"

function Footer() {
  return (
    <>
      <hr className="border-1 border-slate mx-auto" />
      <footer className="text-center text-xl">
        <nav className="flex justify-center font-bold tracking-medium">

          <div className="space-x-11">
            <a 
              href="mailto:seanl26@uw.edu" 
              className="hover:text-blue-300">
                Email
            </a>
            <a
              href="www.linkedin.com/in/sohyliu"
              className="hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/seanl26"
              className="hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={resume}
              className="hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé
            </a>
            <a
              href="https://www.instagram.com/liuserpx/"
              className="hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Photos
            </a>
          </div>
          
        </nav>
      </footer>
    </>
  )
}

export default Footer