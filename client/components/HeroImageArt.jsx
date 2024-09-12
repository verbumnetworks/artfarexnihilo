import Image from "next/image";

const HeroImageArt = () => {
  return (
    <div className="relative w-full h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/imgs/herobg.jpeg')] bg-cover bg-center"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 pt-12 flex items-start justify-between h-full text-white gap-4">
        <div className="w-[300px] h-[100%] relative">
          <Image
            src="/imgs/Rectangle 7.png"
            alt="art"
            layout="fill"
          />
        </div>
        <div className="w-[415px] h-[90%] relative">
          <Image
            src="/imgs/Rectangle 5.png"
            alt="art"
            layout="fill"
          />
        </div>
        <div className="w-[415px] h-[90%] relative">
          <Image
            src="/imgs/Rectangle 3.png"
            alt="art"
            layout="fill"
          />
        </div>
        <div className="w-[300px] h-[100%] relative">
          <Image
            src="/imgs/Rectangle 8.png"
            alt="art"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImageArt;
