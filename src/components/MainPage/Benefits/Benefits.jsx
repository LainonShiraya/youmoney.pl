import { benefits } from "../../../index.js";
import SwiperFreemode from "./SwiperFreeMode.jsx";


const Benefits = () => {
  return (
    <section>
       <div className="mb-[54px]">
          <div className="py-[72px] wrapper ">
           <div className="text-center">
              <h1 className="text-[30px] sm:text-[40px] md:text-[54px] bold text-grey">Główne korzyści youmoney.pl</h1>
           </div>
           <div className="hidden md:block">
            <div className="flex my-[36px] regular">
         {benefits.map((benefits) => (
            <div key={benefits.id} className="w-1/4 my-[36px] mx-[18px] py-[45px] px-[30px] border-2 border-white rounded-xl bottomShadow">
                <img className="h-[186.5px]" src={benefits.image} alt="Grafika" />
                <p className="text-[16px] md:text-[16px] text-lightGrey mt-[36px] text-center">{benefits.title}</p>
            </div>
          ))}
           </div>
           </div>
           <div className="block md:hidden">
            <SwiperFreemode />
           </div>
        </div>
      </div> 
    </section>
  )
}

export default Benefits