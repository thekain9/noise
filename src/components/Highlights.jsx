import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { rightImg, watchImg } from '../utils';
import VideoCarousel from './VideoCarousel';

// Highlights component renders a section of the page showcasing "The Sound Experience" 
//with animations for the title and links, along with a video carousel

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 });
    gsap.to('.link', { opacity:1, y: 0, duration: 1, stagger: 0.25 })

  }, [])

  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding
    bg-steelGrey'>
      <div className='screen-max-width'>
      {/* Flex container for the title and links */}
        <div className='mb-12 w-full items-end justify-between md:flex'>

          {/* Title element with an id for animation targeting */}
          <h1 id='title' className='section-heading'>The Sound Experience</h1>

          <div className='flex flex-wrap items-end gap-5'>
            <p>Feel the Rhythm, Hear the Difference</p>
          </div>
        </div>
        <VideoCarousel />

      </div>
    </section>
  )
}

export default Highlights
