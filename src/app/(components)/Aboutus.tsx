
"use client"
import React, { useState } from 'react';
import { useTranslations } from "next-intl";

const Aboutus = () => {
    const [activeTab, setActiveTab] = useState('work'); // Default active tab
    const t = useTranslations("About")
    
    const renderContent = () => {
        switch (activeTab) {
            case 'work':
                return (
                    <p className="px-9 mt-5 text-lg text-gray-600">ክሊኒካችን ልዩ የጤና አጠባበቅ አገልግሎቶችን በዘመናዊ ቴክኖሎጂ፣ ከፍተኛ ችሎታ ያለው ቡድን እና ታካሚን ማዕከል ባደረገ አቀራረብ ለማቅረብ ቁርጠኛ ነው። ከመደበኛ ምርመራዎች እስከ ልዩ ሕክምናዎች፣ እያንዳንዱ ግለሰብ ለልዩ ፍላጎታቸው የተዘጋጀ ግላዊ እንክብካቤን ማግኘቱን እናረጋግጣለን።</p>
                );
            case 'mission':
                return (
                    <p className="px-9 mt-5 text-lg text-gray-600">የእኛ ተልእኮ ሩህሩህ እና ሁሉን አቀፍ የህክምና አገልግሎት በመስጠት ጤናማ ህይወትን ማስተዋወቅ ነው። ታካሚዎች ስለጤንነታቸው እና ደህንነታቸው በመረጃ ላይ የተመሰረተ ውሳኔ እንዲያደርጉ የሚሰማቸው፣ የሚደገፉ እና ስልጣን የሚሰማቸውበት እንግዳ ተቀባይ አካባቢ ለመፍጠር እንጥራለን።</p>
                );
            case 'achievement':
                return (
                    <p className="px-9 mt-5 text-lg text-gray-600">ከ 5 ዓመታት በላይ በጤና እንክብካቤ ማህበረሰባችንን በማገልገላችን ኩራት ይሰማናል። በሺዎች የሚቆጠሩ ታካሚዎችን በተሳካ ሁኔታ ከማከም ጀምሮ ለእንክብካቤ ጥራት እውቅና እስከ ማግኘት ድረስ ስኬቶቻችን ህይወታችንን ለማሻሻል እና በህክምና አገልግሎቶች ውስጥ አዳዲስ ደረጃዎችን ለማውጣት ያለንን ቁርጠኝነት ያንፀባርቃሉ።</p>
                );
            default:
                return null;
        }
    };

    return (
        <div className="max-w-5xl mt-[120px] mx-auto">
            <div className="flex items-center justify-between flex-col lg:flex-row">
                <img
                    className="rounded-tl-[170px] px-5 rounded-r-3xl h-[500px] object-fill"
                    src="doct2.jpg"
                    alt="About us"
                />

                <div>
                    <div className="flex gap-4 px-5 items-center">
                        <p className="text-2xl mt-7 md:mt-0 font-bold my-4  text-primary">
                            {t("about_title")}
                        </p>
                        <div className="w-[60px] text-primary border-t font-bold"></div>
                    </div>

                    <p className="font-bold px-5 text-[45px]  md:text-[55px] max-w-[630px] leading-[60px] capitalize">
                        {t("about_subtitle")}
                    </p>

                    {/* Toggle Buttons */}
                    <div className="flex items-start justify-start mt-7 px-9 gap-11">
                        <button
                            onClick={() => setActiveTab('work')}
                            className={`font-bold text-lg ${activeTab === 'work' ? '  underline  text-primary' : 'text-gray-700'
                                }`}
                        >
                            {t("work.work_title")}
                        </button>
                        <button
                            onClick={() => setActiveTab('mission')}
                            className={`font-bold text-lg ${activeTab === 'mission' ? ' underline text-primary' : 'text-gray-700'
                                }`}
                        >
                            {t("mission.mission_title")}
                        </button>
                        <button
                            onClick={() => setActiveTab('achievement')}
                            className={`font-bold text-lg ${activeTab === 'achievement' ? ' underline text-primary' : 'text-gray-700'
                                }`}
                        >
                            {t("achivement.achivement_title")}
                        </button>
                    </div>

                    {/* Dynamic Content */}
                    <div className='max-w-[540px]'>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
