import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { vehicleGroups } from '../data/vehicles'

const navLinks: { label: string; to: string }[] = [
  { label: 'Vehicles', to: '/vehicles' },
  { label: 'Product Reviews', to: '/reviews' },
  { label: 'Engineering', to: '/engineering' },
  { label: 'Buying Guides', to: '/buying-guides' },
  { label: '4x4 & Off-Road', to: '/category/recovery' },
  { label: 'DIY & How-To', to: '/category/diy-how-to' },
  { label: 'Travel', to: '/category/travel' },
  { label: 'News', to: '/category/4x4-news' },
  { label: 'About', to: '/about' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [vehiclesOpen, setVehiclesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-ink-line)] bg-[var(--color-ink)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="JuneTrail" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          <div
            className="group relative"
            onMouseEnter={() => setVehiclesOpen(true)}
            onMouseLeave={() => setVehiclesOpen(false)}
          >
            <NavLink
              to="/vehicles"
              className="font-mono text-xs uppercase tracking-wider text-[var(--color-cream-dim)] transition hover:text-[var(--color-amber)]"
            >
              Vehicles
            </NavLink>
            {vehiclesOpen && (
              <div className="absolute left-0 top-full grid w-[520px] grid-cols-3 gap-4 border border-[var(--color-ink-line)] bg-[var(--color-ink-raised)] p-5 shadow-xl">
                {vehicleGroups.map((group) => (
                  <div key={group.make}>
                    <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--color-amber)]">
                      {group.make}
                    </p>
                    <ul className="space-y-1.5">
                      {group.models.map((model) => (
                        <li key={model}>
                          <Link
                            to={`/vehicles/${`${group.make}-${model}`.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm text-[var(--color-cream-dim)] hover:text-[var(--color-cream)]"
                          >
                            {model}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-mono text-xs uppercase tracking-wider transition hover:text-[var(--color-amber)] ${
                  isActive ? 'text-[var(--color-amber)]' : 'text-[var(--color-cream-dim)]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/search"
            aria-label="Search"
            className="hidden text-[var(--color-cream-dim)] hover:text-[var(--color-amber)] lg:block"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </Link>
          <button
            className="text-[var(--color-cream)] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-[var(--color-ink-line)] px-4 py-4 lg:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block font-mono text-sm uppercase tracking-wider text-[var(--color-cream-dim)]"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/search"
                onClick={() => setOpen(false)}
                className="block font-mono text-sm uppercase tracking-wider text-[var(--color-amber)]"
              >
                Search
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
