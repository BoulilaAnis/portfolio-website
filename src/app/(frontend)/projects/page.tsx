import config from '@/payload.config'
import { getPayload } from 'payload'
import Image from 'next/image'
import ProjectCard from '@/components/Projects/ProjectCard'

const projects = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { docs: projects } = await payload.find({
    collection: 'projects',
  })

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 justify-center justify-items-center w-full">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project}/>
      ))}
    </div>
  )
}
export default projects
