// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from '/public/lottie/code.json';

function Experience() {
  return (
    <div id="experience" className="z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Work Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="flex relative">
          <div className="relative left-0 flex flex-wrap w-full">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative flex items-center mb-8">
                {index !== experiences.length && index !== 0 && <div className="w-6 h-[2px] bg-[#16f2b3]"></div>}

                <GlowCard identifier={`experience-${experience.id}`} className="mr-8">
                  <a href={experience.url} className="p-3 relative block w-full">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />

                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {experience.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <Image
                          src={"/image/logos/" + experience.logo}
                          alt="CompanyLogo"
                          width={80}
                          height={80}
                          className="right-8"
                        />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {experience.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                  </a>
                </GlowCard>
                {index !== experiences.length - 1 && <div className="w-6 h-[2px] bg-[#16f2b3]"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
