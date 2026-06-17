'use client'
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
import { Media, Project, Technology } from '@/payload-types'
import { XIcon } from 'lucide-react'
import Link from 'next/link'

const ProjectCard = ({ project }: { project: Project }) => {
  const image = project?.image as Media | undefined
  return (
    <MorphingDialog
      key={project.id}
      transition={{ type: 'tween', bounce: 0.05, duration: 0.25, stiffness: 200, damping: 24 }}
    >
      <MorphingDialogTrigger className="w-full text-left block">
        <div className="group min-h-[260px] max-w-xl rounded-xl border border-border bg-secondary p-6 text-secondary-foreground shadow-sm transition-all hover:shadow-md">
          <div>
            {image?.url && (
              <MorphingDialogImage
                className="rounded-md w-full object-cover"
                src={image.url}
                alt={image.alt}
              />
            )}
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <MorphingDialogTitle className="text-xl font-semibold tracking-tight text-secondary-foreground line-clamp-1">
              {project.name}
            </MorphingDialogTitle>
            <span className="flex gap-1 items-center bg-white p-1 rounded-2xl shrink-0">
              {(project.technologies as Technology[])?.slice(0, 3).map((tech: Technology) => {
                const logo = (tech?.logo as Media) || undefined
                if (!logo?.url) return null
                return (
                  <div key={tech.id} className="h-8 w-8 flex items-center justify-center">
                    <Image
                      className="max-h-full w-auto object-contain"
                      src={logo?.url}
                      alt={logo.alt}
                      width={logo.width || 32}
                      height={logo.height || 32}
                    />
                  </div>
                )
              })}

              {(project.technologies?.length || 0) > 3 && (
                <span className="text-muted-foreground font-bold text-sm px-1 select-none">
                  ...
                </span>
              )}
            </span>
          </div>
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="w-[95vw] sm:w-[85vw] md:w-[60vw] max-w-3xl rounded-xl bg-secondary text-secondary-foreground">
          <ScrollArea className="max-h-[85dvh] w-full">
            <div className="p-6 border border-border rounded-xl">
              <div>
                {image?.url && (
                  <MorphingDialogImage
                    className="rounded-md w-full max-h-[40vh] object-cover object-top"
                    src={image.url}
                    alt={image.alt}
                  />
                )}
              </div>

              <MorphingDialogTitle className="md:text-4xl text-3xl mt-4 font-semibold tracking-tight text-primary-foreground text-center">
                {project.name}
              </MorphingDialogTitle>

              <p className="md:text-xl text-base mt-4 border border-border/40 rounded-xl py-3 px-4 leading-relaxed opacity-90">
                {project.description}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                <span className="flex flex-wrap gap-2 items-center bg-primary p-1.5 rounded-2xl w-fit">
                  {(project.technologies as Technology[])?.map((tech: Technology) => {
                    const logo = (tech?.logo as Media) || undefined
                    return (
                      <div key={tech.id} className="relative group">
                        {logo?.url && (
                          <div className="h-12 w-12 flex items-center justify-center p-1 transition-transform hover:scale-110">
                            <Image
                              className="max-h-full w-auto object-contain cursor-pointer"
                              src={logo.url}
                              alt={logo.alt}
                              width={logo.width || 32}
                              height={logo.height || 32}
                            />
                          </div>
                        )}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm py-1 px-2 pointer-events-none transition-all scale-0 group-hover:scale-100 rounded shadow-md whitespace-nowrap z-10">
                          {tech.name}
                        </span>
                      </div>
                    )
                  })}
                </span>

                <Link
                  href={project.link || '#'}
                  target="_blank"
                  className="text-sm font-medium px-4 py-2 bg-accent rounded-lg text-accent-foreground text-center hover:translate-x-1 duration-200 transition-all animate-pulse hover:animate-none shrink-0"
                >
                  View Project &rarr;
                </Link>
              </div>
            </div>
          </ScrollArea>
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
}

export default ProjectCard
