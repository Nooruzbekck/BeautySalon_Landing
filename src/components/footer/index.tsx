"use client";

import React from "react";
import { MessageCircle, Send, Instagram, MapPin } from "lucide-react";

const BeautySalonFooter = () => {
  const navigationLinks = [
    { name: "Главная страница", href: "#home" },
    { name: "Наши работы", href: "#portfolio" },
    { name: "Услуги и цены", href: "#services" },
    { name: "Запись", href: "#booking" },
    { name: "Отзывы", href: "#reviews" },
    { name: "Контакты", href: "#contacts" },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "text-green-400 hover:text-green-300",
      href: "https://wa.me/79015737886",
    },
    {
      name: "Telegram",
      icon: Send,
      color: "text-blue-400 hover:text-blue-300",
      href: "https://t.me/yourusername",
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "text-pink-400 hover:text-pink-300",
      href: "https://instagram.com/yourusername",
    },
    {
      name: "Avito",
      icon: () => (
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center hover:from-blue-400 hover:to-purple-500 transition-all duration-200">
          <span className="text-white text-sm font-bold">A</span>
        </div>
      ),
      color: "",
      href: "https://avito.ru/yourprofile",
    },
    {
      name: "VKontakte",
      icon: () => (
        <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors duration-200">
          <span className="text-white text-sm font-bold">VK</span>
        </div>
      ),
      color: "",
      href: "https://vk.com/yourpage",
    },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      // Smooth scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Open external link
      window.open(href, "_blank");
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          {/* Navigation Links */}
          <nav className="mb-8">
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleLinkClick(social.href)}
                  className="group transition-transform duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.color ? (
                    <IconComponent
                      className={`w-8 h-8 ${social.color} transition-colors duration-200`}
                    />
                  ) : (
                    <IconComponent />
                  )}
                </button>
              );
            })}
          </div>

          {/* Address */}
          <div className="text-gray-400 text-sm">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">Адрес:</span>
            </div>
            <p>Архангельский переулок, 11/16с1</p>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-500 text-xs">
              © 2025 Салон красоты. Все права защищены.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500"></div>
      </div>
    </footer>
  );
};

export default BeautySalonFooter;
