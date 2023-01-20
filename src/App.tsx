import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import './App.css';
import { Nav } from './Nav';
import { artists } from './content/artists';
import { Tile } from './Tile';
import { projects } from './content/projects';

function App() {
  const projectSectionRef = useRef<HTMLDivElement>(null)
  const artistsSectionRef = useRef<HTMLDivElement>(null)
  const aboutSectionRef = useRef<HTMLDivElement>(null)

  const [scrollData, setScrollData] = useState({
      scrollY: window.scrollY,
      direction: 'flat'
  })

  const [currentSection, setCurrentSection] = useState<'projects' | 'artists' | 'about'>()

  const scrollHandler = useCallback(() => {
      const { scrollY} = window
      setScrollData({
          scrollY: scrollY,
          direction: scrollY > scrollData.scrollY ? 'down' : scrollY < scrollData.scrollY ? 'up' : 'flat'
      })
  }, [setScrollData, scrollData])

  useEffect(() => {
      window.removeEventListener('scroll', scrollHandler)
      window.addEventListener('scroll', scrollHandler)

      return () => window.removeEventListener('scroll', scrollHandler)
  }, [setScrollData, scrollData, scrollHandler])

  useEffect(() => {
    debugger
    const sectionBoundaries = {
      projects: {
          top: projectSectionRef.current!.offsetTop,
          bottom: projectSectionRef.current!.offsetTop + projectSectionRef.current!.offsetHeight
      },
      artists: {
          top: artistsSectionRef.current!.offsetTop,
          bottom: artistsSectionRef.current!.offsetTop + artistsSectionRef.current!.offsetHeight
      },
      about: {
          top: aboutSectionRef.current!.offsetTop,
          bottom: aboutSectionRef.current!.offsetTop + aboutSectionRef.current!.offsetHeight
      }
    }

    if (scrollData.direction === 'down') {
        if (scrollData.scrollY + window.innerHeight > sectionBoundaries.about.top!) {
            setCurrentSection('about')
        } else if (scrollData.scrollY + window.innerHeight > sectionBoundaries.artists.top!) {
            setCurrentSection('artists')
        } else {
            setCurrentSection('projects')
        }
    } else if (scrollData.direction === 'up') {
        if (scrollData.scrollY < sectionBoundaries.projects.bottom!) {
            setCurrentSection('projects')
        } else if (scrollData.scrollY < sectionBoundaries.artists.bottom!) {
            setCurrentSection('artists')
        } else {
            setCurrentSection('about')
        }
    } else {
      if (scrollData.scrollY > (sectionBoundaries.artists.bottom - (window.innerHeight / 2))) {
        setCurrentSection('about')
      } else if (scrollData.scrollY > (sectionBoundaries.projects.bottom - (window.innerHeight / 2))) {
        setCurrentSection('artists')
      } else {
        setCurrentSection('projects')
      }
    }
  }, [scrollData])

  return (
    <div className="App">
      <Nav currentSection={currentSection}/>

      <div className="section-wrapper" id="section-projects" ref={projectSectionRef}>
        { projects.map((p, index) => <Tile key={index} {...p}/>)}
      </div>

      <div className="section-wrapper" id="section-artists" ref={artistsSectionRef}>
        { artists.map((a, index) => <Tile key={index} {...a}/>)}
      </div>
      
      <div className="section-wrapper" id="section-about" ref={aboutSectionRef}>
        <img src="./claire_foussard.webp" alt="claire foussard headshot" id="claire-headshot"/>
        <p>I asked Harry to make me a website. Typically my biography would go here, but Harry doesn’t know what that would be. So instead, here’s some filler text. It could be anything!</p>
        <br/>
        <p>I went to Columbus Park West Nursery School, and received my Bachelors from Harvard University. I went to Sotheby’s and vaped in the bathroom when I got sad during online classes.</p>
        <br/>
        <br/>
        <p>let's chat</p>
        <a href="mailto:me@clairefoussard.com">me@clairefoussard.com</a>
      </div>
    </div>
  );
}

export default App;
