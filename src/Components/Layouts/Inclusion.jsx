

import Flex from '../Flex';

import { useRef } from 'react';

import { Link } from 'react-router-dom';


import Umbr from '../Icons/Umbr';
import BoxParagraph from '../BoxParagraph';
import InclusionCard from '../InclusionCard';
import Tick from '../../Components/Icons/Tick'
import Cross from '../../Components/Icons/Cross'
const Inclusion = () => {
    const iconRef = useRef(null);

  let ShowRef = useRef(0);

  let handleShow = () => {

    if (ShowRef.current.style.display == "block") {
      ShowRef.current.style.display = "none"
    }
    else{
      ShowRef.current.style.display = "block"
    }
  };

  
  return (
    <>
    <div className="mt-10">
    <Flex>
    <div className="w-[120px]">
      <Umbr />
    </div>
    <div className="w-[630px]">
      <BoxParagraph text='Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do. Elit dolore sunt cupidatat minim nisi nulla fugiat sit dolor adipisicing excepteur eiusmod. Mollit reprehenderit magna tempor ex.' className='!font-normal'/>
      <div>
      <Link ref={iconRef} onClick={() => {handleShow()}}><p className='pt-7 text-base font-Poppins text-grayColor '>Show More...</p></Link>
      <div ref={ShowRef} className='hidden mt-[-50px] z-20 bg-white relative'>
      <BoxParagraph  text='Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do. Elit dolore sunt cupidatat minim nisi nulla fugiat sit dolor adipisicing excepteur eiusmod. Mollit reprehenderit magna tempor ex.' className='!font-normal'/>
      </div>
      <InclusionCard
      icon={<Tick/>}
      text='All breakfasts, 4 packed lunches, and 6 dinners'
      />
    <InclusionCard
      icon={<Tick/>}
      text='All Fees and Taxes'
      />
    <InclusionCard
      icon={<Tick/>}
      text='All necessary documents and paperwork (TIMS cards and permit)'
      />
    <InclusionCard
      icon={<Tick/>}
      text='Highly experienced Government Registered guide'
      />
    <InclusionCard
      icon={<Tick/>}
      text='First aid box'
      />
    <InclusionCard
      icon={<Tick/>}
      text='Farewell dinner'
      />
    <InclusionCard
      icon={<Cross/>}
      text='Alcoholic Beverages'
      />
    <InclusionCard
      icon={<Cross/>}
      text='Portugal visa fee'
      />
    <InclusionCard
      icon={<Cross/>}
      text='Personal expenses (Phone calls, bar bills, battery recharge, laundry)'
      />
    <InclusionCard
      icon={<Cross/>}
      text='Tipping and donations'
      />

      </div>

    </div>

    </Flex>

   </div>
    <InclusionCard/>

    </>
  )
}

export default Inclusion