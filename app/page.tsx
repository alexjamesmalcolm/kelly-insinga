import ResponsiveImage from "./components/ResponsiveImage";
import SiteHeader from "./components/SiteHeader";
import { galleryLinks, images } from "./gallery-data";

const featured = [
  { image: images.bridal, category: "Bridal", href: "/galleries/bridal", note: "The grandeur and the in-between" },
  { image: images.family, category: "Family", href: "/galleries/family", note: "Connection made timeless" },
  { image: images.grad, category: "Grad", href: "/galleries/grad", note: "A milestone, artfully remembered" },
  { image: images.event, category: "Event", href: "/galleries/event", note: "Every detail, every arrival" },
  { image: images.portrait, category: "Portrait", href: "/galleries/grad", note: "Quiet confidence, artfully framed" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Columbus · Ohio · Beyond</p>
          <h1>Honest moments,<br /><em>beautifully</em> preserved.</h1>
          <p className="hero-intro">Refined, story-driven photography for celebrations and portraits that deserve to become heirlooms.</p>
          <a className="text-link" href="#featured">View featured work <span aria-hidden="true">↘</span></a>
        </div>
        <div className="hero-image">
          <span className="image-label">Featured story · Placeholder</span>
          <ResponsiveImage image={images.portrait} priority sizes="(max-width: 800px) 100vw, 51vw" />
        </div>
        <p className="hero-side-note">Timeless imagery<br />with a modern soul</p>
      </section>

      <section className="intro" id="experience">
        <p className="section-number">01 / The approach</p>
        <div>
          <p className="intro-kicker">Your story, elevated</p>
          <h2>Photographs that feel as<br />remarkable as the moment.</h2>
          <p className="intro-copy">With thoughtful direction and an observant eye, Kelly creates an effortless experience—leaving room for real connection, quiet details, and everything that unfolds between them.</p>
        </div>
      </section>

      <section className="portfolio featured-portfolio" id="featured">
        <div className="section-heading">
          <div>
            <p className="section-number">02 / Best of the best</p>
            <h2>Featured Gallery</h2>
          </div>
          <p>A signature collection of Kelly&apos;s strongest<br />stories, portraits, and passing moments.</p>
        </div>

        <div className="featured-grid">
          {featured.map((item, index) => (
            <a className={`feature-card feature-card--${index + 1}`} href={item.href} key={`${item.image.id}-${index}`}>
              <div className="gallery-image">
                <ResponsiveImage image={item.image} sizes="(max-width: 800px) 92vw, (max-width: 1200px) 46vw, 32vw" />
                <span className="placeholder-flag">Temporary image</span>
              </div>
              <div className="gallery-meta">
                <span>0{index + 1}</span>
                <div><h3>{item.category}</h3><p>{item.note}</p></div>
                <span aria-hidden="true">↗</span>
              </div>
            </a>
          ))}
        </div>

        <div className="gallery-directory" aria-label="Browse all galleries">
          <p>Explore each collection</p>
          {galleryLinks.map((link) => <a href={link.href} key={link.href}>{link.label} <span aria-hidden="true">↗</span></a>)}
        </div>
      </section>

      <section className="about" id="about">
        <p className="section-number">03 / Meet Kelly</p>
        <div className="about-copy">
          <p className="script-note">The eye behind the lens</p>
          <h2>Beauty lives in<br />what is <em>true.</em></h2>
          <p>Kelly approaches every session with calm direction, genuine care, and an eye for the understated details that make a story singular. The result is imagery that feels polished without losing its soul.</p>
        </div>
        <blockquote>“The best photographs do more than show how it looked—they return you to how it felt.”</blockquote>
      </section>

      <section className="inquire" id="inquire">
        <p className="eyebrow">Now accepting select commissions</p>
        <h2>Let&apos;s create something<br /><em>enduring.</em></h2>
        <a className="button" href="mailto:hello@example.com">Begin your inquiry <span aria-hidden="true">→</span></a>
        <p className="temporary-note">Temporary contact address — replace before launch</p>
      </section>

      <footer>
        <a className="brand brand--footer" href="/"><span className="brand-mark" aria-hidden="true">KI</span><span className="brand-name">Kelly Insinga</span><span className="brand-role">Photography</span></a>
        <p>Columbus, Ohio · Available for travel</p>
        <p>© 2026 Kelly Insinga Photography</p>
      </footer>
    </main>
  );
}
