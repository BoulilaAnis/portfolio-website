import { revalidatePath } from 'next/cache'

export const revalidate = () => {
  revalidatePath('/')
  revalidatePath('/projects')
  revalidatePath('/technologies')
}
