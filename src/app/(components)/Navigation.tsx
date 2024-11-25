"use client";

import React, { useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

import Link from "next/link";
import { useTranslations } from "next-intl"

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("TopBar")
  const n = useTranslations("NavigationBar")
  const menuItems = ["Home", "About", "Services", "teams", "Contact"];

  return (
    <div>
      {/* Top bar */}
      <div className="hidden md:flex gap-3 flex-col md:flex-row py-2 px-8 bg-primary w-full md:items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[30px] h-[30px] rounded-full bg-transparent text-white flex items-center justify-center">
            <CiClock2 size={32} />
          </div>
          <p className="text-white  font-bold">
            {t("opening_hours")}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[30px] h-[30px] rounded-full bg-transparent text-white flex items-center justify-center">
            <FaPhoneAlt size={16}/>
          </div>
          <p className="text-white  font-bold">
            {t('phone')}: +(251) 917040506
          </p>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-[90%] h-full bg-black/40 backdrop-blur-lg p-6 flex flex-col items-start gap-4 z-50">
          {/* Close Icon */}
          <div className="flex justify-end w-full">
            <IoClose
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-3xl cursor-pointer mb-4"
            />
          </div>
          {/* Mobile Links */}
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white font-bold text-lg border-b w-full pb-2"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Main Navigation */}
      <div className="flex shadow-md mb-4 bg-white sticky top-0 px-8 py-4 items-center justify-between z-40">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1622964318124-d87cb88d24e2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[70px] h-[35px]"
            alt="Logo"
          />
          <p className="md:text-2xl text-xl font-bold">{n("title")}</p>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-5">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-black hover:text-primary"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Appointment Button */}
        <Link href={"#booking"}>
        <div className="hidden md:flex bg-primary rounded-xl px-5 py-2 text-white cursor-pointer">
          <p>Appointment</p>
        </div>
        </Link>

        {/* Mobile Hamburger Menu */}
        <RxHamburgerMenu
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden text-black text-3xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Nav;
