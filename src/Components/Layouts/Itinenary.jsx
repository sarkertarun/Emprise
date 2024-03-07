
import ItinenaryCard from '../ItinenaryCard'
import Flex from '../Flex';
import Map from '../../assets/map.png'
import Image from '../Image';
import { TbNumber1,TbNumber2,TbNumber3,TbNumber4,TbNumber5,TbNumber6,TbNumber7,TbNumber8,TbNumber9} from "react-icons/tb";
import { useRef } from 'react';

import { Link } from 'react-router-dom';

import Tour2 from '../../assets/tourDetail.png'
import Shared from '../../assets/shared.png'
import Double from '../../assets/double.png'
import Single from '../../assets/single.png'

const Itinenary = () => {
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

  let tourMap = <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.888801381339!2d73.50785773394465!3d3.990797035622202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f62327f6267db%3A0xecdf6636999022dc!2sGulhi!5e0!3m2!1sen!2sbd!4v1709291544977!5m2!1sen!2sbd" width="180" height="150"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='ml-4 rounded-2xl'></iframe>

  return (
    <>
    <div className="mt-20">
    <Flex>
    <div className="w-[120px]">
        <Image src={Map} alt={Map}/>
    </div>

    <div className="w-[630px]">
        <ItinenaryCard 
          icon={<TbNumber1 />}
          day="Day 1"
          title="Lake Nakuru National Park"
          textOne="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          imgOne={Tour2}
          textTwo="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          packOne="Included in package"
          packTwo="£45 per person extra"
          packThree="£80 per person extra"
          imgTwo={Shared}
          imgThree={Double}
          imgFour={Single}
          map={tourMap}
        />
        <ItinenaryCard 
          icon={<TbNumber2 />}
          day="Day 2"
          title="Lake Nakuru National Park"
          textOne="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          imgOne={Tour2}
          textTwo="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          packOne="Included in package"
          packTwo="£45 per person extra"
          packThree="£80 per person extra"
          imgTwo={Shared}
          imgThree={Double}
          imgFour={Single}
          map={tourMap}
        />
        <ItinenaryCard 
          icon={<TbNumber3 />}
          day="Day 3"
          title="Lake Nakuru National Park"
          textOne="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          imgOne={Tour2}
          textTwo="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          packOne="Included in package"
          packTwo="£45 per person extra"
          packThree="£80 per person extra"
          imgTwo={Shared}
          imgThree={Double}
          imgFour={Single}
          map={tourMap}
        />
        <ItinenaryCard 
          icon={<TbNumber4 />}
          day="Day 4"
          title="Lake Nakuru National Park"
          textOne="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          imgOne={Tour2}
          textTwo="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          packOne="Included in package"
          packTwo="£45 per person extra"
          packThree="£80 per person extra"
          imgTwo={Shared}
          imgThree={Double}
          imgFour={Single}
          map={tourMap}
        />
        <ItinenaryCard 
          icon={<TbNumber5 />}
          day="Day 5"
          title="Lake Nakuru National Park"
          textOne="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          imgOne={Tour2}
          textTwo="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          packOne="Included in package"
          packTwo="£45 per person extra"
          packThree="£80 per person extra"
          imgTwo={Shared}
          imgThree={Double}
          imgFour={Single}
          map={tourMap}
        />
        <ItinenaryCard 
          icon={<TbNumber6 />}
          day="Day 6"
          title="Lake Nakuru National Park"
          textOne="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          imgOne={Tour2}
          textTwo="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          packOne="Included in package"
          packTwo="£45 per person extra"
          packThree="£80 per person extra"
          imgTwo={Shared}
          imgThree={Double}
          imgFour={Single}
          map={tourMap}
        />
        <ItinenaryCard 
          icon={<TbNumber7 />}
          day="Day 7"
          title="Lake Nakuru National Park"
          textOne="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          imgOne={Tour2}
          textTwo="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          packOne="Included in package"
          packTwo="£45 per person extra"
          packThree="£80 per person extra"
          imgTwo={Shared}
          imgThree={Double}
          imgFour={Single}
          map={tourMap}
        />
         {/* show more */}
         <Link ref={iconRef} onClick={() => {handleShow()}}><p className='pt-7 text-base font-Poppins text-grayColor '>Show more itinerary days</p></Link>
      <div ref={ShowRef} className='hidden mt-[-50px] z-20 bg-white relative'>
      <ItinenaryCard 
          icon={<TbNumber8 />}
          day="Day 8"
          title="Lake Nakuru National Park"
          textOne="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          imgOne={Tour2}
          textTwo="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          packOne="Included in package"
          packTwo="£45 per person extra"
          packThree="£80 per person extra"
          imgTwo={Shared}
          imgThree={Double}
          imgFour={Single}
          map={tourMap}
        />
        <ItinenaryCard 
          icon={<TbNumber9 />}
          day="Day 9"
          title="Lake Nakuru National Park"
          textOne="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          imgOne={Tour2}
          textTwo="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do."
          packOne="Included in package"
          packTwo="£45 per person extra"
          packThree="£80 per person extra"
          imgTwo={Shared}
          imgThree={Double}
          imgFour={Single}
          map={tourMap}
        />
      
      </div>
    </div>
    </Flex>

    </div>     
    </>
  )
}

export default Itinenary