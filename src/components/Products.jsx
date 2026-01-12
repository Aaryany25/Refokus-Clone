import React, { useState } from "react";
import ProductElem from "./ProductElem";
import { motion } from "motion/react";

function Products() {
  const products = [
    {
      name: "Brand Strategy",
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6867e5af4ce59d080b9ebf42_branding-big.webp",
      desc: " Refokus builds brands with purpose and clarity combining branding strategy, visual identity, and storytelling to create real emotional connection, the highest source of engagement. Our process aligns your vision with your audience, delivering a brand that inspires, differentiates, and converts across every touchpoint.",
    },
    {
      name: "Web Design",
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb125095523f5ce87a2a_9.webp",
      desc: "At Refokus, web design is where creativity meets functionality. We craft visually striking and emotionally engaging websites that capture your brand's essence. Our designs blend beauty with seamless navigation, enhanced by micro- interactions and Lottie animations. Every detail, from concept to pixel, aligns with your vision an business goals.",
    },
    {
      name: "Web Development",
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb13c9d1cdce681e0e73_10.webp",
      desc: "Webflow development is at the heart of what we do. Using Webflow's power and flexibility, we create fully functional, customizable, responsive websites quickly, repurposing saved time to enhance user experiences. Our expertise includes API integrations and building on top of Webflow, delivering robust, scalable, and easy-to-manage sites.",
    },
    {
      name: "Creative Development",
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb122fb3c4a2a89a21ed_1.webp",
      desc: "Creative development at Refokus brings innovation to life. Our team combines artistic vision with technical expertise, using WebGL (with ThreeJS), GSAP, and AI integrations to create captivating, high-performing websites. We fuse creativity with strategy to drive engagement and measurable results.",
    },
  ];
  const [pos, Setpos] = useState(0);
  const mover = (val) => {
    Setpos(val * 23);
  };
  return (
    <div className="W-full relative ">
      {products.map((elem, index) => {
        return <ProductElem val={elem} mover={mover} count={index} />;
      })}
      <div className="absolute top-0 w-full h-full  pointer-events-none ">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.6 }}
          className="absolute left-[48%] w-[25rem] h-[23rem] bg-red-500 top-10 -translate-x-[50%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full bg-amber-300"
          >
            <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6867e5af4ce59d080b9ebf42_branding-big.webp" alt="" className="w-full h-full object-cover" />

          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full bg-amber-900"
          >
            <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb125095523f5ce87a2a_9.webp" alt="" className="w-full h-full object-cover" />

          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full bg-amber-400"
          >
            <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb13c9d1cdce681e0e73_10.webp" alt="" className="w-full h-full object-cover" />

          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6867e5af4ce59d080b9ebf42_branding-big.webp" alt="" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
