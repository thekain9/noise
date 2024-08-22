import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Chip from './components/Chip';
import Footer from './components/Footer';

import  * as Sentry from '@sentry/react';
import Features from './components/Features';


const App = () => {

  // return <button onClick={() => methodDoesNotExist()}>Break the world</button>;
  
  return (
    <main className="bg-black">
    <Navbar />
    <Hero />
    <Highlights />
    <Model /> 
    <Features />
    <Chip />
    <Footer />


    </main>
  )
}

// export default Sentry.withProfiler(App);

export default App;


