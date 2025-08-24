import Layout from "../components/PageLayout"
import me from "../assets/me.jpg"
import { useState, useEffect, useMemo } from 'react'

function Home() {
  // usememo prevents the dependency array from being rerendered
  const phrases = useMemo(() => [ 
    "A Student 📝",
    "Software Engineer 📀",
    "Builder 🧰",
    "Lifelong Learner 📚", 
    "A Friend 👥",
    ],
    []
  );
  const [i, setI] = useState(0); // which phrase we’re on
  const [count, setCount] = useState(0); // visible character count
  const [deleting, setDeleting] = useState(false); // are we deleting?
  const typingSpeed = 100; // ms per character while typing
  const deletingSpeed = 50; // ms per character while deleting
  const pauseMs = 800; // pause at the end of a word before deleting

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
      <section className="w-full max-w-xl mx-auto space-y-8">
        <div className="flex items-center justify-center gap-8">
          <img
            src={me}
            alt="Sean Liu Picture"
            className="h-35 w-35 rounded-full object-cover ring-2 ring-white-700"
          />
          <div className="flex flex-col justify-start space-y-3">
            <h1 className="text-8xl font-semibold">Sean Liu</h1>
            <p className="flex justify-center text-2xl text-slate font-mono h-8 items-center">
            <span>{(phrases[i] ?? "").slice(0, count)}</span>
            <span aria-hidden className="ml-1 animate-pulse">▍</span>
            </p>
          </div>
        </div>
        <hr className="border-2 border-white mx-auto" />
        <p className="text-xl"> Welcome to my portfolio 👋</p>
      </section>
    </Layout>
  )
}

export default Home