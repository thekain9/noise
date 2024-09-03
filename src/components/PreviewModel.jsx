import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { previewModel } from '../utils';

const PreviewModel = () => {
    // Function to handle opening the /product route in a new tab
      useGSAP(() => {
        gsap.to('#title', { scrollTrigger: {
          trigger: '#exploreVideo',
          toggleActions: 'play pause reverse restart',
          start: '-10% bottom',
      }});
    
      }, []);

    const handleOpenModel = () => {
        window.open('/product', '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="w-full flex-center flex-col py-20">
          <p id='title' className='hero-title py-20'>Preview the Headphones</p>
          <div className='pt-10'>
            <img src={previewModel} alt='Preview Model'
            className='w-full h-full' />
          </div>
          <button className="btn mt-5" onClick={handleOpenModel}>
            View 3D Product
          </button>
        </section>
      );
}

export default PreviewModel;


