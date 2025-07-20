'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import { Mail} from 'lucide-react'
import Link from 'next/link';

const Footer = () => (
  <motion.footer
    initial="hidden"
    whileInView="show"
    className={"py-8 relative"}
  >
    <div className={" mx-auto flex flex-col gap-8 px-12 "}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Join Us
        </h4>
        <Link href='https://www.instagram.com/round_table____/' target='blank' className="flex items-center h-fit py-4 px-6 bg-accent rounded-[32px] gap-[12px]">
          {/* <Mail className='text-foreground'strokeWidth={2} /> */}
          <span className="font-medium text-md text-foreground">
            get in touch
          </span>
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-25" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            the Round Table
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Made by the Round Table
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.link}>
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
