import './styles.css'
import Navbar from '@/components/Navbar/Navbar'

export default async function HomePage() {
  return (
    <div className="lg:max-w-[70%] md:max-w-[75%] sm:max-w-[80%] max-w-[90%] mx-auto">
      <Navbar />
    </div>
  )
}
