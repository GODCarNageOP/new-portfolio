import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
// import Ontop from "./components/Ontop";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#0a0a0a]'>
        <div className='bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <StarsCanvas />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
        </div>
        {/* {<Ontop/>} */}
      </div>
    </BrowserRouter>
  );
}

export default App;
