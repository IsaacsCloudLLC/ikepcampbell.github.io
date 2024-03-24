// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function ContactSection() {
  return (
    <div id="contact" className="flex items-center my-12 lg:my-16 relative mt-24 text-white">
      <div id="contact-me" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div>
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Contact Me
          </p>
          <p className='text-lg md:text-xl mb-8'>
            Feel free to contact me at your convenience and I’ll get in touch with you within 24 hours.
          </p>
          <div className="flex items-center gap-3 text-sm md:text-xl mt-4">
            <span>Email Me </span>
            <MdAlternateEmail className="text-[#16f2b3] text-xl" />
            <span>{personalData.email}</span>
          </div>
          <div className="flex items-center gap-3 text-sm md:text-xl mt-4">
            <span>Call Me </span>
            <IoMdCall className="text-[#16f2b3] text-xl" />
            <span>{personalData.phone}</span>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ContactSection;
