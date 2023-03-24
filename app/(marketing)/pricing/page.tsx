import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'

export const metadata = {
  title: 'Pricing',
}

export default function PricingPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="flex w-full flex-col gap-4 md:max-w-[52rem]">
        <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter text-primarycolor sm:text-3xl md:text-6xl">
          Pricing Plans
        </h2>
        <p className="max-w-[85%] leading-normal text-gray-400 sm:text-lg sm:leading-7">
          Be a Premium Loopy and enhance your knowledge.
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border border-primarycolor p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in the PRO plan
          </h3>
          <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <li className="flex items-center text-gray-300">
              <Icons.check className="mr-2 h-4 w-4 text-primarycolor" />{' '}
              Unlimited Lifes
            </li>
            <li className="flex items-center text-gray-300">
              <Icons.check className="mr-2 h-4 w-4 text-primarycolor" /> No Ads
            </li>

            <li className="flex items-center text-gray-300">
              <Icons.check className="mr-2 h-4 w-4 text-primarycolor" />{' '}
              Playground
            </li>
            <li className="flex items-center text-gray-300">
              <Icons.check className="mr-2 h-4 w-4 text-primarycolor" /> Pratice
              Mode
            </li>
            <li className="flex items-center text-gray-300">
              <Icons.check className="mr-2 h-4 w-4 text-primarycolor" /> Access
              to Discord
            </li>
            <li className="flex items-center text-gray-300">
              <Icons.check className="mr-2 h-4 w-4 text-primarycolor" /> Premium
              Support
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-7xl font-bold ">$5</h4>
            <p className="text-sm font-medium text-gray-400">Billed Monthly</p>
          </div>
          <Link
            href="/login"
            className={cn(
              buttonVariants({ size: 'sm', variant: 'subtle' }),
              'p-6 text-lg font-bold',
            )}
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border border-primarycolor p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in the PRO plan
          </h3>
          <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <li className="flex items-center text-gray-300">
              <Icons.check className="mr-2 h-4 w-4 text-primarycolor" /> Limited
              Lifes
            </li>
            <li className="flex items-center text-gray-300">
              <Icons.check className="mr-2 h-4 w-4 text-primarycolor" /> Ads
              every 5 minutes
            </li>

            <li className="flex items-center text-gray-500">
              <Icons.close className="mr-2 h-4 w-4 text-gray-500" /> Playground
            </li>
            <li className="flex items-center text-gray-500">
              <Icons.close className="mr-2 h-4 w-4 text-gray-500" /> Pratice
              Mode
            </li>
            <li className="flex items-center text-gray-500">
              <Icons.close className="mr-2 h-4 w-4 text-gray-500" /> Access to
              Discord
            </li>
            <li className="flex items-center text-gray-500">
              <Icons.close className="mr-2 h-4 w-4 text-gray-500" /> Premium
              Support
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-6xl font-bold">Free</h4>
          </div>
          <Link
            href="/login"
            className={cn(
              buttonVariants({ size: 'sm', variant: 'subtle' }),
              'bg-gray-300 p-6 text-lg font-bold',
            )}
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className=" flex w-full flex-col gap-4 md:max-w-[52rem]">
        <p className="max-w-[85%] leading-normal text-gray-400 sm:leading-7">
          Loopy is a monthly subscription. You can cancel at any time. <br />
          <strong>
            If you cancel, you will still have access to the service until the
            end of your
          </strong>
        </p>
      </div>
    </section>
  )
}
