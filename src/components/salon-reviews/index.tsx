"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const BeautySalonReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Eleanor Pena",
      rating: 5,
      text: "Очень приятная девушка, подсказала, что лучше подойдет и качественно выполнила работу приду еще",
      avatar: "EP",
    },
    {
      id: 2,
      name: "Сузанна",
      rating: 5,
      text: "Супер, мастер своего дела, не пожалела что пришла, спасибо за работу, приду снова",
      avatar: "С",
    },
    {
      id: 3,
      name: "Сузанна",
      rating: 5,
      text: "Супер, мастер своего дела, не пожалела что пришла, спасибо за работу, приду снова",
      avatar: "С",
    },
    {
      id: 4,
      name: "Сузанна",
      rating: 5,
      text: "Супер, мастер своего дела, не пожалела что пришла, спасибо за работу, приду снова",
      avatar: "С",
    },
    {
      id: 5,
      name: "Анна Иванова",
      rating: 5,
      text: "Прекрасная работа мастера! Ресницы получились идеальными, держатся долго. Обязательно вернусь!",
      avatar: "А",
    },
    {
      id: 6,
      name: "Мария Петрова",
      rating: 5,
      text: "Отличный сервис и качество! Мастер очень внимательная и профессиональная. Рекомендую всем подругам!",
      avatar: "М",
    },
  ];

  const itemsPerPage = 4;
  const totalSlides = Math.ceil(reviews.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getCurrentReviews = () => {
    const start = currentSlide * itemsPerPage;
    return reviews.slice(start, start + itemsPerPage);
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-b from-amber-200 to-amber-300 rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Отзывы</h1>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-6 h-6 text-pink-500" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRight className="w-6 h-6 text-pink-500" />
            </button>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[300px]">
              {getCurrentReviews().map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-3">
                      {review.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {review.name}
                      </h3>
                      <StarRating rating={review.rating} />
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? "bg-pink-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Mobile swipe indicator */}
          <div className="mt-6 text-center text-gray-600 text-sm md:hidden">
            Смахните влево или вправо для просмотра отзывов
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautySalonReviews;
