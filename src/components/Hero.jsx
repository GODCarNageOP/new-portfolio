import { motion } from "framer-motion";
import blackhole from "../assets/blackhole.webm";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <video
        autoPlay
        loop
        muted
        className="absolute top-[-340px] rotate-180 h-full w-full -z-10 object-cover"
      >
        <source src={blackhole} type="video/webm" />
      </video>
      <div
        className={`absolute inset-0 top-[180px] z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, I'm <span className="bg-gradient-to-l from-blue-500 via-violet-500 to-fuchsia-600 text-transparent bg-clip-text font-black">Yash</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-blue-200`}>
            I develop user interfaces&nbsp;
            <br className="sm:block hidden" />
            and web applications
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
