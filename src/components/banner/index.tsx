import Image from "next/image";
import BannerImage from "@/assets/images/banner-image.png";

const HeroSection = () => {
  return (
    <section className="bg-[#f8f4f8] py-10 px-4">
      <div className="max-w-7xl mx-auto rounded-xl overflow-hidden bg-[#efe6dd] md:flex">
        {/* Текстовая часть */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center relative">
          {/* Фоновый паттерн (можно заменить на SVG или просто убрать) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            adsfasdf
          </div>

          <h1 className="text-4xl md:text-5xl font-meduim leading-tight mb-4 text-[#000000]">
            ДОВЕРЬ
            <br />
            СВОЮ <span className="text-pink-600 italic">красоту</span>
            <br />
            НАМ
          </h1>

          <p className="text-gray-800 mb-6 text-[20px] font-normal md:text-base w-[310px]">
            <strong>Studio Le Di</strong> — Уникальное пространство, где
            сочетаются сервис, уют и искусство создания стильных образов
          </p>

          <button className="w-full lg:w-[331px] bg-[#F00073] hover:bg-pink-500 text-white rounded-full px-6 py-2 text-sm font-semibold transition cursor-pointer">
            Записаться
          </button>
        </div>

        {/* Фото */}
        <div className="w-full md:w-1/2 relative h-64 md:h-auto">
          <Image
            src={BannerImage}
            alt="Beauty Procedure"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
