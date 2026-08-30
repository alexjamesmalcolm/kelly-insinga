import ResponsiveImage, { type PortfolioImage } from "./ResponsiveImage";
import SiteHeader from "./SiteHeader";

export default function GalleryPage({
  title,
  eyebrow,
  description,
  hero,
  collection,
}: {
  title: string;
  eyebrow: string;
  description: string;
  hero: PortfolioImage;
  collection: PortfolioImage[];
}) {
  return (
    <main className="gallery-page">
      <SiteHeader />
      <section className="gallery-page-hero">
        <div className="gallery-page-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="gallery-page-hero-image">
          <ResponsiveImage image={hero} priority sizes="(max-width: 800px) 100vw, 58vw" />
          <span className="placeholder-flag">Temporary image</span>
        </div>
      </section>

      <section className="gallery-collection">
        <div className="gallery-collection-heading">
          <p className="section-number">Selected moments</p>
          <h2>A glimpse into<br />the <em>story.</em></h2>
          <p>These temporary images establish the gallery experience. Kelly&apos;s finished selections will replace them before launch.</p>
        </div>
        <div className="gallery-masonry">
          {collection.map((image, index) => (
            <figure key={`${image.id}-${index}`} className={`gallery-masonry-item gallery-masonry-item--${index + 1}`}>
              <ResponsiveImage image={image} sizes="(max-width: 800px) 92vw, 42vw" />
              <figcaption>Temporary portfolio image · 0{index + 1}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="gallery-next">
        <p className="eyebrow">A celebration worth remembering</p>
        <h2>Ready to preserve<br /><em>your story?</em></h2>
        <a className="button" href="mailto:hello@example.com">Begin your inquiry <span aria-hidden="true">→</span></a>
      </section>
    </main>
  );
}
