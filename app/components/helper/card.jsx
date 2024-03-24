// @flow strict
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Card = ({ experience }) => {
  return (
    <div className="glow-container">
      <Link href={experience.url} passHref>
        <div className="glow-card">
          <div className="glow-overlay"></div>
          <div className="border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-white w-full p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-4">
                <Image src={`/image/logos/${experience.logo}`} alt="CompanyLogo" width={80} height={80} />
              </div>
              <div>
                <p className="text-base sm:text-xl mb-1 font-medium uppercase">{experience.title}</p>
                <p className="text-sm sm:text-base text-gray-400">{experience.company}</p>
              </div>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-[#16f2b3]">{experience.duration}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
