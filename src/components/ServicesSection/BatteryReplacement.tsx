import { motion } from 'framer-motion';
import useScrollGrow from '../Hooks/ScrollGrow';

const BatteryReplacement = () => {
  const { style, componentRef } = useScrollGrow();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-primary h-[400px] rounded-md col-span-12"
    ></motion.div>
  );
};

export default BatteryReplacement;
