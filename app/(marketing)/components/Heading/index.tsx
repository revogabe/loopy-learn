'use client'

import Image from 'next/image'
import iconDark from '@/assets/logotypes/logo-dark-icon.svg'
import Link from 'next/link'
import ButtonStoreGoogle from '@/assets/buttons/button-google.svg'
import ButtonStoreApple from '@/assets/buttons/button-apple.svg'
import { motion } from 'framer-motion'

export function Heading() {
  return (
    <div className="flex w-full flex-col gap-12">
      <div className=" flex flex-col gap-6">
        <Image src={iconDark} alt="" />
        <h1 className="title-main max-w-md text-left leading-tight">
          Learning to <span className="text-primarycolor">code</span>
          <br />
          <span className="text-primarycolor">can be</span> easy and
          <br />
          happy set <span className="text-primarycolor">fun!</span>
        </h1>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Link href="">
              <Image src={ButtonStoreGoogle} alt="" />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Link href="">
              <Image src={ButtonStoreApple} alt="" />
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-start text-lg font-bold text-primarycolor">
            &quot;Code today, shine tomorrow.&quot;
          </h3>
          <p className="max-w-md text-start text-base font-normal text-textprimary">
            Learn and hone your skills right now! With loopy you don&apos;t let
            knowledge get lost.
          </p>
        </div>
      </div>
    </div>
  )
}
