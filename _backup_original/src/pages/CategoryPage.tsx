import { useParams } from "react-router-dom";
import { getCategory } from "../config/products.ts";
import { CategoryView } from "../components/products/CategoryView.tsx";
import NotFoundPage from "./NotFoundPage.tsx";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = getCategory(slug);
  if (!category) return <NotFoundPage />;
  return <CategoryView category={category} />;
}
