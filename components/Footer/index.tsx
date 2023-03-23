'use client'
import Image from 'next/image'
import logoDark from '@/assets/logotypes/logo-dark.svg'
import Link from 'next/link'
import { InstagramLogo, TwitterLogo, YoutubeLogo } from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-start gap-10 bg-bgprimary">
      <div className="flex w-full max-w-main justify-start gap-24">
        <div className="h-full w-max">
          <Image src={logoDark} alt="" />
        </div>
        <div className="flex h-full w-max flex-col gap-2 text-textprimary">
          <h2 className="title-main text-xl">Content</h2>
          <Link
            className="subtitle-mini trasition-everything text-left text-base opacity-70 hover:text-primarycolor hover:opacity-100"
            href="/about"
          >
            About us
          </Link>
          <Link
            className="subtitle-mini trasition-everything text-left text-base opacity-70 hover:text-primarycolor hover:opacity-100 "
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="subtitle-mini trasition-everything text-left text-base opacity-70 hover:text-primarycolor hover:opacity-100"
            href="/glossary"
          >
            Glossary
          </Link>
        </div>
        <div className="flex h-full w-max flex-col gap-2 text-textprimary">
          <h2 className="title-main text-xl">Content</h2>
          <Link
            className="subtitle-mini trasition-everything text-left text-base opacity-70 hover:text-primarycolor hover:opacity-100"
            href="/about"
          >
            About us
          </Link>
          <Link
            className="subtitle-mini trasition-everything text-left text-base opacity-70 hover:text-primarycolor hover:opacity-100 "
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="subtitle-mini trasition-everything text-left text-base opacity-70 hover:text-primarycolor hover:opacity-100"
            href="/glossary"
          >
            Glossary
          </Link>
        </div>
        <div className="flex h-full w-max flex-col gap-2 text-textprimary">
          <h2 className="title-main text-xl">Content</h2>
          <Link
            className="subtitle-mini trasition-everything text-left text-base opacity-70 hover:text-primarycolor hover:opacity-100"
            href="/about"
          >
            About us
          </Link>
          <Link
            className="subtitle-mini trasition-everything text-left text-base opacity-70 hover:text-primarycolor hover:opacity-100 "
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="subtitle-mini trasition-everything text-left text-base opacity-70 hover:text-primarycolor hover:opacity-100"
            href="/glossary"
          >
            Glossary
          </Link>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border border-primarycolor p-8">
          <h2 className="title-main text-xl">Subscribe to our newsletter</h2>
          <input
            placeholder="loopy@example.com"
            className="rounded-lg border border-gray-700 bg-bgprimary p-4 text-sm text-textprimary focus:outline-primarycolor"
          />
          <button className="trasition-everything rounded-lg bg-primarycolor p-2 font-bold text-bgprimary hover:scale-105 hover:bg-textprimary">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex w-full items-center justify-center border-t border-textprimary">
        <div className="flex w-full max-w-main items-center justify-between py-6 px-2">
          <p className="subtitle-mini text-center text-sm opacity-70">
            © 2023 Loopy. All rights reserved.
          </p>
          <div className="flex items-center justify-end gap-6 text-textprimary">
            <InstagramLogo
              className="trasition-everything hover:text-primarycolor"
              weight="fill"
              width={28}
              height={28}
            />
            <TwitterLogo
              className="trasition-everything hover:text-primarycolor"
              weight="fill"
              width={28}
              height={28}
            />
            <YoutubeLogo
              className="trasition-everything hover:text-primarycolor"
              weight="fill"
              width={28}
              height={28}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
