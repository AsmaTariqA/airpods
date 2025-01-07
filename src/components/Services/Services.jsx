import React from 'react';
import Icon1 from '../../assets/icon1.png';
import Icon2 from '../../assets/icon2.png';
import Icon3 from '../../assets/icon3.png';
import { motion } from 'framer-motion';

const ServicesData = [
  {
    id: 1,
    icon: Icon1,
    title: "Security",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    delay: 0.2,
  },
  {
    id: 2,
    icon: Icon2,
    title: "Guarantee",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    delay: 0.4,
  },
  {
    id: 3,
    icon: Icon3,
    title: "Affordability",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    delay: 0.6,
  },
];

const Services = () => {
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center pb-10">Services</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ServicesData.map((data) => (
              <motion.div
                key={data.id}
                className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg bg-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }} // Triggers animation when 50% of the element is visible
                transition={{ duration: 0.6, delay: data.delay, ease: "easeOut" }}
              >
                <img src={data.icon} alt="icon" className="w-[100px] mb-4" />
                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-bold">{data.title}</h1>
                  <p className="text-center text-sm text-black/75">{data.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
