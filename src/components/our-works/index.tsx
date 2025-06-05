"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import InstagramIcon from "@/assets/icons/instagram-icon.svg";

const images = [
  "/works/1.jpg",
  "/works/2.jpg",
  "/works/3.jpg",
  "/works/3.jpg",
  "/works/3.jpg",
  "/works/3.jpg",
  "/works/3.jpg",
];

const OurWorksSlider = () => {
  return (
    <section className="bg-[#fdf9fc] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2
              className="text-3xl font-semibold text-gray-900 mb-1"
              style={{ fontFamily: "'PT Serif Caption', serif" }}
            >
              Наши работы
            </h2>
            <p className="text-[20px] text-[#121212] flex items-center gap-1">
              Больше работ смотрите в нашем Instagram
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={InstagramIcon}
                  alt="Instagram"
                  className="w-6 h-6 text-pink-600"
                />
              </a>
            </p>
          </div>
        </div>

        {/* Слайдер */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image
                  src={src}
                  alt={`work ${index + 1}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurWorksSlider;
