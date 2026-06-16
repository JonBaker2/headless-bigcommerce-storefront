import { Award, MapPin, Package, ShieldCheck } from 'lucide-react';

import './trust.css';

const items = [
  {
    Icon: ShieldCheck,
    title: 'FFL Licensed Dealer',
    body: 'Certified Federal Firearms Licensee with full transfer services and compliance expertise.',
  },
  {
    Icon: Package,
    title: 'In-Stock Guarantee',
    body: 'We stock what we sell. No pre-order delays — gear is ready to go when you are.',
  },
  {
    Icon: Award,
    title: 'Expert Staff',
    body: 'Our team hunts, fishes, and shoots. Real knowledge for your next Michigan adventure.',
  },
  {
    Icon: MapPin,
    title: 'Two Locations',
    body: "Visit us in Clare or Gaylord. Michigan's premier full-service sporting goods stores.",
  },
];

export function JaysTrust() {
  return (
    <section className="jays-trust">
      <div className="jays-trust__inner">
        <div className="trust-grid">
          {items.map(({ Icon, title, body }) => (
            <div key={title} className="trust-item">
              <div className="trust-item__icon">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <div className="trust-item__text">
                <h3 className="trust-item__title">{title}</h3>
                <p className="trust-item__body">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
