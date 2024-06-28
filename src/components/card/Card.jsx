import React from "react";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";

const Card = ({ type }) => {
  return (
    <div className="card p-5 shadow-md text-sm text-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 hover:bg-firstColor duration-500 rounded-xl cursor-pointer">
      <Image
        src={
          type === "food"
            ? "https://i.pinimg.com/564x/39/94/2c/39942c01aa2a227b2169f5f14c418be9.jpg"
            : "https://i.pinimg.com/564x/1b/ba/d4/1bbad477d435f6b66a910add35a6adc5.jpg"
        }
        alt="birinci yemek"
        width={150}
        height={150}
        className="rounded-xl mx-auto my-4"
      />
      <p className="font-bold text-lg">
        {type === "food" ? "Lahmacun" : "Cilek Suyu"}
      </p>
      <p>
        {type === "food"
          ? "İnce hamurun üzerine lezzetli et harcıyla hazırlanan Türk mutfağının favori atıştırmalığı."
          : "Serinletici Çilek Suyu 🍓 İçecek keyfini çileğin taze lezzetiyle taçlandırın!"}
      </p>
      <button className="flex items-center mx-auto px-6 py-2 my-5 gap-2 text-white hover:text-secondColor bg-secondColor hover:bg-white duration-500 rounded-full">
        Add <FaCartShopping />
      </button>
    </div>
  );
};

export default Card;
