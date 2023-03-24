import { Metadata } from 'next'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { UserAuthForm } from '@/components/user-auth-form'

import Image from 'next/image'
import IconLogo from '@/assets/logotypes/logo-dark-icon.svg'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
}

export default function RegisterPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center ">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute top-4 left-4 md:top-8 md:left-8',
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 rounded-lg border border-primarycolor p-12 shadow-xl shadow-black/50 sm:max-w-lg">
        <div className="flex flex-col space-y-2 text-center">
          <Image
            src={IconLogo}
            alt=""
            className="mb-4 self-center"
            width={42}
          />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome the <span className="text-primarycolor">Loopy</span> App
          </h1>
          <p className="text-sm text-gray-500 dark:text-slate-400">
            Sign in to your account of github
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-gray-500 dark:text-primarycolor">
          By clicking continue, you agree to our{' '}
          <Link
            href="/terms"
            className="hover:text-brand text-gray-400 underline underline-offset-4 transition-all duration-300 ease-out hover:text-primarycolor"
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            href="/privacy"
            className="hover:text-brand text-gray-400 underline underline-offset-4 transition-all duration-300 ease-out hover:text-primarycolor"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
