import { galleryLinks } from "../gallery-data";

export default function SiteHeader({ dark = true }: { dark?: boolean }) {
  return (
    <header className={`site-header${dark ? "" : " site-header--light"}`}>
      <a className="brand" href="/" aria-label="Kelly Insinga Photography, home">
        <span className="brand-mark" aria-hidden="true">KI</span>
        <span className="brand-name">Kelly Insinga</span>
        <span className="brand-role">Photography</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="/">Home</a>
        <details className="gallery-nav">
          <summary>Galleries <span aria-hidden="true">⌄</span></summary>
          <div className="gallery-nav-panel">
            {galleryLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
          </div>
        </details>
        <a href="/#experience">Experience</a>
        <a href="/#about">About</a>
      </nav>

      <a className="header-cta" href="/#inquire">Inquire</a>

      <details className="mobile-menu">
        <summary aria-label="Open navigation menu">
          <span></span><span></span><span></span>
        </summary>
        <div className="mobile-menu-panel">
          <p>Explore</p>
          <a href="/">Home</a>
          {galleryLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
          <a href="/#experience">Experience</a>
          <a href="/#about">About</a>
          <a href="/#inquire">Inquire</a>
        </div>
      </details>
    </header>
  );
}
