import { useState } from "react";

type ProjectDivProps = {
  id: string;                // unique per project (for aria-controls)
  title: string;
  stack: string;
  description: string;
  site: string;
  link: string;
  site2?: string;
  link2?: string;
};

function ProjectDiv({ id, title, stack, description, site, link, site2, link2 }: ProjectDivProps) {

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">

        {/* project title and tech stack on left */}
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {title}
          </span>
          <span className="italic text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {stack}
          </span>
        </div>

        {/* drop down arrow on the right */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={`${id}-desc`}
          className="p-2 -m-2"
          title={open ? "Collapse" : "Expand"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 transform transition-transform duration-200 hover:text-blue-300 ${open ? 'rotate-180' : '-rotate-0'}`}         
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
          </svg>
        </button>

      </div>

      {/* reveals drop down paragraph when the button is clicked */}
      {open && (
        <div id={`${id}-desc`} className="mt-2 space-y-2">
          <p className="text-sm sm:text-base md:text-lg text-slate-300">
            {description}
          </p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm sm:text-base"
            >
              View {site}
            </a>
          )}
          {link2 && site2 && (
            <a
              href={link2}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-400 hover:underline text-sm sm:text-base"
            >
              View {site2}
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default ProjectDiv