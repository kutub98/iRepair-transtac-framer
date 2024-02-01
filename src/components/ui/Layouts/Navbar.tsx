// import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../button';
import Container from '../Container';
import { motion } from 'framer-motion';

const Navbar = () => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     if (scrollTop > 0) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="items-center  h-16 w-full  fixed  z-50 top-0 md:mb-36 lg:mb-10"
    >
      {/* <Container className={`items-center bg-gray-50 justify-center h-16 sticky top-0 ${isScrolled ? 'bg-opacity-90' : 'bg-gray-50'}`}> */}
      <Container className="h-16 shadow-md bg-gray-100 rounded ">
        <nav className="   flex justify-between h-full items-center ">
          <span className="text-3xl font-medium">iRepair</span>
          <ul className=" space-x-5 items-center">
            <NavLink className="text-lg font-medium" to="/">
              Home
            </NavLink>
            <NavLink className="text-lg font-medium" to="/about">
              About
            </NavLink>
            <Button>Login</Button>
          </ul>
        </nav>
      </Container>
    </motion.header>
  );
};

export default Navbar;
