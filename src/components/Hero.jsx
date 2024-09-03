import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';

// Helper function to detect Safari browser
const isSafari = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /safari/.test(userAgent) && !/chrome/.test(userAgent);
};

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
  const [isSafariBrowser, setIsSafariBrowser] = useState(isSafari());
  const videoRef = useRef(null);

  const handleVideoSrcSet = () => {
    setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  useEffect(() => {
    if (isSafariBrowser && videoRef.current) {
      // Add event listener to start video playback on click
      const handleClick = () => {
        if (videoRef.current) {
          videoRef.current.play().catch(error => {
            console.error('Video play failed:', error);
          });
        }
      };
      videoRef.current.addEventListener('click', handleClick);
      return () => {
        videoRef.current.removeEventListener('click', handleClick);
      };
    }
  }, [isSafariBrowser]);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.5 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p id='hero' className='hero-title py-20'>Tune In & Zone Out</p>
        <div>
          <video
            ref={videoRef}
            className='pointer-events-auto'
            autoPlay
            muted
            playsInline
            key={videoSrc}
          >
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
        <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
          <a href='/product' target='_blank' rel='noopener noreferrer' 
          className='btn'>Get Yours Now</a>
          <p className='font-normal text-xl'>From £199</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

