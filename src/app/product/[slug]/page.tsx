// app/product/[slug]/page.tsx
import { notFound } from "next/navigation";
import { fetchProducts } from "@/app/api";
import ProductDetails from "@/components/ProductDetailsComponent";
import Breadcrumb from "@/components/BreadCrumbs";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the params promise
  const { slug } = await params;

  const products = await fetchProducts();
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: product.name, href: `/product/${product.slug}` },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <ProductDetails product={product} />
    </div>
  );
}
