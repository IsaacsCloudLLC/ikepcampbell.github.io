// @flow strict
import React from 'react';
import Image from 'next/image';
import { experiences } from '@/utils/data/experience';
import Card from '../../helper/card';

function LLC() {
  return (
    <div id="experience" className="z-50 border-t my-4 border-[#25213b] relative">
      <Image src="/section.svg" alt="Hero" width={1572} height={795} className="absolute -z-10" />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Professional Work Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <p className="text-2xl">
        My journey into the world of DevOps has been characterized by continuous learning, exploring, and just trying
        different things out. Along the way I've refined skills that delivered market value, advanced our teams
        capabilities, and built incredible platforms along the way.
      </p>

      <div className="py-8">
        <div className="flex relative">
          <div className="relative left-0 w-full">
            <ul className="list-none p-0">
              {experiences.map((experience, index) => (
                <li key={experience.id} className="mb-8">
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-1/2 -translate-x-1/2 mb-5 w-1 h-1/4 bg-[#16f2b3]"></div>
                  )}
                  <Card experience={experience} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LLC;
