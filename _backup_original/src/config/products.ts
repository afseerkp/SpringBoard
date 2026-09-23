import type { ProductCategory } from "../types/content.ts";

export const productCategories: ProductCategory[] = [
  {
    slug: "books",
    name: "School Books",
    menuLabel: "School Books",
    menuDescription: "Textbooks, workbooks and learning materials",
    cardDescription: "Academic books and learning materials selected to support students throughout the school year.",
    shortDescription: "Textbooks, notebooks and learning materials for the school year.",
    description:
      "From essential textbooks to everyday learning materials, our school book range is designed around the needs of modern students.",
    heroTitle: "Learning Starts with the Right Books.",
    heroText:
      "From essential textbooks to everyday learning materials, our school book range is designed around the needs of modern students.",
    features: [
      "Academic learning materials",
      "Student notebooks",
      "Educational resources",
      "Classroom essentials",
    ],
    examples: [
      { name: "Textbooks", detail: "Core subject books prepared for daily classroom use." },
      { name: "Workbooks", detail: "Practice books that support lessons across the year." },
      { name: "Notebooks", detail: "Everyday writing books with paper made for regular use." },
      { name: "Readers", detail: "Reading materials chosen to support independent study." },
    ],
    qualityTitle: "Made to be opened every day.",
    qualityText:
      "Bindings, covers and paper are chosen for repeated handling, so books stay useful from the start of term through the last lesson.",
    hero: { type: "scene", scene: "books-stack", alt: "A stack of colourful school books" },
    gallery: [
      { type: "scene", scene: "books-stack", alt: "Stacked school books" },
      { type: "scene", scene: "books-open", alt: "An open school book with a pencil" },
      { type: "scene", scene: "books-shelf", alt: "A row of upright school books" },
    ],
  },
  {
    slug: "stationery",
    name: "Stationery",
    menuLabel: "Stationery",
    menuDescription: "Writing, drawing and classroom tools",
    cardDescription: "Everyday writing, drawing and classroom essentials designed for practical school use.",
    shortDescription: "Pencils, pens, notebooks and the tools of a classroom day.",
    description:
      "From the first pencil stroke to the final classroom project, the right stationery makes everyday learning easier.",
    heroTitle: "Small Tools. Big Ideas.",
    heroText:
      "From the first pencil stroke to the final classroom project, the right stationery makes everyday learning easier.",
    features: [
      "Writing instruments",
      "Notebooks and paper",
      "Geometry tools",
      "Drawing and colour supplies",
    ],
    examples: [
      { name: "Pencils and pens", detail: "Everyday writing tools for notes, tests and classwork." },
      { name: "Erasers and sharpeners", detail: "Small essentials that keep work neat and ready." },
      { name: "Rulers and geometry sets", detail: "Practical tools for maths and technical drawing." },
      { name: "Markers and coloured pencils", detail: "Colour tools for projects, labels and creative work." },
    ],
    qualityTitle: "Tools that stay in the pencil case.",
    qualityText:
      "Stationery is chosen for grip, line quality and everyday durability, so students can rely on it through a full school week.",
    hero: { type: "scene", scene: "stationery-spread", alt: "A notebook surrounded by pencils, pens and classroom tools" },
    gallery: [
      { type: "scene", scene: "stationery-spread", alt: "A spread of school stationery" },
      { type: "scene", scene: "stationery-geometry", alt: "Geometry tools arranged on a desk" },
      { type: "scene", scene: "stationery-colors", alt: "A fan of coloured pencils" },
    ],
  },
  {
    slug: "uniforms",
    name: "School Uniforms",
    menuLabel: "School Uniforms",
    menuDescription: "Comfortable, polished schoolwear",
    cardDescription: "Comfortable and practical schoolwear designed for a smart, consistent school-day appearance.",
    shortDescription: "Shirts, pinafores, trousers and ties for a polished school day.",
    description:
      "Comfortable, practical and polished schoolwear designed for everyday student life.",
    heroTitle: "Designed for School Days.",
    heroText: "Comfortable, practical and polished schoolwear designed for everyday student life.",
    features: [
      "White school shirts",
      "Blue pinafore and trousers",
      "Ties and bows",
      "Socks for everyday wear",
    ],
    examples: [
      { name: "White shirts", detail: "Crisp shirts cut for a full day of movement and lessons." },
      { name: "Blue pinafore", detail: "A practical dress uniform with a clean, consistent look." },
      { name: "Blue trousers", detail: "Durable trousers designed for everyday school routines." },
      { name: "Ties and bows", detail: "Red ties and bows that complete a smart appearance." },
    ],
    qualityTitle: "Comfort that lasts the school day.",
    qualityText:
      "Fabric, fit and finish are considered together, so uniforms look neat in the morning and stay comfortable until home time.",
    hero: { type: "scene", scene: "uniform-pair", alt: "A girl's pinafore uniform and a boy's shirt and trousers" },
    gallery: [
      { type: "scene", scene: "uniform-girl", alt: "Girl's school uniform with a blue pinafore and red bow" },
      { type: "scene", scene: "uniform-boy", alt: "Boy's school uniform with blue trousers and a red tie" },
      { type: "scene", scene: "uniform-pair", alt: "School uniforms arranged side by side" },
    ],
  },
  {
    slug: "shoes",
    name: "School Shoes",
    menuLabel: "School Shoes",
    menuDescription: "Comfortable everyday school footwear",
    cardDescription: "Durable and comfortable footwear designed for everyday school routines.",
    shortDescription: "Black and brown school shoes for everyday comfort.",
    description:
      "School footwear designed to balance everyday comfort, durability and a smart appearance.",
    heroTitle: "Comfort in Every Step.",
    heroText: "School footwear designed to balance everyday comfort, durability and a smart appearance.",
    features: [
      "Black lace-up styles",
      "Brown strap styles",
      "Durable soles",
      "A neat school-day finish",
    ],
    examples: [
      { name: "Black lace-ups", detail: "A polished oxford style for everyday school wear." },
      { name: "Brown strap shoes", detail: "A secure Mary Jane style with a tidy profile." },
      { name: "Everyday soles", detail: "Soles shaped for walking between classes and playground time." },
      { name: "Neat finishing", detail: "Clean lines and careful stitching for a smart appearance." },
    ],
    qualityTitle: "Built for a day on their feet.",
    qualityText:
      "Uppers, stitching and soles are considered for comfort and durability, so shoes keep their shape through ordinary school weeks.",
    hero: { type: "scene", scene: "shoes-pair", alt: "Black and brown school shoes with a soft reflection" },
    gallery: [
      { type: "scene", scene: "shoes-black", alt: "A pair of black lace-up school shoes" },
      { type: "scene", scene: "shoes-brown", alt: "A pair of brown strap school shoes" },
      { type: "scene", scene: "shoes-pair", alt: "Black and brown school shoes together" },
    ],
  },
];

export function getCategory(slug: string | undefined) {
  return productCategories.find((category) => category.slug === slug);
}
