import Link from 'next/link';

export function JaysHero() {
  return (
    <section className="jays-hero">
      {/* Signature element: three-color bar from Jay's logo palette */}
      <div className="jays-accent-bar" aria-hidden="true">
        <span className="jays-accent-bar__gold" />
        <span className="jays-accent-bar__orange" />
        <span className="jays-accent-bar__red" />
      </div>

      <div className="jays-hero__inner">
        <div className="jays-hero__content">
          <span className="jays-hero__eyebrow">Clare &amp; Gaylord, Michigan</span>
          <h1 className="jays-hero__title">Built for Michigan&nbsp;Outdoors</h1>
          <p className="jays-hero__subtitle">
            Firearms, archery, fishing, and hunting gear from brands you trust —
            in stock and ready to go.
          </p>
          <div className="jays-hero__actions">
            <Link href="/shop-all" className="jays-hero__cta-primary">
              Shop All Departments
            </Link>
            <Link href="/store-locations" className="jays-hero__cta-secondary">
              Find a Store
            </Link>
          </div>
        </div>

        {/* Department quick-links */}
        <nav className="jays-hero__departments" aria-label="Shop by department">
          {[
            { label: 'Firearms',  href: '/firearms',  icon: '🎯' },
            { label: 'Fishing',   href: '/fishing',   icon: '🎣' },
            { label: 'Hunting',   href: '/hunting',   icon: '🌲' },
            { label: 'Archery',   href: '/archery',   icon: '🏹' },
            { label: 'Camping',   href: '/camping',   icon: '⛺' },
            { label: 'Optics',    href: '/optics',    icon: '🔭' },
          ].map(({ label, href, icon }) => (
            <Link key={label} href={href} className="jays-hero__dept-link">
              <span className="jays-hero__dept-icon" aria-hidden="true">{icon}</span>
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}