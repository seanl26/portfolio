import Layout from "../components/PageLayout"
import Footer from "../components/Footer"
import ProjectDiv from "../components/ProjectDiv"

import ids_doc from "/intrusion_detection_documentation.pdf"
import data_dash from "/example.png"
import marathon from "/project.pdf"

// note to self...
// gap is for elements within a container. 
// space is between the children of a container.

function Projects() {

  return (
    <Layout>
      
      {/* header */}
      <header className="relative mx-auto w-11/12 sm:w-3/4 md:w-7/12 lg:w-5/12 xl:w-2/6 flex items-center justify-center">
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
            className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 hover:text-blue-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </a>
        <h1 className="text-center font-semibold text-3xl md:text-4xl lg:text-5xl">
          Projects
        </h1>
      </header>

      <hr className="border-1 mx-auto w-11/12 sm:w-3/4 md:w-7/12 lg:w-5/12 xl:w-2/6" />
      
      {/* projects will go here */}
      <section className="flex flex-col relative mx-auto w-11/12 sm:w-3/4 md:w-7/12 lg:w-5/12 xl:w-2/6 space-y-5">
        
        <div className="flex flex-col justify-start text-base sm:text-lg md:text-xl items-start pl-4 gap-4">
          <ProjectDiv 
              id="LogDetection"
              title="Log Anomaly Detection"
              stack=" - PyTorch, NumPy"
              description="Implemented an end-to-end data pipeline with a recurrent LSTM Autoencoder model to parse, transform, detect, retrieve, and output unusual activity across millions of system weekly security logs. Utilized word embeddings, one-hot encoding, and vectorization to transform raw log entries into model-ready input."
              site="Documentation (code not public)"
              link={ids_doc}
          />
          <ProjectDiv 
            id="Bincredible"
            title="Bincredible"
            stack=" - Python, RNative, Ollama, YoloV8"
            description="DubHacks'24 Hackathon Project. Developed a waste classification mobile app enabling users to take a picture of a waste item and inform them whether it belongs in recycling, compost, or trash. Worked mainly on frontend, but also gained significant exposure to computer vision and LLMs."
            site="DevPost"
            link="https://devpost.com/software/bincredible"
            site2="Github"
            link2="https://github.com/seanl26/Bincredible_Final"
          />
          <ProjectDiv
            id="DataDashboard"
            title="Data Analytics Dashboard"
            stack=" - TS, Angular.js, GraphQL"
            description="LightSys Technology Services Spring Code-A-Thon Project. Built a real-time data analytics dashboard to monitor and visualize student attendance and retention rates for an online English tutoring platform. Connected frontend to backend with GraphQL queries."
            site="Image of Dashboard (code not public)"
            link={data_dash}
          />
          <ProjectDiv
            id="MarathonAnalysis"
            title="Marathon Performance Analysis"
            stack=" - Python, NumPy, Altair"
            description="CSE 163 final Project. Created several visualizations with the Altair library displaying three centuries of marathon result times, analyzing trends by year, event, age, gende, and environmental factors like temperature."
            site="Project PDF"
            link={marathon}
          />
          <ProjectDiv
            id="IncomeAndObesity"
            title="Income & Obesity Analysis"
            stack=" - R, ShinyApps"
            description="INFO 201 Final Project. Developed a web application in R Shiny with several data visualizations hihglighting the relationship between household income and childhood obesity across all 50 US states."
            site="website"
            link="https://seanl26.shinyapps.io/Info201-Final-Project/"
          />
          <ProjectDiv
            id="RatRetreat"
            title="RatRetreat"
            stack=" - React, HTML/CSS, Firebase"
            description="INFO 340 Final Project. This project was mainly for front-end practice utilizing React, HTML, and CSS. It is a fake comical website connecting users with peet rats to local people who are willing to take care of them while the owner is away."
            site="website"
            link="https://ratretreat---info340.web.app"
          />
          <ProjectDiv
            id="SaveMeBand"
            title="Save-Me-Band"
            stack=" - Figma, UX/UI Accessibility, Stakeholder Research "
            description="INFO 200 Final Project. Created a UI/UX prototype of an app coupled to an adjustable band tracking a child's location. This product was meant to aid guardians and parents in ensuring the safety of their children through real-time tracking and location monitoring."
            site="Figma Prototype"
            link="https://www.figma.com/proto/3B27Rx3EizXH5T2uwfjWEs/LoFi-Wireframes?node-id=508-762"
          /> 
          {/* add more projects here */}
          {/* <ProjectDiv
            id=""
            title=""
            stack=""
            description=""
            site=""
            link=""
          /> */}

        </div>
      </section>

      <hr className="border-1 mx-auto mb-2 w-11/12 sm:w-3/4 md:w-7/12 lg:w-5/12 xl:w-2/6" />

      <Footer />

    </Layout>
  )
}

export default Projects