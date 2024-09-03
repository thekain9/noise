import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animateWithGsap } from '../utils/animations'

const Chip = () => {
    const videoRef = useRef();
    // GSAP animations for the component
    useGSAP(()=> {
      // Animation for the chip image: fades in and scales up as it enters the viewport
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
            })

        // General fade-in animation for elements with class 'g_fadeIn'
        animateWithGsap('.g_fadeIn', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.inOut'
        })
        },[]);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
      {/* Image showcasing the advanced sound technology */}
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        {/* Title and subtitle about sound technology */}
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
          Advanced Noise-Cancelling.
            <br /> Immersive Sound Experience.
          </h2>

          <p className="hiw-subtitle">
          Experience the future of audio with cutting-edge noise-cancelling technology.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
            {/* Video demonstrating the sound technology */}
            <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                  <source src={frameVideo} type="video/mp4" />
                </video>
            </div>

            
            {/* <div className="hiw-video">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                  <source src={frameVideo} type="video/mp4" />
                </video>
            </div> */}
          </div>
          <p className="text-gray font-semibold text-center mt-3">Hear the Difference</p>
          </div>

          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                    Nebulox headphones feature {' '}
                    <span className="text-white">
                    state-of-the-art noise-cancelling technology
                    </span>, 
                    designed to deliver a truly immersive listening experience by blocking 
                    out external noise.
                  </p>

                  <p className="hiw-text g_fadeIn">
                    Enjoy {' '}
                    <span className="text-white">
                    crystal-clear sound quality
                    </span>,
                    with deep bass and precise highs that make every track come alive, 
                    whether you're at home or on the go.
                  </p>
                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="hiw-text">New</p>
                <p className="hiw-bigtext">Active Noise-Cancelling</p>
                <p className="hiw-text">with 360° sound immersion</p>
              </div>
              </div>
            </div>
    </section>
  )
}

export default Chip
