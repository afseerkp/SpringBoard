export const sceneIds = [
  "books-stack",
  "books-open",
  "books-shelf",
  "stationery-spread",
  "stationery-geometry",
  "stationery-colors",
  "uniform-girl",
  "uniform-boy",
  "uniform-pair",
  "shoes-black",
  "shoes-brown",
  "shoes-pair",
  "school-desk",
  "school-bag",
  "paper-detail",
  "pencil-detail",
  "fabric-detail",
  "stitch-detail",
] as const;

export type SceneId = (typeof sceneIds)[number];

/**
 * Swap `scene` illustrations for photography by using `{ type: "image" }`.
 * Keep alt text specific to the picture.
 */
export type VisualAsset =
  | { type: "scene"; scene: SceneId; alt: string }
  | { type: "image"; src: string; alt: string; position?: string; fit?: "cover" | "contain" };

export type ProductExample = {
  name: string;
  detail: string;
};

export type ProductCategory = {
  slug: "books" | "stationery" | "uniforms" | "shoes";
  name: string;
  menuLabel: string;
  menuDescription: string;
  cardDescription: string;
  shortDescription: string;
  description: string;
  heroTitle: string;
  heroText: string;
  features: string[];
  examples: ProductExample[];
  qualityTitle: string;
  qualityText: string;
  hero: VisualAsset;
  gallery: VisualAsset[];
};

export type GalleryCategory = "Books" | "Stationery" | "Uniforms" | "Shoes" | "School Life";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  visual: VisualAsset;
  tall?: boolean;
};
