// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div id="contact-me" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
          Contact Me
        </p>
        <p className="text-sm md:text-xl flex items-center gap-3">
          <MdAlternateEmail
            className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
            size={36}
          />
          <span> {personalData.email}</span>
        </p>

        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className='text-2xl'>
              Please email if you have any interest in my services!
            </p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ContactSection;