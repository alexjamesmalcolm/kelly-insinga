import type { PortfolioImage } from "./components/ResponsiveImage";

export const images: Record<string, PortfolioImage> = {
  portrait: { id: "editorial-portrait", title: "Editorial portrait", width: 1122, height: 1402, widths: [480, 800, 1122] },
  bridal: { id: "wedding-story", title: "Bridal celebration", width: 1536, height: 1024, widths: [480, 800, 1200, 1536] },
  family: { id: "family-story", title: "Family story", width: 1536, height: 1024, widths: [480, 800, 1200, 1536] },
  grad: { id: "grad-story", title: "Graduation portrait", width: 1122, height: 1402, widths: [480, 800, 1122] },
  event: { id: "event-story", title: "Evening event", width: 1536, height: 1024, widths: [480, 800, 1200, 1536] },
};

export const galleryLinks = [
  { href: "/galleries/bridal", label: "Bridal" },
  { href: "/galleries/family", label: "Family" },
  { href: "/galleries/grad", label: "Grad" },
  { href: "/galleries/event", label: "Event" },
];
