import React from "react";
import { useTranslations } from "next-intl"

const Hero = () => {
  const t = useTranslations("Hero")
  return (
    <div>
      <div className="flex max-w-5xl mx-auto flex-col md:flex-row px-5   overflow-y-hidden  md:pl-12  md:h-[85vh] items-center justify-between">
        <div className="flex flex-col ">
          <div className="flex gap-4 items-center">
            <p className="text-2xl mt-7 md:mt-0 font-bold text-primary">
              {t("hero_title")}
            </p>
            <div className="w-[60px] text-primary border-t font-bold"></div>
          </div>
          <p className="text-[50px] md:text-[60px] font-extrabold leading-[59px] md:leading-[75px] max-w-[630px]">
          {t("hero_subtitle")}
          </p>
          <div className=" border-l-2 mt-7 h-full border-orange-600">
            <p className="max-w-[630px] px-4 ">
              {t("hero_description")}
            </p>

          </div>
        </div>

        <div className="px-4 mt-6 md:mt-0">
          <img src="/doct1.png" alt={t("hero_subtitle")} className="hidden  md:inline" />
          <img
            className="md:hidden object-center"
            src="/doct1.png"
            alt={t("hero_subtitle")}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
