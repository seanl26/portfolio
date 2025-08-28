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
      <header className="relative mx-auto w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5 flex items-center justify-center space-x-8">

        <img
          src={me}
          alt="Sean Liu Picture"
          className="
            rounded-full object-cover ring-2 h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32"
        />
        {/* Name + typewriter stack */}
        <div className="flex flex-col items-center space-y-3">
          <h1 className="font-semibold text-5xl md:text-7xl lg:text-8xl xl:text-8xl leading-none">
            Sean Liu
          </h1>
          <span className="font-mono text-lg sm:text-xl md:text-2xl">
            {/* typewriter animation will go here */}
            {(phrases[i] ?? "").slice(0, count)}
            <span aria-hidden className="ml-1 animate-pulse">▍</span>
          </span>
        </div>
      </header>

      <hr className="border-1 mx-auto w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5" />

      {/* main content for about goes here */}
      {/* <section className="flex flex-col text-3xl font-semibold relative mx-auto w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5 space-y-10"> */}
      <section className="flex flex-col font-medium relative mx-auto w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5 space-y-10 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        <p> hey, welcome to my page! 👋</p>
        <p> 
          i'm an undergraduate at the <a href="https://www.washington.edu" className="hover:text-blue-300 underline">university of washington</a> studying <a href="https://ischool.uw.edu/" className="hover:text-blue-300 underline">informatics</a>, concentrating in software development and data science. 
        </p>
        <p>i'm especially interested in AI/ML applications and data analysis, but love to learn a bit of everything! i am also passionate about sustainibility and accessibility.</p>
        <p>feel free to reach out using the links below, i would love to get to know you!</p>
        <p className="text-center">→ &nbsp; check out my <span className="font-bold hover:text-blue-300 underline"><Link to="/projects">projects</Link></span> &nbsp; ←</p>
        
      </section>

      <hr className="border-1 mx-auto w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5" />

      <Footer />

    </Layout>
  )
}

export default Home

      {/* <section className="w-full max-w-xl mx-auto space-y-8">
        

        <div className="flex items-center justify-center space-x-8">
          <img
            src={me}
            alt="Sean Liu Picture"
            className="h-35 w-35 rounded-full object-cover ring-2"
          />
          <div className="flex flex-col justify-start space-y-3">
            <h1 className="text-8xl font-semibold">Sean Liu</h1>
            <p className="flex justify-center text-3xl font-mono h-8 items-center">
            <span>{(phrases[i] ?? "").slice(0, count)}</span>
            <span aria-hidden className="ml-1 animate-pulse">▍</span>
            </p>
          </div>
        </div>
        <hr className="border-1 border-slate mx-auto" />
        <div className="flex flex-col gap-5 text-start text-2xl font-medium text-slate-300 space-y-3">
          <p> hey there 👋 thanks for visiting!</p>
          <p> 
            i'm an undergraduate at the <a href="https://www.washington.edu" className="hover:text-blue-300 underline">university of washington</a> studying <a href="https://ischool.uw.edu/" className="hover:text-blue-300 underline">informatics</a>, concentrating in software development and data science! 
          </p>
          <p className="text-center">→ &nbsp; check out my <span className="font-bold hover:text-blue-300 underline"><Link to="/projects">projects</Link></span> &nbsp; ←</p>
          <p>i'm especially interested in AI/ML applications and data analysis, but love to learn a bit of everything! i am also passionate about sustainibility and accessibility.</p>
          <p>feel free to reach out through my links below, i would love to get to know you!</p>
        </div>

        <Footer />

      </section> */}