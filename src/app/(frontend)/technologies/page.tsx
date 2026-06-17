import config from '@/payload.config'
import { getPayload } from 'payload'
import { Media } from '@/payload-types'
import {
  MorphingDialog,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogTitle,
  MorphingDialogTrigger,
  MorphingDialogClose,
} from 'components/motion-primitives/morphing-dialog'
import { XIcon } from 'lucide-react'

const technologies = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { docs: technologies } = await payload.find({
    collection: 'technologies',
  })
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 justify-center justify-items-center w-full max-w-7xl mx-auto px-4">
      {technologies.map((technology) => {
        const logo = technology?.logo as Media | undefined

        return (
          <MorphingDialog key={technology.id}>
            <MorphingDialogTrigger className="w-full max-w-[320px]">
              <div className="bg-primary text-primary-foreground flex flex-col justify-center items-center p-6 rounded-xl h-52 w-full text-center shadow-md transition-transform hover:scale-[1.02] duration-300">
                {logo?.url && (
                  <div className="h-20 flex items-center justify-center mb-3">
                    <MorphingDialogImage
                      className="max-h-full w-auto object-contain"
                      src={logo.url}
                      alt={logo.alt || 'logo'}
                    />
                  </div>
                )}

                <MorphingDialogTitle className="text-2xl md:text-3xl tracking-tight font-serif line-clamp-1">
                  {technology?.name}
                </MorphingDialogTitle>

                <MorphingDialogSubtitle className="text-sm md:text-base font-light opacity-80 mt-1">
                  {technology?.description
                    ? technology?.description.split(' ').length > 3
                      ? technology.description.split(' ').slice(0, 3).join(' ') + '...'
                      : technology?.description
                    : ''}
                </MorphingDialogSubtitle>
              </div>
            </MorphingDialogTrigger>

            <MorphingDialogContainer>
              {/* Dialog Box: Fluid width scales nicely on mobile (90vw) up to desktop (50vw) */}
              <MorphingDialogContent className="w-[90vw] sm:w-[70vw] md:w-[50vw] max-w-2xl min-h-[50vh] md:min-h-[60vh] bg-primary text-primary-foreground flex flex-col justify-center items-center p-6 md:p-10 rounded-2xl shadow-2xl">
                <div className="bg-secondary rounded-xl p-6 flex flex-col items-center justify-center w-full max-w-md">
                  {logo?.url && (
                    <div className="h-24 md:h-36 flex items-center justify-center mb-4">
                      <MorphingDialogImage
                        className="max-h-full w-auto object-contain"
                        src={logo.url}
                        alt={logo.alt || 'logo'}
                      />
                    </div>
                  )}

                  <MorphingDialogTitle className="text-2xl md:text-4xl tracking-tight font-serif text-center text-ac-foreground">
                    {technology?.name}
                  </MorphingDialogTitle>
                </div>

                <MorphingDialogSubtitle className="text-base md:text-xl font-light mt-6 text-center max-w-xl leading-relaxed opacity-90">
                  {technology?.description}
                </MorphingDialogSubtitle>
              </MorphingDialogContent>

              <MorphingDialogClose
                className="absolute right-5 top-4 h-fit w-fit rounded-lg bg-accent p-1 z-50"
                variants={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1, transition: { delay: 0.3, duration: 0.1 } },
                  exit: { opacity: 0, transition: { duration: 0 } },
                }}
              >
                <XIcon className="h-6 w-6 text-accent-foreground cursor-pointer" />
              </MorphingDialogClose>
            </MorphingDialogContainer>
          </MorphingDialog>
        )
      })}
    </div>
  )
}
export default technologies
