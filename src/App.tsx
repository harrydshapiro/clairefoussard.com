import React, { useCallback, useEffect, useRef, useState } from 'react';
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
    if (scrollData.scrollY > aboutSectionRef.current!.offsetTop - (window.innerHeight / 3)) {
      setCurrentSection('about')
    } else if (scrollData.scrollY > artistsSectionRef.current!.offsetTop - (window.innerHeight / 3)) {
      setCurrentSection('artists')
    } else {
      setCurrentSection('projects')
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
        <p className="bio-text">
        Claire Foussard is a New York City based curator, writer, and one of the United States’ foremost experts on contemporary Inuit art. In her three years as the director of a small gallery with locations in Harlem and the East Village, Foussard collaborated with dozens of emerging artists to share their multimedia exhibitions and publications with NYC's next generation of art collectors. She received bachelor's degrees in art history and anthropology from Colgate University in 2018, and in 2022 she received her MA in Art Business from Sotheby's Institute of Art. She has collaborated with Kinngait Studios and the West Baffin Co-operative since her 2017 research and curatorial residency, and she continues to produce significant scholarship and exhibitions highlighting the ingenuity and resilience of Inuit artists in living and working in the Canadian Arctic since the mid-20th century.
        </p>
        <br/>
        <br/>
        <p>let's chat</p>
        me@clairefoussard.com
      </div>
    </div>
  );
}

export default App;
