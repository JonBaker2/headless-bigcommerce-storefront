import { ChevronRight, Crosshair, Eye, Fish, Flame, Target, Trees } from 'lucide-react';
import Link from 'next/link';

import './department-grid.css';

const departments = [
  {
    label: 'Firearms',
    href: '/firearms',
    description: 'Handguns, rifles & shotguns',
    Icon: Crosshair,
    theme: 'firearms',
  },
  {
    label: 'Fishing',
    href: '/fishing',
    description: 'Reels, rods, tackle & bait',
    Icon: Fish,
    theme: 'fishing',
  },
  {
    label: 'Hunting',
    href: '/hunting',
    description: 'Clothing, calls & tree stands',
    Icon: Trees,
    theme: 'hunting',
  },
  {
    label: 'Archery',
    href: '/archery',
    description: 'Bows, arrows & accessories',
    Icon: Target,
    theme: 'archery',
  },
  {
    label: 'Camping',
    href: '/camping',
    description: 'Coolers, knives & survival gear',
    Icon: Flame,
    theme: 'camping',
  },
  {
    label: 'Optics',
    href: '/optics',
    description: 'Scopes, binoculars & rangefinders',
    Icon: Eye,
    theme: 'optics',
  },
];

export function DepartmentGrid() {
  return (
    <section className="dept-grid">
      <div className="dept-grid__inner">
        <header className="dept-grid__header">
          <span className="jays-eyebrow">Shop by Department</span>
          <h2 className="jays-section-title">Everything for the Outdoors</h2>
          <div className="jays-divider" />
        </header>

        <div className="dept-grid__tiles">
          {departments.map(({ label, href, description, Icon, theme }) => (
            <Link key={label} href={href} className={`dept-tile dept-tile--${theme}`}>
              <div className="dept-tile__bg" aria-hidden="true" />

              <div className="dept-tile__icon-wrap" aria-hidden="true">
                <Icon size={56} strokeWidth={1} />
              </div>

              <div className="dept-tile__content">
                <h3 className="dept-tile__name">{label}</h3>
                <p className="dept-tile__desc">{description}</p>
                <span className="dept-tile__cta">
                  Shop Now <ChevronRight size={14} />
                </span>
              </div>

              <div className="dept-tile__bar" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
