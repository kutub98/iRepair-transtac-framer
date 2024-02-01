import BatteryReplacement from '@/components/ServicesSection/BatteryReplacement';
import Container from '@/components/ui/Container';
import React from 'react';

const SeviceSection = () => {
  return (
    <Container>
      <div className='text-center flex flex-col justify-between items-center'>
        <h1>Our Service That we Provide</h1>
        <p className='max-w-[80ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, iusto. Velit nisi rerum ex, fugit pariatur sequi asperiores error explicabo.</p>
      </div>
      <div className='grid col-span-12 gap-3'>
       
        <BatteryReplacement/>
        <div className='bg-primary h-[400px] rounded-md lg:col-span-5 col-span-12'></div>
        <div className='bg-primary h-[400px] rounded-md lg:col-span-7 col-span-12'></div>
        <div className='bg-primary h-[400px] rounded-md lg:col-span-12 col-span-12'></div>
        <div className='bg-primary h-[400px] rounded-md lg:col-span-4 col-span-12'></div>
        <div className='bg-primary h-[400px] rounded-md lg:col-span-4 col-span-12'></div>
        <div className='bg-primary h-[400px] rounded-md lg:col-span-4 col-span-12'></div>
        <div className='grid col-span-12 '>
        <div className='bg-primary h-[400px] rounded-md lg:col-span-4 col-span-12 justify-self-end w-[380px]'><h1>flsadkf</h1></div>
        </div>
      </div>
    </Container>
  );
};

export default SeviceSection;