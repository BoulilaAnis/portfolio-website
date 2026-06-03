import Link from 'next/link'

type navLink = {
  label: string
  src: string
}
const navLinks: navLink[] = [
  {
    label: 'Home',
    src: '/',
  },
  {
    label: 'Projects',
    src: '/projects',
  },
]

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mt-3">
      <h2>
        <Link href="/">Logo</Link>
      </h2>
      <ul className="flex gap-3">
        {navLinks.map((link: navLink) => (
          <li key={link.src} className="relative group">
            <Link href={link.src}>{link.label}</Link>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500  group-hover:scale-x-100 scale-x-0 transition-transform duration-400 orgin-center ease-in-out " />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
