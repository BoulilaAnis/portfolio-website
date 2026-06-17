import type { CollectionConfig } from 'payload'
import { revalidate } from '@/hooks/revalidate'

export const SocilaLinks: CollectionConfig = {
  slug: 'sociallinks',
  hooks: {
    afterChange: [revalidate],
    afterDelete: [revalidate],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
