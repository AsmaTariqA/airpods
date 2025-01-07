import React from "react";
import { motion, useInView } from "framer-motion";
import airpods5 from "../../assets/airpods5.webp";
import airpods6 from "../../assets/airpods6.webp";
import airpods7 from "../../assets/airpods7.jpg";

const blogsData = [
  {
    id: 1,
    title: "The Future of Technology",
    description:
      "Explore the advancements in technology and what the future holds for innovations in various industries.",
    image: airpods5,
    link: "#",
  },
  {
    id: 2,
    title: "Sustainable Living Practices",
    description:
      "Learn about the steps you can take to lead a more sustainable and eco-friendly life.",
    image: airpods6,
    link: "#",
  },
  {
    id: 3,
    title: "Mastering Web Development",
    description:
      "Dive into the essential skills and tools needed to excel in the field of web development.",
    image: airpods7,
    link: "#",
  },
];

const Blogs = () => {
  return (
    <section className="bg-gray-100 py-20 font-poppins">
      <div className="container mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-10">Our Blogs</h1>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <ScrollTriggeredBlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ScrollTriggeredBlogCard = ({ blog }) => {
  // Ref for detecting when the component is in view
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false }); // Animation repeats every time it scrolls into view

  return (
    <motion.div
      ref={ref}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Blog Image */}
      <div className="flex justify-center items-center h-36 bg-gray-50">
        <img
          src={blog.image}
          alt={blog.title}
          className="max-h-full max-w-full object-contain py-4"
        />
      </div>

      {/* Blog Content */}
      <div className="p-4 space-y-3">
        <h2 className="text-2xl font-semibold">{blog.title}</h2>
        <p className="text-gray-600 text-sm">{blog.description}</p>
        <a
          href={blog.link}
          className="inline-block mt-3 text-red-600 hover:text-red-800 font-semibold"
        >
          Read More →
        </a>
      </div>
    </motion.div>
  );
};

export default Blogs;
