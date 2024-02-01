import Container from '@/components/ui/Container';
import heroImg from '@/assets/heroImg.jpg';
import { Button } from '@/components/ui/button';

import { motion } from 'framer-motion';

const intro = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1.5,
    },
  },
  hidden: { opacity: 0 },
};

const introChildren = {
  visible: { opacity: 1, y: 0, transition: { duaration: 0.5 } },
  hidden: { opacity: 0, y: -200 },
};
const laptop = {
  initial: { y: 0, rotate: 0, scale: 3 },
  animate: {
    y: 30,
    scale: 1,
    rotate: -30,
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  },
};
const HeroSection = () => {
  return (
    <Container className="bg-gray-50 h-[calc(100vh-64px)] place-content-center grid lg:grid-cols-2 grid-cols-1 items-center overflow-hidden pt-20">
      <motion.div
        variants={intro}
        initial="hidden"
        animate="visible"
        className="items-center"
      >
        <motion.div variants={introChildren}>
          <motion.h1
            variants={introChildren}
            className="text-4xl lg:text-8xl font-bold text-gray-400 text-nowrap"
          >
            Don't Worry.
            <br />
            <span className="text-black">We'll Fix it.</span>
          </motion.h1>
        </motion.div>
        <motion.p
          variants={introChildren}
          className=" text-gray-700 my-4 max-w-[50ch]"
        >
          Welcome to <span className="text-black font-semibold">iRepair</span>,
          your one-stop place for all kinds off{' '}
          <span className="font-semibold text-black">mackbook iRepair</span> and
          diagnostics
        </motion.p>
        <motion.div variants={introChildren}>
          <Button>Book a Service</Button>
        </motion.div>
      </motion.div>
      <motion.div
        variants={laptop}
        animate="animate"
        initial="initial"
        className=" overflow-hidden w-[85%]  mx-auto items-center "
      >
        <img className="w-[80%] object-contain h-[85%] " src={heroImg} alt="" />
      </motion.div>
    </Container>
  );
};

export default HeroSection;
