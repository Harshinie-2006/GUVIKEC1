import Link from 'next/link'
import '@/styles/navigation.css'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="nav-content">
          <Link href="/" prefetch={true} className="nav-logo">
            <div className="logo-box">
              GUVI & KEC
            </div>
          </Link>

          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
