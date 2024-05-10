import React from "react";
import { PiBeerBottle } from "react-icons/pi";
require("@lottiefiles/lottie-player");
const Prices = () => {

  return (
    <div className="bg-[#33cc33]">
      <p className="text-center text-4xl font-bold text-white">
        PRICES OF COMMON RECYCLABLES
      </p>

      <div className="pt-10 flex gap-20">
        <div className="border py-4 px-4 font-bold h-[200px]">
           <PiBeerBottle size={64}/>
          <p className="text-3xl">Plastic</p>
        </div>
        <div className="border py-4 px-4 font-bold h-[200px]">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="/metal.json"
        ></lottie-player>
          <p className="text-center text-2xl text-white">Iron</p>
        </div>
        <div className="border py-4 px-4 font-bold">
          <p>Damage Appliances</p>
        </div>
        <div className="border py-4 px-4 font-bold">
          <p>Mobiles and Computers</p>
        </div>
      </div>
    </div>
  );
};

export default Prices;
