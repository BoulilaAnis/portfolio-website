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
} from 'components/motion-primitives/morphing-dialog'

const technologies = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { docs: technologies } = await payload.find({
    collection: 'technologies',
  })
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(216px,1fr))] gap-5 justify-center justify-items-center w-full">
      {technologies.map((technology) => {
        const logo = technology?.logo as Media | undefined

        return (
          <MorphingDialog key={technology.id}>
            <MorphingDialogTrigger>
              <div className="bg-primary text-primary-foreground flex flex-col justify-center items-center py-2 px-3 rounded-lg min-h-48 min-w-54">
                {logo?.url && (
                  <MorphingDialogImage src={logo.url} alt={logo.alt || `${technology.name} logo`} />
                )}

                <MorphingDialogTitle className="text-3xl tracking-tight font-serif">
                  {technology?.name}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-xl font-light">
                  {technology?.description
                    ? technology?.description.split(' ').length > 3
                      ? technology.description.split(' ').slice(0, 3).join(' ') + '...'
                      : technology?.description
                    : ''}
                </MorphingDialogSubtitle>
              </div>
            </MorphingDialogTrigger>

            <MorphingDialogContainer>
              <MorphingDialogContent className="min-w-[50vw] min-h-[60vh] bg-primary text-primary-foreground flex flex-col justify-center items-center py-2 px-3 rounded-lg">
                <div className="bg-secondary rounded-lg py-3 px-5 flex flex-col items-center justify-center ">
                  {logo?.url && (
                    <MorphingDialogImage
                      src={logo.url}
                      alt={logo.alt || `${technology.name} logo`}
                    />
                  )}

                  <MorphingDialogTitle className="text-3xl tracking-tight font-serif text-ac-foreground">
                    {technology?.name}
                  </MorphingDialogTitle>
                </div>
                <MorphingDialogSubtitle className="md:text-2xl text-lg font-light mt-5">
                  {technology?.description}
                </MorphingDialogSubtitle>
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>
        )
      })}
    </div>
  )
}
export default technologies
