import SocialLinks from '@/components/HomePage/SocialMedia'
import './styles.css'
import Hero from '@/components/HomePage/Hero'

export default async function HomePage() {
  return (
    <div>
      <Hero/>
      <SocialLinks/>
    </div>
  )
}
