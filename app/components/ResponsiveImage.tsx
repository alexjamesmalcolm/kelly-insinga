export type PortfolioImage = {
  id: string;
  title: string;
  width: number;
  height: number;
  widths: number[];
  position?: string;
};

export default function ResponsiveImage({
  image,
  priority = false,
  sizes = "(max-width: 720px) 92vw, (max-width: 1100px) 72vw, 46vw",
}: {
  image: PortfolioImage;
  priority?: boolean;
  sizes?: string;
}) {
  const srcSet = (extension: "webp" | "jpg") =>
    image.widths.map((size) => `/images/${image.id}-${size}.${extension} ${size}w`).join(", ");
  const largest = image.widths[image.widths.length - 1];

  return (
    <picture>
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <img
        src={`/images/${image.id}-${largest}.jpg`}
        srcSet={srcSet("jpg")}
        sizes={sizes}
        alt={`${image.title} — temporary portfolio photograph`}
        width={image.width}
        height={image.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        style={image.position ? { objectPosition: image.position } : undefined}
      />
    </picture>
  );
}
