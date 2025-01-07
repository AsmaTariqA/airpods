import React from 'react';
import airpods4 from '../../assets/airpods4.png';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section>
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
        {/* Banner Image */}
        <motion.div
          className="flex justify-center"
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          initial={{ opacity: 0, x: -100, rotate: -180 }}
          viewport={{ amount: 0.5 }} // Animation triggers when 50% of the element is in view
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          <img
            src={airpods4}
            alt="Airpods"
            className="w-[250px] md:w-[400px]"
          />
        </motion.div>

        {/* Banner Text */}
        <motion.div
          className="flex flex-col justify-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <h1 className="text-3xl lg:text-4xl font-semibold font-poppins">
              The latest Airpods with the latest technology
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores Lorem ipsum dolor sit amet consectetur adipisicing
              elit..
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="border border-red-700 text-red-700 px-6 py-2 rounded-md hover:bg-red-600 hover:text-white"
            >
              Shop Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;

