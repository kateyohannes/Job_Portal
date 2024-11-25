
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsTiktok,
} from "react-icons/bs";

import { useTranslations } from "next-intl"

const Footer = () => {
    const t = useTranslations("Footer")
  return (
    <div className="bg-primary  mt-[90px] py-12 text-white">
      <div className=" px-5 max-w-6xl gap-5 mx-auto flex flex-col  md:items-center  md:flex-row md:justify-between">
        <div className="flex md:items-center  flex-col gap-3">
          <img src="https://images.unsplash.com/photo-1622964318124-d87cb88d24e2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="size-[152px]" />
          <div className="flex items-center gap-4">
            <a
              href=""
              target="_blank"
              className="p-[10px] rounded-lg bg-black"
            >
              <BsLinkedin />
            </a>
            <a
              href=""
              target="_blank"
              className="p-[10px] rounded-lg bg-black"
            >
              <BsTiktok />
            </a>
            <a
              href=""
              target="_blank"
              className="p-[10px] rounded-lg bg-black"
            >
              <BsTelegram />
            </a>
            <a
              href=""
              target="_blank"
              className="p-[10px] rounded-lg bg-black"
            >
              <BsFacebook />
            </a>
            <a
              href=""
              target="_blank"
              className="p-[10px] rounded-lg bg-black"
            >
              <BsInstagram />
            </a>
          </div>
        </div>

        <div className="flex pb-5 flex-col mt-5 list-none space-y-2">
          <p className="text-xl font-bold">{t("contact.contact_title")}</p>
          <li>{t("contact.contact_address")}</li>
          <li>
            {" "}
            <a href="hakimtibebe@gmail.com">hakimtibebu@gmail.com</a>
          </li>
          <li>
            <a href="tel:+251917040506">+(251) 917040506</a>
          </li>
          <li>
            <a href="tel:+251912718883">+(251) 912718883</a>
          </li>
        </div>

        {/* <div className="flex pb-5 flex-col list-none space-y-2">
          <p className="text-xl font-bold pb-2">{t("link.link_title")}</p>
          <Link href="#home">
            <li>{t("link.link_home")}</li>{" "}
          </Link>
          <Link href="#service">
            <li>{t("link.link_service")}</li>{" "}
          </Link>
          <Link href="#contact">
            <li>{t("link.link_contact")}</li>{" "}
          </Link>
        </div>
         */}
      </div>
    </div>
  );
};

export default Footer;