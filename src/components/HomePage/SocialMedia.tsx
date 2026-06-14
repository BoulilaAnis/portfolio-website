import config from '@/payload.config'
import { getPayload } from 'payload'
import Image from 'next/image'

export const SocialMedia = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { docs: socialLinks } = await payload.find({
    collection: 'sociallinks',
  })
  return (
    <div className="flex justify-center flex-wrap items-center gap-3 my-4">
      {socialLinks.map((link: any) => (
        <a
          key={link.name}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${link.name}`}
          className={`
            group relative flex h-10 w-10 items-center justify-center rounded-xl
            border border-border bg-secondary text-primary-foreground font-semibold text-sm
            transition-all duration-300 ease-out
            hover:-translate-y-1 hover:shadow-md
          `}
        >
          <Image
            src={link.logo.url}
            alt={link.logo.alt}
            width={link.logo.width}
            height={link.logo.height}
          />

          <span className="absolute -top-10 scale-0 rounded-lg bg-popover px-2.5 py-1 text-xs font-medium text-popover-foreground shadow-sm transition-all duration-200 ease-in-out group-hover:scale-100 whitespace-nowrap">
            {link.name}
          </span>
        </a>
      ))}
    </div>
  )
}

export default SocialMedia
