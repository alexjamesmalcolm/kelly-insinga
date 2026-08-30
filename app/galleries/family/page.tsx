import GalleryPage from "../../components/GalleryPage";
import { images } from "../../gallery-data";

export default function FamilyGallery() {
  return <GalleryPage title="Family" eyebrow="Connection · legacy · home" description="Warm, unhurried photographs that honor who your family is now and preserve the relationships that will matter for generations." hero={images.family} collection={[images.family, images.portrait, images.event]} />;
}
