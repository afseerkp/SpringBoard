import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/layout/SiteLayout.tsx";

const HomePage = lazy(() => import("./pages/HomePage.tsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.tsx"));
const ProductsPage = lazy(() => import("./pages/ProductsPage.tsx"));
const CategoryPage = lazy(() => import("./pages/CategoryPage.tsx"));
const GalleryPage = lazy(() => import("./pages/GalleryPage.tsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.tsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.tsx"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:slug" element={<CategoryPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
