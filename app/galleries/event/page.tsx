import GalleryPage from "../../components/GalleryPage";
import { images } from "../../gallery-data";

export default function EventGallery() {
  return <GalleryPage title="Event" eyebrow="Atmosphere · people · occasion" description="Polished documentary coverage that captures the design, energy, and genuine connections that give an event its singular character." hero={images.event} collection={[images.event, images.bridal, images.family]} />;
}
