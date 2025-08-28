import Layout from "../components/PageLayout"
import Footer from "../components/Footer"
import me from "/me.jpg"
import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'

function Home() {

  // usememo prevents the dependency array from being rerendered
  const phrases = useMemo(() => [ 
    "student 📝",
    "software engineer 📀",
    "photographer 📸",
    "lifelong learner 📚", 
    "your new friend 👥",
    ],
    []
  );
  const [i, setI] = useState(0); // which phrase we’re on
  const [count, setCount] = useState(0); // visible character count
  const [deleting, setDeleting] = useState(false); // are we deleting?
  const typingSpeed = 100; // ms per character while typing
  const deletingSpeed = 50; // ms per character while deleting
  const pauseMs = 800; // pause at the end of a word before deleting

  // logic for the typewriter animation
  useEffect(() => {
    const currPhrase = phrases[i] ?? ""; // sets phrase to "" if it's undefined or null
    let timer: ReturnType<typeof setTimeout>;
    if(!deleting) {
      if(count < currPhrase.length) {
        // typing forward
        timer = setTimeout(() => setCount(count + 1), typingSpeed);
      } else {
        // full word shown — pause, then start deleting
        timer = setTimeout(() => setDeleting(true), pauseMs);
      }
    } else {
      if(count > 0) {
        // deleting backward
        timer = setTimeout(() => setCount(count - 1), deletingSpeed);
      } else {
        // finished deleting — move to next phrase and start typing
        setDeleting(false);
        setI((i + 1) % phrases.length); // infinite loop with the modulo
      }
    }
    return () => clearTimeout(timer);
  }, [phrases, i, count, deleting, typingSpeed, deletingSpeed, pauseMs]); // rerun the effect whenever these values change

  return (
    <Layout>

      {/* header */}
      <header className="relative mx-auto w-11/12 sm:w-3/4 md:w-7/12 lg:w-5/12 xl:w-2/6 flex items-center justify-center space-x-8">

        <img
          src={me}
          alt="Sean Liu Picture"
          className="
            rounded-full object-cover ring-2 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28"
        />
        {/* Name + typewriter stack */}
        <div className="flex flex-col items-center space-y-3">
          <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-none">
            Sean Liu
          </h1>
          <span className="font-mono text-base sm:text-lg md:text-xl">
            {/* typewriter animation will go here */}
            {(phrases[i] ?? "").slice(0, count)}
            <span aria-hidden className="ml-1 animate-pulse">▍</span>
          </span>
        </div>
      </header>

      <hr className="border-1 mx-auto w-11/12 sm:w-3/4 md:w-7/12 lg:w-5/12 xl:w-2/6" />

      {/* main content for about goes here */}
      <section className="flex flex-col font-medium relative mx-auto w-11/12 sm:w-3/4 md:w-7/12 lg:w-5/12 xl:w-2/6 space-y-10 text-base sm:text-lg md:text-xl px-2 sm:px-5">
        <p> hey, welcome to my page! 👋</p>
        <p> 
          i'm an undergraduate at the <a href="https://www.washington.edu" className="hover:text-blue-300 underline">university of washington</a> studying <a href="https://ischool.uw.edu/" className="hover:text-blue-300 underline">informatics</a>, concentrating in software development and data science. 
        </p>
        <p>i'm especially interested in AI/ML applications and data analysis, but love to learn a bit of everything! i am also passionate about sustainibility and accessibility.</p>
        <p>feel free to reach out using the links below, i would love to get to know you!</p>
        <p className="text-center">→ &nbsp; check out my <span className="font-bold hover:text-blue-300 underline"><Link to="/projects">projects</Link></span> &nbsp; ←</p>
        
      </section>

      <hr className="border-1 mx-auto w-11/12 sm:w-3/4 md:w-7/12 lg:w-5/12 xl:w-2/6" />

      <Footer />

    </Layout>
  )
}

export default Home