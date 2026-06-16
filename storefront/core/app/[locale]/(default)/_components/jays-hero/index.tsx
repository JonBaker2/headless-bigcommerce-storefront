import { ChevronRight, Crosshair, Eye, Fish, Flame, Target, Trees } from 'lucide-react';
import Link from 'next/link';

const departments = [
  { label: 'Firearms',  href: '/firearms', Icon: Crosshair },
  { label: 'Fishing',   href: '/fishing',  Icon: Fish      },
  { label: 'Hunting',   href: '/hunting',  Icon: Trees     },
  { label: 'Archery',   href: '/archery',  Icon: Target    },
  { label: 'Camping',   href: '/camping',  Icon: Flame     },
  { label: 'Optics',    href: '/optics',   Icon: Eye       },
];

export function JaysHero() {
  return (
    <section className="jays-hero">
      <div className="jays-accent-bar" aria-hidden="true">
        <span className="jays-accent-bar__gold" />
        <span className="jays-accent-bar__orange" />
        <span className="jays-accent-bar__red" />
      </div>

      <div className="jays-hero__inner">
        {/* Left: content */}
        <div className="jays-hero__content">
          <span className="jays-hero__eyebrow">Clare &amp; Gaylord, Michigan</span>

          <h1 className="jays-hero__title">
            Built for<br />
            <em>Michigan</em><br />
            Outdoors
          </h1>

          <p className="jays-hero__subtitle">
            Firearms, archery, fishing, and hunting gear from brands
            you trust — in stock at two Michigan locations.
          </p>

          <div className="jays-hero__stats" aria-label="Store highlights">
            <div className="jays-hero__stat">
              <span className="jays-hero__stat-value">55+</span>
              <span className="jays-hero__stat-label">Years Serving MI</span>
            </div>
            <div className="jays-hero__stat">
              <span className="jays-hero__stat-value">2</span>
              <span className="jays-hero__stat-label">Locations</span>
            </div>
            <div className="jays-hero__stat">
              <span className="jays-hero__stat-value">FFL</span>
              <span className="jays-hero__stat-label">Licensed Dealer</span>
            </div>
          </div>

          <div className="jays-hero__actions">
            <Link href="/shop-all" className="jays-hero__cta-primary">
              Shop All Departments
              <ChevronRight size={16} />
            </Link>
            <Link href="/store-locations" className="jays-hero__cta-secondary">
              Find a Store
            </Link>
          </div>
        </div>

        {/* Right: department quick-links */}
        <nav className="jays-hero__dept-nav" aria-label="Shop by department">
          {departments.map(({ label, href, Icon }) => (
            <Link key={label} href={href} className="jays-hero__dept-link">
              <span className="jays-hero__dept-icon">
                <Icon size={18} />
              </span>
              <span>{label}</span>
              <ChevronRight size={14} className="jays-hero__dept-arrow" />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
