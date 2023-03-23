'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import HtmlDrag from '@/assets/drag/html-drag.svg'
import CssDrag from '@/assets/drag/css-drag.svg'
import JsDrag from '@/assets/drag/js-drag.svg'
import ReactDrag from '@/assets/drag/react-drag.svg'
import TsDrag from '@/assets/drag/ts-drag.svg'
import LogoDrag from '@/assets/drag/icon-drag.svg'

export function DragContainer() {
  const constraintsRef = useRef(null)

  return (
    <motion.div
      className="flex h-full w-full flex-col items-center justify-center gap-6"
      ref={constraintsRef}
    >
      <>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragSnapToOrigin
          whileDrag={{ scale: 1.1, rotate: 2 }}
          className="z-30"
        >
          <div className="flex max-w-md cursor-pointer ">
            <h2 className="title-main trasition-everything  rounded-full bg-bgprimary px-4 py-2 text-center text-sm text-textprimary opacity-70 hover:opacity-100">
              drag to move
            </h2>
          </div>
        </motion.div>
      </>
      <>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragSnapToOrigin
          whileDrag={{ scale: 1.1, rotate: 2 }}
        >
          <div className="flex max-w-md cursor-pointer ">
            <h1 className="title-main z-30 text-center text-4xl">
              <span className="text-primarycolor">Learning to </span>code can be
              easy and happy <span className="text-primarycolor">set fun!</span>
            </h1>
          </div>
        </motion.div>
      </>
      <div className="flex h-max max-w-md cursor-pointer">
        <Link href="" className="z-30">
          <button className="title-main trasition-everything  rounded-full bg-primarycolor px-6 py-2 text-center text-xl text-bgprimary hover:scale-110 hover:bg-textprimary hover:text-bgprimary">
            Free trial
          </button>
        </Link>
      </div>
      {/* Images */}
      <motion.div className="absolute z-0 flex h-96 w-full justify-between overflow-hidden border-t border-b border-b-primarycolor border-t-primarycolor">
        <motion.div>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.1, rotate: 2 }}
            className="relative right-20 top-52"
          >
            <Image
              src={ReactDrag}
              alt=""
              draggable={false}
              width={240}
              className="z-0 cursor-pointer "
            />
          </motion.div>
        </motion.div>
        <motion.div>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.1, rotate: 2 }}
            className="relative right-36 bottom-4 "
          >
            <Image
              src={TsDrag}
              alt=""
              draggable={false}
              width={180}
              className="z-0 cursor-pointer "
            />
          </motion.div>
        </motion.div>
        <motion.div>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.1, rotate: 2 }}
            className="relative right-56 top-60 "
          >
            <Image
              src={CssDrag}
              alt=""
              draggable={false}
              width={140}
              className="z-0 cursor-pointer "
            />
          </motion.div>
        </motion.div>
        <motion.div>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.1, rotate: 2 }}
            className="relative left-36 top-4 "
          >
            <Image
              src={HtmlDrag}
              alt=""
              draggable={false}
              width={180}
              className="z-0 cursor-pointer "
            />
          </motion.div>
        </motion.div>
        <motion.div>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.1, rotate: 2 }}
            className="relative left-20 top-56 "
          >
            <Image
              src={JsDrag}
              alt=""
              draggable={false}
              width={120}
              className="z-0 cursor-pointer rounded-lg"
            />
          </motion.div>
        </motion.div>

        <motion.div>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.1, rotate: 2 }}
            className="relative right-4 top-4 "
          >
            <Image
              src={LogoDrag}
              alt=""
              draggable={false}
              width={140}
              className="z-0 cursor-pointer"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
