import Link from 'next/link';

export function JaysHero() {
  const departments = [
    { label: 'Firearms', href: '/firearms', icon: 'Firearms' },
    { label: 'Fishing', href: '/fishing', icon: 'Fishing' },
    { label: 'Hunting', href: '/hunting', icon: 'Hunting' },
    { label: 'Archery', href: '/archery', icon: 'Archery' },
    { label: 'Camping', href: '/camping', icon: 'Camping' },
    { label: 'Optics', href: '/optics', icon: 'Optics' },
  ];

  return (
    <section className="jays-hero">
      <div className="jays-accent-bar" aria-hidden="true">
        <span className="jays-accent-bar__gold" />
        <span className="jays-accent-bar__orange" />
        <span className="jays-accent-bar__red" />
      </div>
      <div className="jays-hero__inner">
        <div className="jays-hero__content">
          <span className="jays-hero__eyebrow">Clare &amp; Gaylord, Michigan</span>
          <h1 className="jays-hero__title">Built for Michigan Outdoors</h1>
          <p className="jays-hero__subtitle">
            Firearms, archery, fishing, and hunting gear from brands you trust.
            In stock and ready to go.
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
        <nav className="jays-hero__departments" aria-label="Shop by department">
          {departments.map(({ label, href }) => (
            <Link key={label} href={href} className="jays-hero__dept-link">
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
