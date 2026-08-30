import GalleryPage from "../../components/GalleryPage";
import { images } from "../../gallery-data";

export default function BridalGallery() {
  return <GalleryPage title="Bridal" eyebrow="Vows · joy · heirlooms" description="An artful record of the grandeur, tenderness, and beautiful in-between moments that make a wedding entirely your own." hero={images.bridal} collection={[images.portrait, images.bridal, images.event]} />;
}
