import Image from 'next/image'
import { Heading } from './components/Heading'
import imageHome from '@/assets/image-home.svg'
import bgDetail from '@/assets/bg-detail.svg'
import { Features } from './components/Features'
import { DragContainer } from './components/DragContainer'
import { Prices } from './components/Prices'
import { getCurrentUser } from '@/lib/session'

export default async function IndexPage() {
  const user = await getCurrentUser()

  return (
    <main id="mainScreen">
      <Image src={bgDetail} alt="" className="absolute top-0 right-0 -z-10" />
      <div className="mx-auto flex h-screen max-w-main items-center justify-between">
        <div>
          <Heading />
        </div>
        <div className="flex w-1/2 items-center justify-center">
          <Image src={imageHome} alt="" height={636} quality={100} />
        </div>
      </div>
      <div className="mx-auto flex max-w-main">
        <Features />
      </div>
      <div className=" mx-auto flex h-96 w-full items-center justify-center overflow-hidden border-y border-y-primarycolor bg-bgprimary py-12">
        <DragContainer />
      </div>
      <div className="mx-auto flex max-w-main py-24">
        <Prices />
      </div>
    </main>
  )
}
