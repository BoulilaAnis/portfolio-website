import config from '@/payload.config'
import { getPayload } from 'payload'
import Image from 'next/image'
import TerminalCard from './Terminal'
import { Quicksand } from 'next/font/google'
import WavyLine from './wave'
import { TextLoop } from 'components/motion-primitives/text-loop'
import { TextEffect } from 'components/motion-primitives/text-effect'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['500', '700'],
})

const Hero = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const hero = await payload.findGlobal({
    slug: 'hero',
  })

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="lg:w-3xl md:w-xl w-full md:h-60 h-72">
            <TerminalCard className="mt-9 " />
          </div>
        </div>
        <div className="w-[79%] mx-auto">
          <h1
            className={`${quicksand.className} md:text-xl text-md text-secondary-foreground bg-secondary rounded-xl py-3 px-5 text-center mt-9 sm:w-full w-[90%] mx-auto`}
          >
            <TextEffect per="char" preset="fade">
              {hero.welcomeBanner || ''}
            </TextEffect>
          </h1>
          <div className="flex sm:flex-row sm:gap-2 gap-9 sm:justify-between justify-center items-center mt-9 flex-col">
            {' '}
            <div className="w-fit">
              <h3 className={`${quicksand.className} text-5xl font-bold`}>Anis Boulila</h3>
              <span className="tracking-wide">
                Craftsman ({' '}
                <TextLoop
                  className="overflow-y-clip text-primary tracking-wide"
                  transition={{
                    type: 'spring',
                    stiffness: 900,
                    damping: 80,
                    mass: 10,
                  }}
                  variants={{
                    initial: {
                      y: 20,
                      rotateX: 90,
                      opacity: 0,
                      filter: 'blur(4px)',
                    },
                    animate: {
                      y: 0,
                      rotateX: 0,
                      opacity: 1,
                      filter: 'blur(0px)',
                    },
                    exit: {
                      y: -20,
                      rotateX: -90,
                      opacity: 0,
                      filter: 'blur(4px)',
                    },
                  }}
                >
                  {hero.CraftsmanBio?.map((list) => (
                    <span>{list.skill}</span>
                  ))}
                </TextLoop>{' '}
                )
              </span>
              <WavyLine />
            </div>
            <div className="w-32 h-32 ">
              <Image
                className="rounded-full aspect-square object-cover scale-x-[-1] border-primary border-2"
                src={hero.profilePic.url}
                width={hero.profilePic.width}
                height={hero.profilePic.height}
                alt="Profile Picture"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Hero
