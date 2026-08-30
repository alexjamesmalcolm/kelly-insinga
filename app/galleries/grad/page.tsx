import GalleryPage from "../../components/GalleryPage";
import { images } from "../../gallery-data";

export default function GradGallery() {
  return <GalleryPage title="Grad" eyebrow="Achievement · confidence · becoming" description="Editorial graduation portraits that celebrate the work behind the milestone and the promise of everything still ahead." hero={images.grad} collection={[images.grad, images.portrait, images.family]} />;
}
