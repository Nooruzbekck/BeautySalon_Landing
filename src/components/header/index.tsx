"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/icons/logo.svg";
import { Burger } from "@/assets/icons/Burger";

const Header = () => {
  return (
    <header className="w-full shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="Le Di Logo" className="w-[90px]" />
        </div>

        <nav className="hidden md:flex gap-6  font-medium text-black sm:hidden lg:hidden">
          <Link href="#">Главная страница</Link>
          <Link href="#">Наши работы</Link>
          <Link href="#">Услуги и цены</Link>
          <Link href="#">Запись</Link>
          <Link href="#">Отзывы</Link>
          <Link href="#">Контакты</Link>
        </nav>

        <div className="flex items-center gap-2">
          <button className="bg-[#F00073] hover:bg-pink-500 text-white rounded-[24px] px-5 py-2 text-sm font-semibold transition">
            Записаться
          </button>
          <article className="hidden lg:block">
            <Burger />
          </article>
        </div>
      </div>
    </header>
  );
};

export default Header;
