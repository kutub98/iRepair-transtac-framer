
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScroll, motion, useSpring } from 'framer-motion';
import Container from '../Container';


const MainLayout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const scrollInitial = {
    initial: { opacity: 0 },
    animate:  {opacity: 1, duration: 1, }
  }
  return (
    <div>
      <Navbar/>
      <Container>
      <motion.div variants={scrollInitial} inlist='initial' animate='animate' className="w-full max-w-[1200px] h-2  bg-primary fixed top-16 z-[999] mx-auto p-0" style={{ scaleX }} />
      </Container>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;