import type { GalleryCategory, GalleryItem } from "../types/content.ts";

export const galleryFilters: Array<"All" | GalleryCategory> = [
  "All",
  "Books",
  "Stationery",
  "Uniforms",
  "Shoes",
  "School Life",
];

export const galleryItems: GalleryItem[] = [
  {
    id: "books-stack",
    title: "Colourful book stack",
    category: "Books",
    tall: true,
    visual: { type: "scene", scene: "books-stack", alt: "A stack of colourful school books" },
  },
  {
    id: "books-open",
    title: "Open learning book",
    category: "Books",
    visual: { type: "scene", scene: "books-open", alt: "An open book ready for study" },
  },
  {
    id: "books-shelf",
    title: "Book row",
    category: "Books",
    visual: { type: "scene", scene: "books-shelf", alt: "Upright school books in a row" },
  },
  {
    id: "stationery-spread",
    title: "Desk essentials",
    category: "Stationery",
    tall: true,
    visual: { type: "scene", scene: "stationery-spread", alt: "Notebook, pencils, pens and classroom tools" },
  },
  {
    id: "stationery-geometry",
    title: "Geometry set",
    category: "Stationery",
    visual: { type: "scene", scene: "stationery-geometry", alt: "Ruler, set square and compass" },
  },
  {
    id: "stationery-colors",
    title: "Colour pencils",
    category: "Stationery",
    visual: { type: "scene", scene: "stationery-colors", alt: "Coloured pencils arranged in a fan" },
  },
  {
    id: "uniform-girl",
    title: "Pinafore uniform",
    category: "Uniforms",
    tall: true,
    visual: { type: "scene", scene: "uniform-girl", alt: "White shirt, blue pinafore and red bow" },
  },
  {
    id: "uniform-boy",
    title: "Shirt and trousers",
    category: "Uniforms",
    tall: true,
    visual: { type: "scene", scene: "uniform-boy", alt: "White shirt, blue trousers and red tie" },
  },
  {
    id: "uniform-pair",
    title: "Uniform pair",
    category: "Uniforms",
    visual: { type: "scene", scene: "uniform-pair", alt: "Two school uniforms arranged together" },
  },
  {
    id: "shoes-black",
    title: "Black lace-ups",
    category: "Shoes",
    visual: { type: "scene", scene: "shoes-black", alt: "Black lace-up school shoes" },
  },
  {
    id: "shoes-brown",
    title: "Brown strap shoes",
    category: "Shoes",
    visual: { type: "scene", scene: "shoes-brown", alt: "Brown strap school shoes" },
  },
  {
    id: "shoes-pair",
    title: "School footwear",
    category: "Shoes",
    tall: true,
    visual: { type: "scene", scene: "shoes-pair", alt: "Black and brown school shoes" },
  },
  {
    id: "school-desk",
    title: "Ready desk",
    category: "School Life",
    visual: { type: "scene", scene: "school-desk", alt: "A desk set with books, stationery and a school bag" },
  },
  {
    id: "school-bag",
    title: "Packed bag",
    category: "School Life",
    tall: true,
    visual: { type: "scene", scene: "school-bag", alt: "A school backpack with books beside it" },
  },
  {
    id: "paper-detail",
    title: "Notebook page",
    category: "School Life",
    visual: { type: "scene", scene: "paper-detail", alt: "Close view of a lined notebook page" },
  },
];
