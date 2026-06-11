import type { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'hero',
  fields: [
    {
      name: 'whoami',
      type: 'text',
    },
    {
      name: 'welcomeBanner',
      type: 'text',
    },
    {
      name: 'CraftsmanBio',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'skill',
          type: 'text',
        },
      ],
    },
    {
      name: 'profilePic',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
