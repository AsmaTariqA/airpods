import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white body-font bg-red-500">
      <div className="container px-4 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
  
            <a href="#" className='text-xl font-bold uppercase'>
            Airpods/ <span className='font-extralight text-white'>Market</span>
          </a>
          </a>
          
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          {["Company", "Services", "Support", "Contact"].map((section) => (
            <div key={section} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                {section.toUpperCase()}
              </h2>
              <nav className="list-none mb-10">
                {["About Us", "Our Team", "Careers", "Blog"].map((link, index) => (
                  <li key={index}>
                    <a className="text-white hover:text-gray-200">{link}</a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      
      
    </footer>
  );
};

export default Footer;
