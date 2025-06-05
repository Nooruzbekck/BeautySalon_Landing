"use client";

import React from "react";
import {
  MessageCircle,
  Send,
  Instagram,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const BeautySalonContacts = () => {
  const contactButtons = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "border-green-500 text-green-500 hover:bg-green-50",
      link: "https://wa.me/79015737886",
    },
    {
      name: "Telegram",
      icon: Send,
      color: "border-blue-500 text-blue-500 hover:bg-blue-50",
      link: "https://t.me/yourusername",
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "border-pink-500 text-pink-500 hover:bg-pink-50",
      link: "https://instagram.com/yourusername",
    },
    {
      name: "Avito",
      icon: () => (
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
          <span className="text-white text-xs font-bold">A</span>
        </div>
      ),
      color: "border-purple-500 text-purple-500 hover:bg-purple-50",
      link: "https://avito.ru/yourprofile",
    },
    {
      name: "Вконтакте",
      icon: () => (
        <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center">
          <span className="text-white text-xs font-bold">VK</span>
        </div>
      ),
      color: "border-blue-600 text-blue-600 hover:bg-blue-50",
      link: "https://vk.com/yourpage",
    },
  ];

  const handleContactClick = (link: string) => {
    window.open(link, "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+79015737886";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Контакты</h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Для записи, а так же чтобы задать любые вопросы,
            <br />
            пишите в удобный вам мессенджер:
          </p>

          {/* Contact Buttons */}
          <div className="space-y-4 mb-8">
            {contactButtons.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleContactClick(contact.link)}
                  className={`w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-full border-2 transition-all duration-200 hover:scale-105 ${contact.color}`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{contact.name}</span>
                </button>
              );
            })}

            {/* Phone Button */}
            <button
              onClick={handlePhoneClick}
              className="w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-50 transition-all duration-200 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">+7 901 573-78-86</span>
            </button>
          </div>

          {/* Address Section */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Адрес:</h3>
                <p className="text-gray-600">Архангельский переулок, 11/16с1</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Время работы:
                </h3>
                <p className="text-gray-600">
                  Пн-вс: <span className="font-medium">10:00 - 22:00</span>
                </p>
              </div>
            </div>
          </div>

          {/* Map Integration Placeholder */}
          <div className="mt-8">
            <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-500">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Карта местоположения</p>
                <p className="text-xs">Интеграция с картами</p>
              </div>
            </div>
          </div>

          {/* Quick Action Section */}
          <div className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-800 mb-3">Быстрая запись</h3>
            <p className="text-gray-600 text-sm mb-4">
              Выберите удобный способ связи для записи на процедуру
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => handleContactClick("https://wa.me/79015737886")}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">WhatsApp</span>
              </button>
              <button
                onClick={() => handleContactClick("https://t.me/yourusername")}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span className="text-sm font-medium">Telegram</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautySalonContacts;
