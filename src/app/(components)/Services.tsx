import React from "react";
import { useTranslations } from "next-intl"

// @typescript-eslint/no-explicit-any
const ServiceCard = ({ imgSrc, title, content, bgColor }: any) => {
  return (
    <div className="flex md:flex-col shadow-2xl  flex-row px-3 py-4 rounded-md items-center md:items-start gap-4">
      {/* Image Section */}
      <div
        className={`h-[150px] w-[130px] mx-auto object-cover px-9 rounded-md ${bgColor} flex items-center justify-center`}
      >
        <img src={imgSrc} alt={title} className=" w-full h-full object-contain" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-2xl text-gray-500 font-bold">{title}</p>
        <p className="max-w-[240px] ">{content}</p>
      </div>
    </div>
  );
};

const Under = () => {
  const t = useTranslations("Services");
  const keys = ["service_one", "service_two", "service_three", "service_four"] as const;

  // const services = [
  //   {
  //     imgSrc:
  //       "https://kamleshyadav.com/html/healthcare/bootstrap5/healthcare/assets/images/service-iocn1.png",
  //     title: "Psychological",
  //     content:
  //       "We offer expert mental health care and support to help you navigate life’s challenges and maintain emotional well-being.",
  //     bgColor: "bg-primary",
  //   },
  //   {
  //     imgSrc:
  //       "https://kamleshyadav.com/html/healthcare/bootstrap5/healthcare/assets/images/service-iocn2.png",
  //     title: "Cardiology",
  //     content:
  //       "Our cardiology services ensure the best care for your heart, offering diagnosis and treatment for all heart conditions.",
  //     bgColor: "bg-orange-600",
  //   },
  //   {
  //     imgSrc:
  //       "https://kamleshyadav.com/html/healthcare/bootstrap5/healthcare/assets/images/service-iocn3.png",
  //     title: "Gynecology",
  //     content:
  //       "Comprehensive women’s health services, from routine checkups to specialized treatments, delivered with care and expertise.",
  //     bgColor: "bg-blue-500",
  //   },
  //   {
  //     imgSrc:
  //       "https://kamleshyadav.com/html/healthcare/bootstrap5/healthcare/assets/images/service-iocn4.png",
  //     title: "Pediatrician",
  //     content:
  //       "Providing expert care for children, ensuring their growth and development are nurtured every step of the way.",
  //     bgColor: "bg-yellow-400",
  //   },
  // ];

  return (
    <div className="max-w-6xl px-5 md:px-0 mx-auto">
      <div className="mt-[80px] gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {keys.map((key, index) => (
          <ServiceCard
            key={index}
            imgSrc={t(`${key}.service_image`)}
            title={t(`${key}.service_name`)}
            content={t(`${key}.service_description`)}
            bgColor={t(`${key}.service_bg`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Under;
