import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import Slide1 from "../../../public/images/slider/slide-01.jpg";
import Slide2 from "../../../public/images/slider/slide-02.jpg";
import Slide3 from "../../../public/images/slider/slide-03.jpg";
import Button from "../Button";

// const Slider = () => {
//   return (
//     <div className="h-full">
//       <Swiper
//         spaceBetween={30}
//         effect={"fade"}
//         loop={true}
//         // autoplay={{
//         //   delay: 2500,
//         //   disableOnInteraction: false,
//         // }}
//         modules={[EffectFade, Navigation, Autoplay]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div className="relative flex items-center justify-center">
//             <img src={Slide1} />
//             <div className="absolute ld:w-full w-[80%] text-gray-800">
//               <span className="text-3xl ">Women Collection 2018</span>
//               <h2 className="text-6xl pb-11 pt-5 font-playfair">NEW SEASON</h2>
//               <Button text="SHOP NOW" bgcolor="bg-indigo-400" color="text-white" />
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="relative flex items-center justify-center">
//             <img src={Slide2} />
//             <div className="absolute ld:w-full w-[80%] text-gray-800">
//               <span className="text-3xl"></span>
//               <h2 className="text-6xl pb-11 pt-5 font-playfair">
//                 
//               </h2>
//               <Button text="SHOP NOW" bgcolor="bg-indigo-400" color="text-white" />
//             </div>
//           </div>
//         </SwiperSlide>
//        
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;



const Slider = () => {
  return (
    <div className="h-full relative overflow-hidden">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper absolute inset-0"
      >
        <SwiperSlide>
          <div className="relative flex items-center justify-center h-full">
            <img src={Slide1} className="w-full h-full object-cover" />
            <div className="absolute ld:w-full w-[80%] text-gray-800">
              <span className="text-3xl">Women Collection 2018</span>
              <h2 className="text-6xl pb-11 pt-5 font-playfair">NEW SEASON</h2>
              <Button text="SHOP NOW" bgcolor="bg-indigo-400" color="text-white" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex items-center justify-center h-full">
            <img src={Slide2} className="w-full h-full object-cover" />
            <div className="absolute ld:w-full w-[80%] text-gray-800">
              <span className="text-3xl">Men New-Season</span>
              <h2 className="text-6xl pb-11 pt-5 font-playfair">Jackets & Coats</h2>
              <Button text="SHOP NOW" bgcolor="bg-indigo-400" color="text-white" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex items-center justify-center h-full">
            <img src={Slide3} className="w-full h-full object-cover" />
            <div className="absolute ld:w-full w-[80%] text-gray-800">
              <span className="text-3xl">Men Collection 2018</span>
              <h2 className="text-6xl pb-11 pt-5 font-playfair">NEW ARRIVALS</h2>
              <Button text="SHOP NOW" bgcolor="bg-indigo-400" color="text-white" />
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Slider;