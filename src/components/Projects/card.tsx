import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogImage,
  MorphingDialogTitle,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
} from 'components/motion-primitives/morphing-dialog'
import { Project } from '@/payload-types'
import { XIcon } from 'lucide-react'
import Link from 'next/link'

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <MorphingDialog
      transition={{
        type: 'tween',
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger>
        <div
          key={project.id}
          className="group w-full max-w-xl rounded-xl border border-border bg-secondary p-6 text-secondary-foreground shadow-sm transition-all hover:shadow-md"
        >
          <div>
            {project.image && typeof project.image == 'object' && (
              <MorphingDialogImage
                className="rounded-md"
                src={project.image.url || ''}
                alt={project.image.alt || ''}
              />
            )}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <MorphingDialogTitle className="text-xl font-semibold tracking-tight text-secondary-foreground">
              {project.name}
            </MorphingDialogTitle>
            <span className="flex gap-1 items-center bg-white p-1 rounded-2xl ">
              {project.technologies?.slice(0, 3).map((technologie) => (
                <Image
                  key={technologie.id}
                  className="w-6 h-6 object-contain"
                  src={technologie.logo.url}
                  alt={technologie.name || 'technology logo'}
                  width={technologie.logo.width}
                  height={technologie.logo.height}
                />
              ))}

              {project.technologies?.length > 3 && (
                <span className="text-muted font-bold tracking-widest text-sm ml-1 select-none">
                  ...
                </span>
              )}
            </span>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent>
          <ScrollArea className="h-[90vh]  ">
            <div
              key={project.id}
              className="w-full max-w-[80vw] rounded-xl border border-border bg-secondary p-6 text-secondary-foreground transition-all"
            >
              <div>
                {project.image && typeof project.image == 'object' && (
                  <MorphingDialogImage
                    className="rounded-md object-cover object-top"
                    src={project.image.url || ''}
                    alt={project.image.alt || ''}
                  />
                )}
              </div>
              <MorphingDialogTitle className="text-4xl mt-4 font-semibold tracking-tight text-primary-foreground text-center">
                {project.name}
              </MorphingDialogTitle>
              <p className="text-xl mt-4 indent-6">
                <q> {project.description} </q>
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="flex gap-1 items-center bg-white p-1 rounded-2xl ">
                  {project.technologies?.map((technologie) => (
                    <Image
                      key={technologie.id}
                      className="w-6 h-6 object-contain"
                      src={technologie.logo.url}
                      alt={technologie.name || 'technology logo'}
                      width={technologie.logo.width}
                      height={technologie.logo.height}
                    />
                  ))}
                </span>
                <Link 
                  href={project.link} 
                  target="_blank"
                  className="group relative text-sm font-medium pb-1"
                >
                  View Project &rarr;
                  <span className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 bg-primary transition-all duration-300 group-hover:scale-x-100" />
                </Link>
              </div>
            </div>
          </ScrollArea>
        </MorphingDialogContent>
        <MorphingDialogClose
          className="absolute right-5 top-4 h-fit w-fit rounded-lg bg-accent p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-7 w-7 text-accent-foreground cursor-pointer" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

export default ProjectCard
