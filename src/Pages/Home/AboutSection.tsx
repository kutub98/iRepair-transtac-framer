import service from '@/assets/service.avif';
import Container from '@/components/ui/Container';
import {  motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const LeftBoxVariants = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 1, scale: 1, x:-300}
}
const RightBoxVariants = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 1, scale: 1, x:300}
}
const AboutSection = () => {



    const control = useAnimation();
  const [ref, inView] = useInView();
  

  useEffect(() => {
    if (inView) {
      control.start("visible")
    } else {
      control.start("hidden")
    }
  },[ control, inView])
 


 
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-40 items-center bg-gray-50 overflow-hidden">
      <motion.div
        variants={LeftBoxVariants}
        ref={ref}
        initial="initial"
        animate={control}
        className="md:block hidden w-full"
      >
        <img className="" src={service} alt="" />
      </motion.div>
      <motion.div  variants={RightBoxVariants}
        ref={ref}
        initial="initial"
        animate={control} className="px-8">
        <h1>Who are we</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quod at
          inventore debitis dolore atque eos explicabo! Quisquam, excepturi, sit
          nulla eius deleniti unde ut distinctio fuga saepe numquam dicta qui
          voluptatibus dolore. Labore officiis quaerat, voluptate consectetur
          obcaecati accusamus.
        </p>

        <div className="flex justify-around my-4">
          <div className="text-center">
            <h1 className="text-bold text-primary">98%</h1>
            <p>Successfull Repairs</p>
          </div>
          <div className="text-center">
            <h1 className="text-bold text-primary">2%</h1>
            <p>Successfull Repairs</p>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default AboutSection;
